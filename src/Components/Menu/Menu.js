import { Box, Center, HStack,Stack,VStack,Image, Text } from '@chakra-ui/react'

function Menu() {
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
    }]

    return (
    <Box>
        <Center>
        <Stack w="1200px" marginTop={50} direction={"row"}>
        {offersContent1.map(item => (
            <HStack spacing="-100">
                <Image src={item.firstImg} borderRadius="50%" w="200px" zIndex={2}
                />
                <Box backgroundColor="#461111" w="300px" h="200px"
                 backgroundImage="https://www.transparenttextures.com/patterns/gradient-squares.png">  
                <VStack marginTop={2}>
                    <Text fontSize={18} color={"white"}>{item.firstImgTitle}</Text>
                </VStack>
                <Text textAlign={"end"} fontSize="14px" color="white">preparationgTime : {item.cookingTime}</Text>
                <Text textAlign={"end"} fontSize="20px" color={"white"}>{item.firstImgPrice1}</Text>
                </Box>
            </HStack>
        ))}
        </Stack>
        </Center>
    </Box>
    )
}

export default Menu