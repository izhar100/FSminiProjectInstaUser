import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box position='relative' padding='10'>
            <Divider border={"2px solid #ff00c3"}/>
            <AbsoluteCenter bg='white' px='4'>
                Made by Ezhar Ashraf
            </AbsoluteCenter>
        </Box>
    )
}

export default Footer
