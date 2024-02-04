import React from 'react'
import {Box, Center, Container, Divider, HStack, Stack, Text, VStack} from "@chakra-ui/react"
import {AiFillPhone} from "react-icons/ai"
import {GrLocation} from "react-icons/gr"
import {HiOutlineMail} from "react-icons/hi"
import EmailPart from './EmailPart'
function ContactUs() {
  return (
    <div>
      <Box backgroundColor="#461111" opacity={"85%"}
      backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png"
      w="100%" h="60vh">
        <Text
        fontSize={{base:"35px", lg:"65px"}} color="white" 
        textAlign={"center"} fontWeight="200"
        fontFamily={"'Josefin Sans', sans-serif;"} position="relative" top="35%"
        >
          CONTACT US
        </Text>
        </Box>
        <Container maxW={"container.xl"}>
        <Text textAlign={"center"} fontSize="35px" marginTop={"80px"} 
        fontWeight="bold" color={"#461111"}
        fontFamily={"'Bad Script', cursive;"} 
        >
          Get in touch with us !
        </Text>
        <Box marginTop={"80px"}>
          <Stack direction={{base:"column", lg:"row"}}
           align={{base:"center", lg:"flex-start"}} justifyContent={"space-around"}>
          <VStack >
            <AiFillPhone fontSize={["45px"]} color={"#461111"}/>
            <Text fontFamily={"'Josefin Sans', sans-serif;"} p="10px"
             fontSize="19px" color={"#461111"} fontWeight="bold"
            >PHONE</Text>
            <Text fontSize="20px" fontFamily={"'Josefin Sans', sans-serif;"}
            >Phone +201152534299</Text>
          </VStack>
          <VStack p={{base:"30px", lg:"0px"}} >
            <GrLocation fontSize="45px" color={"#461111"}/>
            <Text fontFamily={"'Josefin Sans', sans-serif;"} p="10px"
             fontSize="19px" color={"#461111"} fontWeight="bold"
            >ADDRESS</Text>
            <Text fontSize="20px" fontFamily={"'Josefin Sans', sans-serif;"}
            >Egypt , Safaga , Tv street</Text>
          </VStack>
          <VStack>
            <HiOutlineMail fontSize="45px" color={"#461111"}/>
            <Text fontFamily={"'Josefin Sans', sans-serif;"} p="10px"
             fontSize="19px" color={"#461111"} fontWeight="bold"
            >EMAIL</Text>
            <Text fontSize="20px" fontFamily={"'Josefin Sans', sans-serif;"}
            >omarmoha20113@gmail.com</Text>
            <Text fontSize="20px" fontFamily={"'Josefin Sans', sans-serif;"}
            >mohao17@yahoo.com</Text>
          </VStack>
          </Stack>
          <EmailPart />
        </Box>
        </Container>
    </div>
  )
}

export default ContactUs