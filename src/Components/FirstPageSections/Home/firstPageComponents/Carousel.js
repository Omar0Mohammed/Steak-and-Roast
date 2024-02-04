import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Box, Button, Center, HStack, Image,Stack,Text, VStack} from "@chakra-ui/react"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

function CarouselComponent() {
  const carouselContent = [{
    Title : "DRINK . EAT . LOVE .",
    Button1 : "Learn More",
    Button2 : "Our Services",
    img : "https://user-images.githubusercontent.com/86873404/147130565-1e9957d7-2fa7-4ccd-b8e4-0a708557a1e7.png"
  },
  {
    Title : "We’re always in the mood for food.",
    Button1 : "Start now",
    Button2 : "Our Services",
    img : "https://user-images.githubusercontent.com/86873404/147141536-62bcebdf-fbf2-46eb-bd74-b18384199de6.png"
  },
  {
    Title : "We saved you a seat!",
    Button1 : "Join us",
    Button2 : "See more",
    img : "https://user-images.githubusercontent.com/86873404/147226899-709fbffa-3030-488d-8823-8cfdf35d9346.jpg"
  }]
    return(
      <div>
        <Carousel
        autoFocus={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        swipeable={false}
        >
          {carouselContent.map(item => (
            <Stack 
            marginBottom={{base:-40,md:0}}
            h="800px"
            justifyContent={"space-around"}
            direction={["column-reverse","column-reverse","column-reverse","row","row"]}>
              <Box >
              <Stack 
              direction={"column"} position={"relative"} 
              marginTop={[-200,-300,0,"20%","25%"]} 
              >
                <Center>
            <VStack w={["550px","550px","400px","400px","550px"]}
            spacing={55} top={[-20,20,0,0,0]} 
            position={"relative"}>
              <Text
              fontFamily={"'Bad Script', cursive;"}
              fontSize={[35,40,45,55,70]} 
              backgroundColor="#461111" color= "white"
              boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px;"}
              border={"3px solid black"} fontWeight={"bold"}
              textShadow={"rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, black 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;"}
              backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png"
              p="10px" borderRadius={"50%"}
                >{item.Title}</Text>
              <HStack spacing={25}>
              <Button className="col-md-3 col-sm-3 col-xs-6" border={"#461111 solid 2px"}
              fontSize={[14,14,20,20,22]}
              fontFamily="'Boogaloo', cursive;"
              fontWeight="0"
              p={[5,5,7,25,30]} colorScheme={"yellow"}
              backgroundColor={"#fff700"}>{item.Button1}</Button> 
  
              <Button border={"#461111 solid 2px"}
              fontSize={[14,14,20,20,22]}
              fontFamily="'Boogaloo', cursive;"
              fontWeight="0"
              color="white"
              colorScheme="red"
              backgroundColor="#461111" 
              backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png"
              p={[5,5,7,25,30]}>{item.Button2}</Button>
              </HStack>
              </VStack>
              </Center>
            </Stack>
              </Box>
              <Center>
              <Box
              w={["300px","auto","400px","auto","auto"]}
              position={"relative"}
              top={[-20,-20,0,-40,-20]}
              >
              <ScrollAnimation animateOnce={true} duration={1.5} animateIn="animate__rotateIn">
              <Image 
              boxSize={["300px","400px","400px","400px","550px"]}
              borderRadius={"50%"}
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;;"}
              src={item.img} />
              </ScrollAnimation>
              </Box>
              </Center>
              <Box
              transform={["translate(0,-250px)","translate(0,-200px)","translate(0,-150px)","scale(1)","scale(1)"]}
              position={"absolute"}
              right="0"
              zIndex={-99}
              borderRadius={
                "32% 0% 0% 100% / 0% 0% 26% 100%"}
                boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px;"}
              backgroundColor="#461111" 
              backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png"
              boxSize={[300,400,500,600,"750px"]}
              >
            </Box>
            </Stack>
                ))}
       </Carousel>
       </div>
    )
}

export default CarouselComponent