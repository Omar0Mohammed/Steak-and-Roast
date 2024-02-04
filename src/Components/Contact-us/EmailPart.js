import { Box, Button, Center, Input, InputGroup, Text, Textarea, VStack} from '@chakra-ui/react'
import React from 'react'
import ContactUs2 from './ContactUs-2'

function EmailPart() {
  return (
    <Box marginTop={"120px"}>
        <Text textAlign={"center"} fontFamily={"'Josefin Sans', sans-serif;"} fontSize="23px">
            IF YOU GOT ANY QUESTIONS
        </Text>
        <Text textAlign={"center"} fontFamily={"'Josefin Sans', sans-serif;"} fontSize="23px">
        PLEASE DO NOT HESITATE TO SEND US A MESSAGE
        </Text>
        <Center>
        <VStack spacing={"20px"} marginTop={"50px"} w="70%">
        <Input placeholder='Your Name' size={"lg"} type={"text"} borderColor="gray"
        />
        <Input placeholder='Your Email' size={"lg"} type={"email"} borderColor="gray"
        />
        <Input placeholder='Subject' size={"lg"} type={"text"} borderColor="gray"
        />
        <Textarea placeholder='Message' borderColor="gray" size={"lg"}/>
        <Button  bgColor={"#461111"} color="white" p="25px">
            SEND MESSAGE
        </Button>
        <ContactUs2 />
        </VStack>
        
        </Center>
    </Box>
  )
}

export default EmailPart