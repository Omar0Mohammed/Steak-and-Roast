import { Box, Center, HStack,Stack,VStack,Image,Button, Text, UnorderedList, ListItem, Container, SimpleGrid } from '@chakra-ui/react'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactStars from 'react-stars';


function SecondSection() {
    const offersContent1 = [{
        firstImg : "https://user-images.githubusercontent.com/86873404/147130565-1e9957d7-2fa7-4ccd-b8e4-0a708557a1e7.png",
        firstImgTitle : "Steak and Rice",
        firstImgPrice1 : "15$",
        preparationgTime : " 30 mins",
        cookingTime : " 10 to 30 mins",
        serves : " 4 persons"

    }, {
        firstImg : "https://user-images.githubusercontent.com/86873404/147141536-62bcebdf-fbf2-46eb-bd74-b18384199de6.png",
        firstImgTitle : "Chicken Salad",
        firstImgPrice1 : "15$",
        preparationgTime : " 30 mins",
        cookingTime : " 10 to 30 mins",
        serves : " 4 persons"
    }, {
        firstImg : "https://user-images.githubusercontent.com/86873404/147226899-709fbffa-3030-488d-8823-8cfdf35d9346.jpg",
        firstImgTitle : "Fruit Salad",
        firstImgPrice1 : "15$",
        preparationgTime : " 30 mins",
        cookingTime : " 10 to 30 mins",
        serves : " 4 persons"
    },{
        firstImg : "https://user-images.githubusercontent.com/86873404/147130565-1e9957d7-2fa7-4ccd-b8e4-0a708557a1e7.png",
        firstImgTitle : "Steak and Rice",
        firstImgPrice1 : "15$",
        preparationgTime : " 30 mins",
        cookingTime : " 10 to 30 mins",
        serves : " 4 persons"

    }, {
        firstImg : "https://user-images.githubusercontent.com/86873404/147141536-62bcebdf-fbf2-46eb-bd74-b18384199de6.png",
        firstImgTitle : "Chicken Salad",
        firstImgPrice1 : "15$",
        preparationgTime : " 30 mins",
        cookingTime : " 10 to 30 mins",
        serves : " 4 persons"
    }, {
        firstImg : "https://user-images.githubusercontent.com/86873404/147226899-709fbffa-3030-488d-8823-8cfdf35d9346.jpg",
        firstImgTitle : "Fruit Salad",
        firstImgPrice1 : "15$",
        preparationgTime : " 30 mins",
        cookingTime : " 10 to 30 mins",
        serves : " 4 persons"
    }]

    return (
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
            >Our Offers</Text>
        </Center>
        <Container maxW={"container.xl"} centerContent>
      <Stack direction={["column","column","column","row","row"]} marginTop={"80px"}>
          <SimpleGrid spacing={10} columns={{base:1,lg:2}} direction={"column"}>
         {offersContent1.map(item => (
              <ScrollAnimation animateOnce={true} animateIn='animate__fadeInLeft'>
             <Stack 
             spacing={{base:6,lg:-130}}
              direction={["column","column","column","row","row"]}>
                  <Center>
                 <Image  
                 boxShadow= "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;"
                 borderRadius={"50%"} src={item.firstImg} 
                 boxSize={[200,210,210,210,"250px"]}
                 zIndex={99}
                 />
                 </Center>
                 <Box 
                 border={"3px solid black"}
                 position={"relative"}
                 w={[250,300,350,450,"450px"]}
                 height={[200,210,210,210,"240px"]}
                 boxShadow={"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"}
                 backgroundColor="#461111" 
                 backgroundImage="https://www.transparenttextures.com/patterns/gradient-squares.png"
                 >
                <VStack align={"flex-end"}>
                    <HStack
                    spacing={3}
                    >
                    <Text
                    fontFamily={"'Josefin Sans', sans-serif;"}
                    color="white"
                    fontSize={[20,25,25,22,30]}
                    >{item.firstImgTitle}</Text>
                    <Box backgroundColor={"black"}
                    boxShadow= "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"
                    p={["15px 10px","15px 10px","15px 10px","10px 7px","15px 10px"]}>
                    <ReactStars
                    count={5}
                    onChange={false}
                    size={14}
                    value={4.5}
                    color={"#FFD700"}
                     />
                     </Box>
                     </HStack>
                    <UnorderedList >
                        <ListItem 
                        color={"white"}
                        fontSize={[14,18,18,14,18]}
                        fontFamily={"'Josefin Sans', sans-serif;"}
                        fontWeight={"600"}
                        >
                        Preparation Time :
                         <span style={{color : "yellow"}}>
                            {item.preparationgTime}</span></ListItem>
                        <ListItem
                        color={"white"}
                        fontSize={[14,18,18,14,18]}
                        fontFamily={"'Josefin Sans', sans-serif;"}
                        fontWeight={"bold"}
                        >Cooking Time : 
                        <span style={{color : "yellow"}}>
                        {item.cookingTime}
                        </span></ListItem>
                        <ListItem
                        color={"white"}
                        fontSize={[14,18,18,14,18]}
                        fontFamily={"'Josefin Sans', sans-serif;"}
                        fontWeight={"bold"}
                        >
                        Serves : 
                        <span style={{color : "yellow"}}>
                        {item.serves}</span></ListItem>
                    </UnorderedList>
                    <Button 
                    borderRadius={"65% 79% 69% 47% / 54% 14% 53% 0% "}
                    fontSize={[10,15,15,15,18]}
                    p={["2","auto","auto","auto","5"]}
                    colorScheme={"yellow"}
                    backgroundColor={"#fff700"}
                    color="black"
                    fontFamily={"'Josefin Sans', sans-serif;"}
                    border={"2px solid black"}
                    >
                     Purchase.
                    </Button>
                </VStack>
                 </Box>
             </Stack>
              </ScrollAnimation>
         ))} 
         </SimpleGrid>    
        </Stack>
        </Container>
        <Center>
        <Button backgroundColor={"#461111"} fontFamily="'Boogaloo', cursive;" fontWeight="0"
        marginTop={"80px"} 
        backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png"
         colorScheme={"red"} size={"lg"} p={[15,27,30,30,"35px"]}
         fontSize={[12,14,16,18,23]}>See all</Button>
         </Center>
    </div>
    )
}

export default SecondSection