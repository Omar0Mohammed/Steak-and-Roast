import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import AboutUsGrid from './AboutUsGrid';
import Teams from './Teams/Teams';

function AboutUs() {

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
          ABOUT US
        </Text>
        </Box>
        <AboutUsGrid />
        <Teams />
    </div>
  )
}

export default AboutUs