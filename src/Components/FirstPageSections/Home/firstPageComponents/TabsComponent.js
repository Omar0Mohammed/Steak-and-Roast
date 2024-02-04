import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Text, Stack, Button, Center, Container } from '@chakra-ui/react'
import ScrollAnimation from 'react-animate-on-scroll'

function TabsComponent() {
    const tabsImages = [
        {
        image : "https://cookingwithayeh.com/wp-content/uploads/2021/08/Italian-Pizza-500x500.jpg"
        },
    {
        image : "https://therecipecritic.com/wp-content/uploads/2018/07/grilled-flank-steak-5-500x500.jpg"
    },{
        image : "https://www.happyfoodstube.com/wp-content/uploads/2018/08/raspberry-oreo-no-bake-dessert-image-500x500.jpg"
    },
    {
        image : "https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1-500x500.jpg"
    }]
    
    const tabContent = [
        {
            Title : "Pizzas",
            Describtion1 : "Viva",
            Describtion2 : "La Pizza!",
            Img : "https://user-images.githubusercontent.com/86873404/167290380-87a01796-5f9d-4521-a438-bc22bd28ac91.png"
        },{
        Title : "Beef Steak",
        Describtion1 : "Steak",
        Describtion2 : "and Roast.",
        Img : "https://user-images.githubusercontent.com/86873404/146676280-cf14cab4-696f-400c-9dc2-19bfd32eb020.png"
    },{
        Title : "Dessert",
        Describtion1 : "Eat",
        Describtion2 : "more Cake!",
        Img : "https://user-images.githubusercontent.com/86873404/166086569-c7b9b319-6d7a-4b5c-90ff-c0fea89f064a.png"
    },{
        Title : "Chicken Tenders",
        Describtion1 : "Just",
        Describtion2 : "Wing",
        Describtion3 : "It.",
        Img : "https://user-images.githubusercontent.com/86873404/166086573-99d42c31-b6a3-4286-8dc1-aeebbb31a3d8.png"
    }]
    return (
        <div>   
        <Text
            textAlign={"center"}
            fontSize={[35,35,45,60,70]}
            fontFamily={"'Josefin Sans', sans-serif;"}
            marginTop={"80px"}
            >Our Services
        </Text>
               <Container centerContent maxW={"container.xl"}>     
                    <Tabs marginTop={{base:"30px",lg:"80px"}} colorScheme={"red"} >
                        <TabList justifyContent={"center"}>
                            {tabsImages.map(item => (
                            <Tab 
                                _selected={{bgGradient:"linear(150deg, #461111, #DE4700);",
                                borderRadius :"30% 70% 70% 30% / 30% 30% 70% 70%", transition : "0.8s",
                                boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"}}>
                                    <Image 
                                    draggable={false} w="120px" 
                                    border="1px solid #461111"
                                    borderRadius = "50%"
                                    boxDecorationBreak="none"
                                    src={item.image}/>   
                            </Tab>
                        ))}
                        </TabList>
            <TabPanels>
            {tabContent.map(item => (
                <TabPanel>
                    <Text
                    marginTop={"30px"}
                    fontSize={[25,30,40,45,50]}
                    textAlign={"center"}
                    fontFamily= "'Fuzzy Bubbles', cursive"
                    fontWeight={"bold"}>
                        {item.Title}
                    </Text>
                    <Center>    
                        <Stack direction={["column","column","row","row","row"]}
                        marginTop={"80px"} align="flex-start" spacing={{base:10,lg:40}}>
                            <div>
                                <ScrollAnimation animateOnce={true} 
                                duration={1.5} animateIn="animate__fadeInLeft">
                                    <Text
                                    fontWeight={"bold"}
                                    fontSize={[30,35,45,60,70]}
                                    fontFamily={"'Josefin Sans', sans-serif;"}
                                    >{item.Describtion1}
                                    </Text>
                                    <Text
                                    fontSize={[35,55,60,70,80]}
                                    fontFamily= "'Fuzzy Bubbles', cursive"
                                    color= "#fff700" textAlign={"center"}
                                    backgroundColor={"#461111"}
                                    w={["150px","200px","auto","auto","260px"]}
                                    backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png"
                                    borderRadius={"50%"}
                                    boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px;"}
                                    textShadow={"-0px 3px 0px #b2a98f,0px 14px 10px black,0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1);"}>
                                        {item.Describtion2}
                                    </Text> 
                                    <Text
                                        fontWeight={"bold"}
                                        fontSize={[35,35,45,60,70]}
                                        fontFamily={"'Josefin Sans', sans-serif;"}>
                                        {item.Describtion3}
                                    </Text>
                                </ScrollAnimation>      
                            </div>
                    <ScrollAnimation animateOnce={true} duration={1}
                    animateIn="animate__fadeInRight">
                        <Image draggable={false}
                        dropShadow={"12px 12px 25px rgba(0,0,0,0.5)"} w="800px"
                        src={item.Img}/>
                    </ScrollAnimation>
                    </Stack>
                    </Center>
                </TabPanel>
            ))}
            </TabPanels>
            </Tabs>
            <Center>
            <Button backgroundColor={"#461111"} fontFamily="'Boogaloo', cursive;" fontWeight="0" marginTop={"80px"} 
            backgroundImage="https://user-images.githubusercontent.com/86873404/155868078-c1778342-2ee5-4ac3-93a7-2d881f96f124.png"
            colorScheme={"red"} size={"lg"} p={[15,27,30,30,"35px"]} 
            fontSize={[12,14,16,18,23]} >Discover more!</Button>
            </Center>
            </Container>
        </div>
    )
}

export default TabsComponent
