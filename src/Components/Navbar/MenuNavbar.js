import {Box, HStack, Stack, Image, Button, Container, ButtonGroup} from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import "../styles/styles.css"
import {FaHamburger} from "react-icons/fa"
import {useEffect, useRef, useState} from "react"
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import {
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import UpMenu from "./UpMenu"

function MenuNavbar() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    return() => {
      window.addEventListener("resize",changeWidth)
  } 
  }, [])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <div>
      <Box 
      backgroundColor="#461111" 
      backgroundImage="https://www.transparenttextures.com/patterns/gradient-squares.png">
              
              <Container maxW={"container.xl"}>
              <HStack justifyContent={"space-between"}>
              <Image
                  w={{base:"60px",lg:"110px" }}
                  src="https://private-user-images.githubusercontent.com/86873404/302098140-8926374a-c41d-43cc-9c44-8732ceb5851f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwNDUyNDAsIm5iZiI6MTcwNzA0NDk0MCwicGF0aCI6Ii84Njg3MzQwNC8zMDIwOTgxNDAtODkyNjM3NGEtYzQxZC00M2NjLTljNDQtODczMmNlYjU4NTFmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDExMDkwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIwMGQ2Yjc4ODQwOGM0MzYxZTI4YTk3MDIxYzRkM2FkM2QwZGUwMTJhNzRjZDBiMzc4ZjUzNDU1ZjE5ZDdmYjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.q26aPHqy3rOtQwc0BhwfvGSIGgTv0ODnNzXX7d4d1ys"/>
              <Box
              display={{base:"block",lg:"none"}}>
             <FaHamburger 
              color={"white"}
              fontSize={"35px"}
              ref={btnRef} 
              onClick={onOpen}
              src="https://user-images.githubusercontent.com/86873404/164223799-c95699d6-0dff-4f85-9e33-df0c2fe2954d.png"/>
              </Box>
            <Stack
            display={{base:"none",lg:"flex"}}
            direction={"row"}
            color={"#744a50"}
            spacing={10}>
              <Menu zIndex={999}>
              <RouterLink to="/">
                      <ButtonGroup variant={"link"}>
                    <MenuButton
                    as={Button}
                    colorScheme="White"
                    backgroundColor="transparent"
                    _hover={{color:"#fff700"}}
                    fontFamily={"'Handlee', cursive;"}
                    fontWeight="normal"
                    transition={"0.3s"}
                    fontSize={{base:24,xl:30}}
                    textShadow="-1px -1px 1px #fff, 1px 1px 1px #000"
                    >
                      Home
                    </MenuButton>
                      </ButtonGroup> 
                          </RouterLink> 
              </Menu>
              <Menu zIndex={999} >
                  <RouterLink to="/about">
                      <ButtonGroup variant={"link"}>
                      <MenuButton
                      as={Button}
                      colorScheme="White"
                      backgroundColor="transparent"
                      _hover={{color:"#fff700"}}
                      fontFamily={" 'Handlee', cursive;"}
                      fontWeight="normal"
                      transition={"0.3s"}
                    fontSize={{base:24,xl:30}}
                      textShadow="-1px -1px 1px #fff, 1px 1px 1px #000"
                      borderRadius={5}               
                      >
                          About us 
                      </MenuButton>
                      </ButtonGroup>
                      </RouterLink> 
              </Menu><Menu zIndex={999} >
                  <RouterLink to="/">
                      <ButtonGroup variant={"link"}>
                      <MenuButton
                      as={Button}
                      colorScheme="White"
                      backgroundColor="transparent"
                      _hover={{color:"#fff700"}}
                      fontFamily={" 'Handlee', cursive;"}
                      fontWeight="normal"
                      transition={"0.3s"}
                    fontSize={{base:24,xl:30}}
                      textShadow="-1px -1px 1px #fff, 1px 1px 1px #000"
                      borderRadius={5}
                      >
                          Menu 
                      </MenuButton>
                      </ButtonGroup>
                      </RouterLink> 
                      </Menu>
                      <Menu zIndex={999} >
                  <RouterLink to="/">
                      <ButtonGroup variant={"link"}>
                      <MenuButton
                      as={Button}
                      colorScheme="White"
                      backgroundColor="transparent"
                      _hover={{color:"#fff700"}}
                      fontFamily={" 'Handlee', cursive;"}
                      fontWeight="normal"
                      transition={"0.3s"}
                    fontSize={{base:24,xl:30}}
                      textShadow="-1px -1px 1px #fff, 1px 1px 1px #000"
                      borderRadius={5}
                      >
                          More Pages 
                      </MenuButton>
                      </ButtonGroup>
                      </RouterLink> 
                      </Menu>
              <Menu zIndex={999} >
                <RouterLink to="/contact">
                  <ButtonGroup variant={"link"}>
                    <MenuButton
                    as={Button}
                    colorScheme="White"
                    backgroundColor="transparent"
                    _hover={{color:"#fff700"}}
                    fontFamily={" 'Handlee', cursive;"}
                    fontWeight="normal"
                    transition={"0.3s"}
                    fontSize={{base:24,xl:30}}
                    textShadow="-1px -1px 1px #fff, 1px 1px 1px #000"
                    borderRadius={5}
                    >
                        Contact us 
                    </MenuButton>
                  </ButtonGroup>
                    </RouterLink> 
              </Menu>
              <Menu zIndex={999} >
                <RouterLink to="/">
                  <ButtonGroup variant={"link"}>
                    <MenuButton
                    as={Button}
                    colorScheme="White"
                    backgroundColor="transparent"
                    _hover={{color:"#fff700"}}
                    fontFamily={" 'Handlee', cursive;"}
                    fontWeight="normal"
                    transition={"0.3s"}
                    fontSize={{base:24,xl:30}}
                    textShadow="-1px -1px 1px #fff, 1px 1px 1px #000"
                    borderRadius={5}
                    >
                        Cart 
                    </MenuButton>
                  </ButtonGroup>
                    </RouterLink> 
              </Menu>
      </Stack>
      </HStack>
      </Container>
        <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        >
        <DrawerOverlay />
        <DrawerContent>
          <UpMenu />
        </DrawerContent>

    </Drawer>
    </Box>
    </div>
  )
}

export default MenuNavbar