import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <Flex bgColor={"#ffd8f5"} color={"#8400ff"} alignItems={"center"} justifyContent={"space-between"} position={"fixed"} w={"100%"}  boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;"
        } zIndex={1}>
                <Text as={"b"} fontSize={"30px"} p={"5px"} pl={"10px"} color={"#ff057e"}>Insta Users</Text>
                <Flex w={"50%"} justifyContent={"space-around"} fontSize={"16px"} as={"b"}>
                    <Text _hover={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/")} fontSize={"20px"}>Home</Text>
                    <Text _hover={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/about")} fontSize={"20px"}>About</Text>
                    <Text _hover={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/signup")} fontSize={"20px"}>SignUp</Text>
                    <Text _hover={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/login")} fontSize={"20px"}>Login</Text>
                </Flex>
            </Flex>
            <br />
            <br />
            <br />
        </>
    )
}

export default Navbar
