import { PhoneIcon, SearchIcon, TimeIcon } from '@chakra-ui/icons'
import { HStack,Container, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import MenuNavbar from './MenuNavbar'
  

function Navbar() {
    return (
        <div zIndex={999}>
        <Container maxW={"container.xl"}>
        <HStack justifyContent={"space-between"} p="30px 0px">
            <HStack  position="relative" >
                <TimeIcon color="#662400" fontSize={[10,20,30,40]} />
                <VStack alignItems="self-start">
                    <Text fontWeight="bold" fontSize={[7,10,10,15]}>Mon - Sat: 9:00 - 18:00</Text>
                    <Text fontSize={[7,10,10,15]} opacity="70%">Sunday Closed</Text>
                </VStack>
            </HStack>
            <HStack position="relative"  >
                <SearchIcon color="#662400" fontSize={[10,20,30,40]}/>
                <VStack alignItems="self-start">
                    <Text fontWeight="bold" fontSize={[7,10,10,15]}>311 Center Park</Text>
                    <Text fontSize={[7,10,10,15]} opacity="70%">NewYork NY 30501</Text>
                </VStack>
            </HStack>
            <HStack position="relative" >
                <PhoneIcon color="#662400" fontSize={[10,20,30,40]} />
                <VStack alignItems="self-start">
                    <Text fontWeight="bold" fontSize={[7,10,10,15]}>(+20) 5160286161</Text>
                    <Text fontSize={[7,10,10,15]} opacity="70%">omarmoha20113@gmail.com</Text>
                </VStack>
            </HStack>
            </HStack>
            </Container>
        <MenuNavbar />
        </div>
    )
}

export default Navbar
