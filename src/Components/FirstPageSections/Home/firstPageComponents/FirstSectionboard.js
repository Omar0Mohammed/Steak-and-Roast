import React from 'react'
import {Box, Button, Container, HStack,Text, VStack} from "@chakra-ui/react"

function FirstSectionboard() {
  return (
    <Box
      marginTop={"80px"}
      h="auto"
      w="100%" 
      backgroundColor="#461111" 
      backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png">
          <Container maxW={"container.xl"} centerContent>
            <VStack justifyContent={"center"} p="30px">
              <Text 
              color={"white"}
              fontSize={["20","25","28","45"]}
              fontWeight={"bold"}
              fontFamily={"'Josefin Sans', sans-serif;"}>Why us?</Text>
              <HStack >
                <Text
                color={"white"}
                fontSize={["14","16","18","25"]}
                fontFamily= "'Fuzzy Bubbles', cursive"
                >We provice the most satisfying and delicious Food in the City.
                </Text>
                <Button border={"#461111 solid 2px"}
                fontSize={[8,12,16,18,22]}
                fontFamily="'Boogaloo', cursive;"
                fontWeight="0"
                color="black"
                colorScheme="red"
                backgroundColor="#fff700" 
                p={["5px 20px",5,7,25,"30px 35px"]}>Our Services</Button>
                </HStack>
              </VStack>
            </Container>
      </Box>
  )
}

export default FirstSectionboard