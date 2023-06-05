import { CalendarIcon, EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Heading, Input, InputGroup, InputLeftElement, Select, Stack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [dob,setDob]=useState("")
    const [location,setLocation]=useState("")
    const [role,setRole]=useState("")
    const [password,setPassword]=useState("")
    const [cfmPass,setcfmPass]=useState("")
    const navigate=useNavigate()
    const toast=useToast()

    const handleClick=()=>{
        if(username=="" || email=="" || location==""){
            toast({
                title: 'All fields are required',
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position:'top'
            })

        }else if(dob==""){
            toast({
                title: 'Please select Date of Birth',
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position:'top'
            })
        }else if(role==""){
            toast({
                title: 'Please select a role',
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position:'top'
              })
        }else if(password.length<4){
            toast({
                title: 'Password lenght should be alteast 4',
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position:'top'
            })
        }else if(password!==cfmPass){
            toast({
                title: 'Password did not match',
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position:'top'
            })
        }else{
            let obj={
                username,
                email,
                dob,
                location,
                role,
                password
            }
            addUser(obj)
        }
    }
    const addUser=async(user)=>{

        const data=await fetch(`http://localhost:8000/user/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((res)=>res.json()).then((data)=>{
            if(data.success){
                toast({
                    title: data.message,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    position:'top'
                })
                navigate("/login")
            }else{
                toast({
                    title: data.message,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position:'top'
                })
            }
        })
    }

    return (
        <Box>
            <Heading color={"#bf00ff"} fontSize={"40px"} textAlign={"center"}>Sign Up</Heading>
            <Divider border={"2px solid #bf00ff"} w={"14%"} m={"auto"} mt={"10px"} />
            <br />
            <Stack spacing={4} w={"30%"} m={"auto"}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <FaUser color='#cacaca' />
                    </InputLeftElement>
                    <Input borderColor={"#bf00ff"} focusBorderColor='pink.400' type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <EmailIcon color='gray.300' />
                    </InputLeftElement>
                    <Input borderColor={"#bf00ff"} focusBorderColor='pink.400' type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <CalendarIcon color='gray.300' />
                    </InputLeftElement>
                    <Input borderColor={"#bf00ff"} focusBorderColor='pink.400' type='date' placeholder='DD/MM/YYYY' value={dob} onChange={(e)=>setDob(e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <ImLocation2 color='#cacaca' />
                    </InputLeftElement>
                    <Input borderColor={"#bf00ff"} focusBorderColor='pink.400' type='text' placeholder='Location' value={location} onChange={(e)=>setLocation(e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <Select borderColor={"#bf00ff"} focusBorderColor='pink.400' value={role} onChange={(e)=>setRole(e.target.value)}>
                        <option value="">Role</option>
                        <option value="admin">Admin</option>
                        <option value="explorer">Explorer</option>
                    </Select>
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <LockIcon color='gray.300' />
                    </InputLeftElement>
                    <Input borderColor={"#bf00ff"} focusBorderColor='pink.400' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <LockIcon color='gray.300' />
                    </InputLeftElement>
                    <Input borderColor={"#bf00ff"} focusBorderColor='pink.400' type='password' placeholder='Confirm Password' value={cfmPass} onChange={(e)=>setcfmPass(e.target.value)} />
                </InputGroup>

                <Button color={"white"} backgroundColor={"#bf00ff"} _hover={{ backgroundColor: "#bf00ff" }} onClick={handleClick}>SignUp</Button>
            </Stack>
            <br />
            <br />
        </Box>
    )
}

export default SignUp
