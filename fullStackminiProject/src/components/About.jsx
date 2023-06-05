import { Box, Divider, Heading,Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box>
      <Heading color={"#bf00ff"} fontSize={"40px"} textAlign={"center"}>About us</Heading>
      <Divider border={"2px solid #bf00ff"} w={"14%"} m={"auto"} mt={"5px"}/>
      <br />
      <Box w={"90%"} m={"auto"} bgColor={"#f5cdff"} p={"20px"} borderRadius={"5px"}>
      <Text fontSize="lg" lineHeight="1.6" mb="20px">
        We are thrilled to have you here and introduce you to our incredible platform that brings you a whole new level of convenience and efficiency when it comes to managing Instagram user information. Whether you are an individual, a small business owner, or a social media manager, our site is designed to cater to your needs, providing you with a seamless experience that saves you time and effort.
      </Text>
      <Box mb="40px">
        <Heading as="h2" fontSize="xl" mb="20px">
          Key Features
        </Heading>
        <Box mb="20px">
          <Heading as="h3" fontSize="lg" mb="10px">
            User Viewing
          </Heading>
          <Text>
            With our site, you have the ability to view users' profiles quickly and easily. Whether you need to check the latest updates of your favorite influencers, keep an eye on competitors, or simply stay connected with your friends, our user viewing feature allows you to access their profiles and explore their content effortlessly.
          </Text>
        </Box>
        <Box mb="20px">
          <Heading as="h3" fontSize="lg" mb="10px">
            User Addition
          </Heading>
          <Text>
            Adding new users to your list has never been easier. With just a few simple clicks, you can seamlessly add new Instagram users to your database. Whether you're looking to expand your network, collaborate with influencers, or connect with potential customers, our platform simplifies the process, allowing you to focus on what matters most.
          </Text>
        </Box>
        <Box mb="20px">
          <Heading as="h3" fontSize="lg" mb="10px">
            User Deletion
          </Heading>
          <Text>
            We understand that managing a large number of users can become overwhelming at times. That's why we provide you with the option to delete users from your database effortlessly. Whether you need to remove inactive accounts, clean up your list, or streamline your workflow, our user deletion feature ensures that you have full control over your user management process.
          </Text>
        </Box>
        <Box mb="20px">
          <Heading as="h3" fontSize="lg" mb="10px">
            User Update
          </Heading>
          <Text>
            Keeping your user information up to date is crucial for effective engagement and communication. Our platform allows you to update user profiles with ease. Whether it's modifying contact details, refreshing bio information, or adding new insights, our user update feature empowers you to maintain accurate and relevant data, ensuring seamless interactions with your audience.
          </Text>
        </Box>
      </Box>
      <Text fontSize="lg" lineHeight="1.6" mb="20px">
        But that's not all! We take pride in providing you with a secure and reliable platform that prioritizes your privacy and data protection. Your trust is our top priority, and we have implemented robust security measures to safeguard your information. Rest assured that your data is encrypted and stored safely, giving you peace of mind as you manage your Instagram user information.
      </Text>
      <Text fontSize="lg" lineHeight="1.6" mb="20px">
        Furthermore, our platform is designed to be responsive and accessible across different devices and screen sizes. Whether you're accessing our site from a desktop computer, a tablet, or a mobile device, you can enjoy the same seamless experience and functionality.
      </Text>
      </Box>
    </Box>
  )
}

export default About
