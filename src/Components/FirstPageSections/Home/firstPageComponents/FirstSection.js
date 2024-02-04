import {Stack, Image,Text, VStack, Container} from "@chakra-ui/react"
import ScrollAnimation from 'react-animate-on-scroll';
import FirstSectionboard from "./FirstSectionboard";

function FirstSection() {

    const restaurantDetails = [{
        img : "https://cdn-icons-png.flaticon.com/512/701/701965.png",
        headline : "Best Chefs.",
        details :`We have the best chefs in town that will
        astound your stomach with thier skills.`,
        animate : "animate__fadeInLeft"
    },{
        img : "https://user-images.githubusercontent.com/86873404/162664142-e7c9cb82-81e8-42be-9778-5457daeee2b2.png",
        headline : "Quality Food.",
        details :`The most thing we take care more than the customer , is the customer's food.`,
        animate : "animate__fadeInLeft"
    },{
         img : "https://user-images.githubusercontent.com/86873404/162952725-7c6294d8-d00e-4beb-a3ba-612983a1c6ba.png",
        headline : "Magnificent Service.",
        details :`Fast , Polite , and friendly service is all our job.`,
        animate : "animate__fadeInRight"
    },{
         img : "https://user-images.githubusercontent.com/86873404/162952445-d80bbf51-6a4f-4716-8e67-885fae2a6981.png",
        headline : "We hear you!",
        details :`We are trying our best to satisfy you by taking your opinions and use it in our Restaurant.`,
        animate : "animate__fadeInRight"
    },]

    return (
    <div>
        <Container maxW='container.xl' centerContent>
                <Stack
                spacing={10}
                direction={{base : "column", md : "row"}}>
                {restaurantDetails.map(item => (
                    <ScrollAnimation animateOnce={true} animateIn={item.animate}>
                    <Stack direction={{base : "column", md : "row"}}>
                        <VStack align={"center"} p={{base:"10px", lg:"30px"}}
                        _hover={{boxShadow : "#461111 0px 5px 15px;" , transition : "0.4s"}}>
                                <Image
                                alignSelf={"center"} boxSize={{base:"50px", lg:"70px"}} 
                                src={item.img}/>                               
                                <Text 
                                fontSize={["20","25","28","30"]}
                                fontWeight={"bold"}
                                fontFamily={"'Josefin Sans', sans-serif;"}>
                                    {item.headline}
                                </Text>
                                <Text
                                fontSize={[10,"14","16","18","20"]}
                                fontFamily= "'Fuzzy Bubbles', cursive"
                                lineHeight="23px"
                                >{item.details}
                                </Text>
                                </VStack>                                                                       
                            </Stack>                                                                     
                            </ScrollAnimation>
                ))}
                        </Stack>
                    </Container>
                    <FirstSectionboard />
        </div>
    )
}


export default FirstSection