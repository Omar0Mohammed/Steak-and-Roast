import React, { useState } from 'react'
import {Text, Image, Container, Center, HStack, VStack, Box, Stack} from "@chakra-ui/react"
import {GiReturnArrow} from "react-icons/gi"
import {BsLinkedin, BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"
import {Link} from "react-router-dom"

function Teams() { 
    

    let pizzaHolderShow = {transform:"translate(-27px , 34px)", opacity:1}
    let pizzaHolderHide = {transform:"translate(140px , -270px) rotate(90deg)", opacity:0}

    const [backIcon, setBackIcon] = useState("")
    let backIconShow = {transform:"translate(15px , 10px)"}
    let backIconHide = {transform:"translate(-30px , 25px) rotate(60deg)"}



    {//pizza slices in here 
    }

    const [pizzaHovered, setPizzaHovered] = useState("")
    let pizzaShow = {transform:"translate(60px , -115px) rotate(0deg) scale(1.2)", opacity:1}
    let pizzaHide = {transform:"translate(-200px , 250px) rotate(90deg)", opacity:0}

    const [pizzaHovered1, setPizzaHovered1] = useState("")
    let pizzaShow1 = {transform:"translate(10px , -75px) rotate(0deg) scale(1.2)", opacity:1}
    let pizzaHide1 = {transform:"translate(-200px , 250px) rotate(90deg)", opacity:0}

    const [pizzaHovered2, setPizzaHovered2] = useState("")
    let pizzaShow2 = {transform:"translate(40px , 10px) rotate(0deg) scale(1.2)", opacity:1}
    let pizzaHide2 = {transform:"translate(-200px , 250px) rotate(90deg)", opacity:0}

    const [pizzaHovered3, setPizzaHovered3] = useState("")
    let pizzaShow3 = {transform:"translate(110px , -75px) rotate(0deg) scale(1.2)", opacity:1}
    let pizzaHide3 = {transform:"translate(-200px , 250px) rotate(90deg)", opacity:0}


    {// pizza slices moving away
    }


    const [pizzaMove, setPizzaMove] = useState(false)
    function  pizzaMoveAway (){
        setPizzaMove(true)
    }
    let pizzaTransform  = {transform:"translate(60px , -200px)", opacity:0}

    
    const [pizzaMove1, setPizzaMove1] = useState(false)
    function  pizzaMoveAway1 (){
        setPizzaMove1(true)
    }
    let pizzaTransform1  = {transform:"translate(-100px , -80px)", opacity:0}


    const [pizzaMove2, setPizzaMove2] = useState(false)
    function  pizzaMoveAway2 (){
        setPizzaMove2(true)
    }
    let pizzaTransform2  = {transform:"translate(30px , 150px)", opacity:0}

    
    const [pizzaMove3, setPizzaMove3] = useState(false)
    function  pizzaMoveAway3 (){
        setPizzaMove3(true)
    }
    let pizzaTransform3  = {transform:"translate(250px , -80px)", opacity:0}

    
    const [sliceHover , setSliceHover] = useState("")
    const [sliceHover1 , setSliceHover1] = useState("")
    const [sliceHover2 , setSliceHover2] = useState("")
    const [sliceHover3 , setSliceHover3] = useState("")


    {// Icons appearing
    }
    
    let IconShow = {transform : "translate(120px,-10px)" , visibility:"visible"}
    let iconHide = {transform:"translate(130px,-150px)", visibility:"hidden"}

    let IconShow1 = {transform : "translate(50px,20px)" , visibility:"visible"}
    let iconHide1 = {transform:"translate(130px,-200px)", visibility:"hidden"}


    let IconShow2 = {transform : "translate(120px,55px)" , visibility:"visible"}
    let iconHide2 = {transform:"translate(130px,-250px)", visibility:"hidden"}


    let IconShow3 = {transform : "translate(195px,-60px)" , visibility:"visible"}
    let iconHide3 = {transform:"translate(130px,-250px)", visibility:"hidden"}


const teamSliderContent = [
    {
        sliceUp : "https://user-images.githubusercontent.com/86873404/169595266-b0085f5c-cdd9-4f96-93b0-49edcc08fa72.png",
        sliceLeft : "https://user-images.githubusercontent.com/86873404/169595240-fe7f4c80-c8c3-44f6-9cc8-4fec55587f87.png",
        sliceDown : "https://user-images.githubusercontent.com/86873404/169595250-a5692462-8aec-43f8-91a8-a042d9dd35db.png",
        sliceRight : "https://user-images.githubusercontent.com/86873404/169595259-e8cc76a8-437c-4260-9d53-aaefd606173b.png",
        Describtion1 : "Chef. Mordy Wenk",
         Title : "Head of the Chief staff.",
        Img : "https://user-images.githubusercontent.com/86873404/167750109-5c3dec09-3631-47ae-8823-9625ba9e904f.jpg",
        id : 1
    },{
        sliceUp : "https://user-images.githubusercontent.com/86873404/169595266-b0085f5c-cdd9-4f96-93b0-49edcc08fa72.png",
        sliceLeft : "https://user-images.githubusercontent.com/86873404/169595240-fe7f4c80-c8c3-44f6-9cc8-4fec55587f87.png",
        sliceDown : "https://user-images.githubusercontent.com/86873404/169595250-a5692462-8aec-43f8-91a8-a042d9dd35db.png",
        sliceRight : "https://user-images.githubusercontent.com/86873404/169595259-e8cc76a8-437c-4260-9d53-aaefd606173b.png",
        Describtion1 : "Chef. Mark Brunnett",
         Title : "Junior chef.",
         Img : "https://user-images.githubusercontent.com/86873404/167750117-aa571b55-6e9e-4850-933d-ad357be73176.jpg",
       
        id: 2
    },{
        sliceUp : "https://user-images.githubusercontent.com/86873404/169595266-b0085f5c-cdd9-4f96-93b0-49edcc08fa72.png",
        sliceLeft : "https://user-images.githubusercontent.com/86873404/169595240-fe7f4c80-c8c3-44f6-9cc8-4fec55587f87.png",
        sliceDown : "https://user-images.githubusercontent.com/86873404/169595250-a5692462-8aec-43f8-91a8-a042d9dd35db.png",
        sliceRight : "https://user-images.githubusercontent.com/86873404/169595259-e8cc76a8-437c-4260-9d53-aaefd606173b.png",
        Describtion1 : "Chef. Griffin Zach",
         Title : "a Talented Chef.",
         Img : "https://user-images.githubusercontent.com/86873404/167750122-a0b744eb-c641-4c22-9ce5-4af27e0eb9f6.jpg",
        id: 3
    },{
        sliceUp : "https://user-images.githubusercontent.com/86873404/169595266-b0085f5c-cdd9-4f96-93b0-49edcc08fa72.png",
        sliceLeft : "https://user-images.githubusercontent.com/86873404/169595240-fe7f4c80-c8c3-44f6-9cc8-4fec55587f87.png",
        sliceDown : "https://user-images.githubusercontent.com/86873404/169595250-a5692462-8aec-43f8-91a8-a042d9dd35db.png",
        sliceRight : "https://user-images.githubusercontent.com/86873404/169595259-e8cc76a8-437c-4260-9d53-aaefd606173b.png",
        Describtion1 : "Chef. Will Smith",
         Title : "a Talented Chef.",
         Img : "https://user-images.githubusercontent.com/86873404/167750203-c0ea9b7c-82b3-4dd0-bc2c-8ce9855db40b.jpg",
         id: 4
        }]

    
return (
    <div>
        <Center>
            <Image
            transition={"0.4s"}
            _hover={{filter:"drop-shadow(4px 4px 4px #707070);"}}
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
            >Our Chef Staff</Text>
        </Center>
        <Container maxW="container.xl">
            <Center>
            <Stack direction={["column","column","column","column","row"]} marginTop={"30px"}>
            {teamSliderContent.map(item => (
                <VStack>
                    <Box
                     overflow={"hidden"}
                     > 
                     {// This is the return icon of the pizza , click it to retun to chef's picture
                     }
                     <Box 
                     zIndex="100" position={"relative"}
                     transition="0.4s"
                     style={backIcon === item.id ? backIconShow : backIconHide}
                     onClick={e => {
                        setPizzaHovered("")
                        setPizzaHovered1("")
                        setPizzaHovered2("")
                        setPizzaHovered3("")
                        setSliceHover("")
                        setSliceHover1("")
                        setSliceHover2("")
                        setSliceHover3("")
                        setBackIcon("")
                    }}>
                     <GiReturnArrow 
                    color="#46111D" fontSize={30} 
                    />
                    </Box> 
                    <HStack w="290px">
                        {// these are the pizza slices that pop up when you hover on an Icon
                        }
                        <Box zIndex={99}
                        position="absolute">
                            <Box 
                            color="#461111" borderRadius={"50%"}
                            _hover={{filter :"brightness(90%)", backgroundColor:"white"
                            ,boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px;"
                        }}  
                            style={sliceHover == item.id ? IconShow : iconHide}>
                            <BsFacebook 
                            fontSize={40} 
                            />
                            </Box>
                            <Box 
                            color="#461111" borderRadius={"50%"}
                            _hover={{filter :"brightness(90%)", backgroundColor:"white"
                        , boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px;"
                        }}  
                            style={sliceHover1 == item.id ? IconShow1: iconHide1}>
                            <BsInstagram position="absolute"  
                            fontSize={40} color="#461111" />
                            </Box>
                            <Box 
                            color="#461111" borderRadius={"10px"}
                            _hover={{filter :"brightness(90%)", backgroundColor:"white"
                        , boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px;"
                        }}  
                            style={sliceHover2 == item.id ? IconShow2: iconHide2}>
                            <BsTwitter position="absolute"  
                            fontSize={40} color="#461111" />
                            </Box>
                            <Box 
                            color="#461111" borderRadius={"50%"}
                            _hover={{filter :"brightness(90%)", backgroundColor:"white"
                        , boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px;"
                        }}  
                            style={sliceHover3 == item.id ? IconShow3: iconHide3}>
                            <BsLinkedin position="absolute"  
                            fontSize={40} color="#461111" />
                            </Box>
                        </Box>
                        <Box 
                        onClick={e => 
                        setSliceHover(item.id)}>
                     <Image 
                      onClick={pizzaMoveAway}
                     w="150px" zIndex={120} pos="absolute" transition={"0.4s"}
                     style={{...pizzaHovered === item.id ? pizzaShow : pizzaHide,
                        ...sliceHover == item.id & pizzaMove ?  pizzaTransform : null}}  
                     _hover={{filter :"brightness(90%)", p:"3px"}} borderRadius="50%"
                    src={item.sliceUp}/>
                        </Box>
                        <Box
                        onClick={e => 
                            setSliceHover1(item.id)}
                        >
                    <Image 
                    onClick={pizzaMoveAway1}
                    w="110px" zIndex={120} pos="absolute" transition={"0.4s"}
                     style={{...pizzaHovered1 === item.id ? pizzaShow1 : pizzaHide1
                        ,...sliceHover1 === item.id & pizzaMove1 ?  pizzaTransform1 : null}}
                    _hover={{filter :"brightness(90%)", p:"3px"}}  borderRadius="50%"
                    src={item.sliceLeft}/>
                        </Box>
                        <Box
                        onClick={e => 
                            setSliceHover2(item.id)}
                        >
                    <Image
                    onClick={pizzaMoveAway2}
                    w="150px" zIndex={120} pos="absolute" transition={"0.4s"}
                     style={{...pizzaHovered2 === item.id ? pizzaShow2 : pizzaHide2,
                        ...sliceHover2 === item.id & pizzaMove2 ?  pizzaTransform2 : null}} 
                    _hover={{filter :"brightness(90%)", p:"3px"}} borderRadius="50%"
                    src={item.sliceDown}/>
                        </Box>
                        <Box
                        onClick={e => 
                            setSliceHover3(item.id)}
                        >
                    <Image 
                    onClick={pizzaMoveAway3}
                    w="110px" zIndex={120} pos="absolute" transition={"0.4s"}
                     style={{...pizzaHovered3 === item.id ? pizzaShow3 : pizzaHide3,
                        ...sliceHover3 === item.id & pizzaMove3 ?  pizzaTransform3 : null}} 
                    _hover={{filter :"brightness(90%)", p:"3px"}} borderRadius="50%"
                    src={item.sliceRight}/>
                        </Box>
                        <Image 
                        pos={"absolute"} w="310px"
                        style={pizzaHovered === item.id ? pizzaHolderShow : pizzaHolderHide} 
                        zIndex="98" transition="0.5s ease-out" draggable="false"
                        src="https://user-images.githubusercontent.com/86873404/169408067-883e1a9f-fc93-4197-8391-a835b223d669.png"/>
                        <Image
                        onClick={e => {
                            setPizzaHovered(item.id)
                            setPizzaHovered1(item.id)
                            setPizzaHovered2(item.id)
                            setPizzaHovered3(item.id)
                            setSliceHover("")
                            setSliceHover1("")
                            setSliceHover2("")
                            setSliceHover3("")
                            setBackIcon(item.id)
                        }} transition={"0.4s"}
                        _hover={{opacity : 0.9, filter :"brightness(80%)"}}
                        boxSize={"250px"} borderRadius={"50%"} src={item.Img} />
                        </HStack>
                    </Box>
                </VStack>
            ))}
            </Stack>
            </Center>
         </Container>

    </div>
)
}

export default Teams