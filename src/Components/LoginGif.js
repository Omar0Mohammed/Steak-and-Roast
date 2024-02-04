import { Center, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function LoginGif() {
  return (
    <div>
        <Center>
            <VStack pos="absolute" top="35vh">
                <Image w={{base:"100px",lg:"200px"}}
                src="https://user-images.githubusercontent.com/86873404/167884539-8c3677ce-a91a-4248-86ca-a99ea14b989b.gif"/>
                <Image w={{base:"100px",lg:"150px"}}
                src="https://user-images.githubusercontent.com/86873404/167886087-7e855ebf-9db2-4475-81af-9ba3f02e0bf1.gif"/>
            </VStack>
        </Center>
    </div>
  )
}

export default LoginGif