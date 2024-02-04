import React from 'react'
import {Stack, Button, ButtonGroup} from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import "../styles/styles.css"
import {
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'


function UpMenu() {
  return (
    <Stack 
    p="30px"
    align={"center"}
    display={{base:"flex",lg:"none"}}
    direction={"column"}
    color={"#744a50"}
    spacing={10}
>
  <Menu zIndex={999}>
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
      <RouterLink to="/Menu">
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
  </Menu><Menu zIndex={999} >
      <RouterLink to="/Pages">
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
  )
}

export default UpMenu