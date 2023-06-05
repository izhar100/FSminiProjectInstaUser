import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Box } from '@chakra-ui/react'
import Home from './components/Home'
import AllRoutes from './components/AllRoutes'
import Footer from './components/Footer'

function App() {
  return (
    <Box fontFamily={"sans-serif"}>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </Box>
  )
}

export default App
