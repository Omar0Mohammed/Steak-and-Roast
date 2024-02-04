import { Box, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { SocialMediaLinks } from './SocialMediaLinks'


function Footer() {
    return (
        <Box
        backgroundColor="#461111" 
        backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png"
        marginTop={100}
        as="footer"
        role="contentinfo"
        mx="auto"
        maxW="9xl"
        py="12"
        px={{
          base: '4',
          md: '8',
        }}
      >
        <Stack>
          <Stack direction="row" spacing="4" align="center" justify="space-between">
            <Text
            color="white"
            fontSize={"xl"}
            fontFamily={"'Josefin Sans', sans-serif;"}
            >Steak and Roast</Text>
            <SocialMediaLinks />
          </Stack>
          <Copyright
            alignSelf={{
              base: 'center',
              sm: 'start',
            }}
          />
        </Stack>
      </Box>
    
    )
}

export default Footer
