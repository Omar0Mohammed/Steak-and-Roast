import { Box, HStack, Link, Text} from '@chakra-ui/react'
import React from 'react'
import {AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {GrPinterest} from "react-icons/gr"
function ContactUs2() {
  return (
    <Box>
        <Text textAlign={"center"} fontSize="35px" marginTop={"30px"} 
        fontWeight="bold" color={"#461111"}
        fontFamily={"'Bad Script', cursive;"} 
        >
          Connect with us !
        </Text>
        <HStack marginTop={"30px"} justifyContent={"space-between"}>
          <Link> 
          <Box backgroundColor={"#461111"} borderRadius="100px">
          <BsFacebook fontSize={"32px"} color="white"/>
          </Box>
          </Link>

          <Link> 
          <Box backgroundColor={"#461111"} borderRadius="100px">
          <AiFillTwitterCircle fontSize={"32px"} color="white"/>
          </Box>
          </Link>

          <Link> 
          <Box backgroundColor={"#461111"} borderRadius="100px">
          <GrPinterest fontSize={"32px"} color="white"/>
          </Box>
          </Link>

          <Link> 
          <Box backgroundColor={"#461111"} borderRadius="100px">
          <AiFillInstagram fontSize={"32px"} color="white"/>
          </Box>
          </Link>
        </HStack>
    </Box>
  )
}

export default ContactUs2