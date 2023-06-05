import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, FormControl, FormLabel, Input, Select, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const Users = () => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    const toast = useToast()
    const [user, setUser] = useState([])
    const [flag, setFlag] = useState(false)
    const [username,setUsername] = useState("")
    const [dob,setDob]=useState("")
    const [location,setLocation]=useState("")
    const [userID,setUserID]=useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    useEffect(() => {
        if (token) {
            fetch("http://localhost:8000/user").then((res) => res.json()).then((data) => {
                setUser(data.user)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [flag])

    const handleEdit = (el) => {
        onOpen()
        setUsername(el.username)
        setDob(el.dob)
        setLocation(el.location)
        setUserID(el._id)

    }
    const handleDelete = (id) => {
        fetch(`http://localhost:8000/user/delete/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json()).then((data) => {
            if (data.user) {
                toast({
                    title: data.message,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: 'top'
                })
                setFlag(!flag)
            }
        })
    }
    const handleUpdate=(id)=>{
         const updateData={
            username,
            dob,
            location
         }
         fetch(`http://localhost:8000/user/update/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(updateData)
        }).then((res) => res.json()).then((data) => {
            if (data.user) {
                toast({
                    title: data.message,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    position: 'top'
                })
                setFlag(!flag)
                onClose()
            }
        })
         
    }

    return (
        <>
            <Box w={"80%"} m={"auto"}>
                {user?.reverse().map((el) => {
                    const id = el._id;
                    return <Flex key={el._id} borderRadius={"10px"} justifyContent={"space-around"} mt={"20px"} bgColor={"#d5e6ff"} p={"20px"}>
                        <Flex>
                            <Avatar bg='teal.500' border={"2px solid #ff00f2"} />
                        </Flex>
                        <Box textAlign={"center"}>
                            <Text as={"b"} color={"#5500ff"}>Username</Text>
                            <Text>{el.username}</Text>
                        </Box>
                        <Box textAlign={"center"}>
                            <Text as={"b"} color={"#5500ff"}>Date of Birth</Text>
                            <Text>{el.dob}</Text>
                        </Box>
                        <Box textAlign={"center"}>
                            <Text as={"b"} color={"#5500ff"}>Location</Text>
                            <Text>{el.location}</Text>
                        </Box>
                        <Box textAlign={"center"}>
                            <Text as={"b"} color={"#5500ff"}>Role</Text>
                            <Text>{el.role}</Text>
                        </Box>
                        <Box textAlign={"center"}>
                            <Text as={"b"} color={"#5500ff"}>Followers</Text>
                            <Text>5000</Text>
                        </Box>
                        <Box display={role == "admin" ? "block" : "none"} textAlign={"center"}>
                            <Text as={"b"} color={"#5500ff"}>Edit</Text>
                            <Text _hover={{ cursor: "pointer" }} onClick={()=>handleEdit(el)}><EditIcon color={"#ff00dd"} /></Text>
                        </Box>
                        <Box display={role == "admin" ? "block" : "none"} textAlign={"center"}>
                            <Text as={"b"} color={"#5500ff"}>Delete</Text>
                            <Text _hover={{ cursor: "pointer" }} onClick={() => handleDelete(id)}><DeleteIcon color={"red"} /></Text>
                        </Box>
                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader color={"#ff00c8"}>Update user</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel color={"#5500ff"}>username</FormLabel>
                                        <Input ref={initialRef} value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel color={"#5500ff"}>Date of Birth</FormLabel>
                                        <Input type='date' placeholder='date' value={dob} onChange={(e)=>setDob(e.target.value)} />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel color={"#5500ff"}>Location</FormLabel>
                                        <Input placeholder='location' value={location} onChange={(e)=>setLocation(e.target.value)} />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='purple' mr={3} onClick={()=>handleUpdate(userID)}>
                                        Update
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                    </Flex>
                })}
            </Box>
            <br />
            <br />
        </>
    )
}

export default Users
