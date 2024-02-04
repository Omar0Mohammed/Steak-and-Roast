import { Box, Center, Image, Text, HStack, VStack, Container } from '@chakra-ui/react';
import React from 'react'

function Testimonial() {
    
    const testimonialContent = [{
        clientCity : "Canada",
        opinion : `"This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again."`,
        clientName : "-John Doe",
        pos : "-200px",
        pos2 : "-100px",
        pos3 : "-50px",
        pos4 : "-25px",
        rotate : "rotate(0)"
    },{
        clientCity : "Egypt",
        opinion : `"This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it."`,
        clientName : "-Mark Aether",
        pos : "200px",
        pos2 : "100px",
        pos3 : "50px",
        pos4 : "0px",
        rotate : "rotate(5deg)"
    },{
        clientCity : "Japan",
        opinion : `"We are so fortunate to have this place just a few minutes drive away from home. Food is stunning, both the tapas and downstairs restaurant. Cocktails wow, wine great and lovely selection of beers. Love this place and will continue to visit."`,
        clientName : "-Peter May",
        pos : "-100px",
        pos2 : "-50px",
        pos3 : "-25px",
        pos4 : "-5px",
        rotate : "rotate(-3deg)"
    }]

    return(
        <div>
          <Center>
            <Image
            w="650px"
            marginTop={"30px"}
            padding={["10px","10px","30px","30px","30px"]}
            src="https://user-images.githubusercontent.com/86873404/167551283-c66139e2-311f-45af-b9d3-181510455916.png" />
            <Text
            transform={"translate(0%,25%)"}
            position={"absolute"}
            color={"black"}
            fontSize={["2em","3em","4em","4em","4em"]}
            fontFamily={"'Handlee', cursive;"}
            >Testimonials</Text>
        </Center>
            <Container maxW={"container.xl"}>
            <VStack
            borderRadius={"5% 20% 5% 20%"}
            boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px;"}
            backgroundColor="#461111" 
            backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png"
            marginTop={50}
            spacing={[0,0,0,-150]}
            >
            {testimonialContent.map(item => (
            <HStack
            position={"relative"} left={[item.pos4,item.pos3,item.pos2,item.pos]}
            justifyContent={"flex-start"}
            >
            <Box
            _hover={{transform:"scale(1.1)", zIndex : "99"}}
            transition="0.3s" transform={item.rotate}
            height={["251px","352px","402px","502px"]} w={["250px","350px","400px","500px"]} 
            backgroundImage={[
               "https://user-images.githubusercontent.com/86873404/154897791-ffaf1c68-3d2e-48c9-a4e2-dd7e81429685.png","https://user-images.githubusercontent.com/86873404/154897574-5e2170bb-be97-4dd2-9efd-d222e82ebc04.png","https://user-images.githubusercontent.com/86873404/154897167-a5b2e9cc-72c6-4f3f-9b11-3c0c78a98628.png","https://user-images.githubusercontent.com/86873404/154889409-0891d5f2-83c1-45d5-ad28-37a3a4fda714.png"]}
            >
                <Text
                fontWeight={"bold"}
                w={[150,200,250,350]}
                h={[150,180,220,270]}
                marginTop={[30,39,50,"60px"]}
                fontSize={[9,13,15,20]}
                color={"#461111"}
                marginLeft={{base: 50 , sm : "90px"}}
                transform={"rotate(-2deg)"}
                fontFamily={"'Handlee', cursive;"}
                >{item.opinion}</Text>
                <Text
                marginBottom="40px"
                marginTop={15}
                color={"#e6e6e6"}
                fontWeight={"bold"}
                textAlign="right"
                transform={"rotate(-2deg)"}
                fontSize={[11,13,15,20]}
                marginRight="50px"
                fontFamily={"'Bad Script', cursive;"}
                >
                    {item.clientName}
                </Text>
                <Text
                fontFamily={"'Bad Script', cursive;"}
                transform={"rotate(-2deg)"}
                marginBottom="40px"
                marginTop={[-10,-5,-10,0]}
                fontWeight={"bold"}
                color={"#e6e6e6"}
                textAlign="right"
                fontSize={[11,13,15,20]}
                marginRight="50px"
                >
                    {item.clientCity}
                </Text>
            </Box>
            </HStack>
             ))}
            </VStack>
            </Container>
        </div>
    )
}

export default Testimonial
