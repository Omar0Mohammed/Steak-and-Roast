import React, { useState } from 'react'
import { Box, Image, Stack, Text, VStack, HStack, Container } from '@chakra-ui/react'
import ScrollAnimation from 'react-animate-on-scroll';

function AboutUsGrid() {
  
  const [hoverStyle, setHoverStyle] = useState({transform:"translate(0%,0%)"})

    const aboutUsGrid = [{
        titleText : "ABOUT US",
        discreptionText : `
        Consistently, in excess of 11 million visitors visit Steak and Roast eateries around the globe. What’s more, they do as such in light of the fact that our eateries are known for serving astounding, incredible tasting, and reasonable food.
    Established in 1954, Steak and Roast is the second biggest fast-food burger chain on the planet. The first home of customary burgers, our promise to premium fixings, signature formulas, and family-accommodating feasting encounters is the thing that has characterized our image for in excess of 50 fruitful years.
      `,
        imgUrl : "https://user-images.githubusercontent.com/86873404/156304919-88bc7353-f292-4f04-80e8-a49f92d55115.jpg",
        gridDirection : "row"
      },{
        titleText : "More to Know!",
        discreptionText : `
        Consistently, in excess of 11 million visitors visit Steak and Roast eateries around the globe. What’s more, they do as such in light of the fact that our eateries are known for serving astounding, incredible tasting, and reasonable food.
    Established in 1954, Steak and Roast is the second biggest fast-food burger chain on the planet. The first home of customary burgers, our promise to premium fixings, signature formulas, and family-accommodating feasting encounters is the thing that has characterized our image for in excess of 50 fruitful years.
      `,
        imgUrl : "https://user-images.githubusercontent.com/86873404/156553320-490b4b9b-161a-49e6-8af1-e133cea4f386.jpg",
        gridDirection : "row-reverse"
      }]


  return (
    <div>  {/* The Text part of the grid */}

    <Container centerContent maxW={"container.xl"}>
      <Box onMouseEnter={e => {
          setHoverStyle({transform:"translate(-5%,5%)"})
        }}
        onMouseLeave={e => {
          setHoverStyle({transform:"translate(0%,0%)"})
        }} marginTop={"80px"}>
        {aboutUsGrid.map(item => (
          <Stack
          boxShadow={"rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;"}
          spacing={0}
          justifyContent={"space-around"}  
          direction={{base:"column",lg: item.gridDirection}} >
            <Box backgroundColor={"white"}
             backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png" >
              <VStack p={{base:"30px",lg:"80px"}}>
                <Text fontFamily={"'Bad Script', cursive;"} 
                fontSize={[14,17,17,20,"20px"]} color={"black"}>
                  Steak and Roast
                </Text>
                <HStack>
                  <Image w={[55,75,75,75,"90px"]} src="https://user-images.githubusercontent.com/86873404/155875540-30bae2de-610e-413a-8a24-62663f49c454.png" />
                <Text fontFamily={"'Josefin Sans', sans-serif;"}
                fontSize={[22,22,30,30,"35px"]} color={"black"} >{item.titleText}</Text>
              <Image w={[55,75,75,75,"90px"]} src="https://user-images.githubusercontent.com/86873404/155875526-a7f83a4e-b8c4-4b4c-aa0d-d411631a18da.png" />
                </HStack>
              <ScrollAnimation duration={1.5} animateIn="animate__fadeIn" animateOnce>
              <Text w={[250,400,400,400,"500px"]} h="auto" p={{base:"5px",sm:"20px"}}
              fontSize={[12,17,17,20,20]} fontFamily={"'Josefin Sans', sans-serif;"}>{item.discreptionText}</Text>
              </ScrollAnimation>
              </VStack>
          </Box>

        {/* The Image part of the grid */}

        <Box
        backgroundColor="#461111" p="30px"
        backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png">
        <Box backgroundColor="#050200" transform="translate(0%,5%)" 
        p="10px" boxShadow={"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"}
        backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png">
          <ScrollAnimation animateIn='animate__fadeInRight' duration={1} animateOnce>
          <Image boxSize={{base:350,md: 400,lg:450,xl:600}} transition="0.5s ease" 
            style={hoverStyle} maxW={"100%"}
          boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px;"}
          src={item.imgUrl} />
        </ScrollAnimation>
        </Box>
            </Box>
        </Stack>
        ))} 
    </Box>
    </Container></div>
  )
}

export default AboutUsGrid