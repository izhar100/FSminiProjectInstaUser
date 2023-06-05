import {EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Heading, Input, InputGroup, InputLeftElement, Stack} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const toast=useToast()

    const handleClick=()=>{
      if(email=="" || password==""){
        toast({
            title: 'Please enter email or password',
            status: 'warning',
            duration: 2000,
            isClosable: true,
            position:'top'
        })
      }else{
        const loginData={
            email,
            password
        }
        login(loginData)
      }
    }
    const login=async(loginData)=>{
      await fetch("http://localhost:8000/user/login",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(loginData)
      }).then((res)=>res.json())
        .then((data)=>{
        if(data.token){
            localStorage.setItem("token",data.token)
            localStorage.setItem("role",data.role)
            toast({
                title: data.message,
                status: 'success',
                duration: 2000,
                isClosable: true,
                position:'top'
            })
            navigate("/users")
        }else{
            toast({
                title: data.message,
                status: 'error',
                duration: 2000,
                isClosable: true,
                position:'top'
            }) 
        }
      }).catch((err)=>{
        console.log(err)
      })
    }

    return (
        <Box h={"80vh"}>
            <Heading color={"#bf00ff"} fontSize={"40px"} textAlign={"center"}>Login</Heading>
            <Divider border={"2px solid #bf00ff"} w={"14%"} m={"auto"} mt={"10px"} />
            <br />
            <Stack spacing={4} w={"30%"} m={"auto"}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <EmailIcon color='gray.300' />
                    </InputLeftElement>
                    <Input borderColor={"#bf00ff"} focusBorderColor='pink.400' type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <LockIcon color='gray.300' />
                    </InputLeftElement>
                    <Input borderColor={"#bf00ff"} focusBorderColor='pink.400' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </InputGroup>
                <Button color={"white"} backgroundColor={"#bf00ff"} _hover={{backgroundColor:"#bf00ff"}} onClick={handleClick}>Login</Button>
            </Stack>
        </Box>
    )
}

export default Login
