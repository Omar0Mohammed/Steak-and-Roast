import React from 'react'
import CarouselComponent from './firstPageComponents/Carousel'
import FirstSection from "./firstPageComponents/FirstSection"
import SecondSection from "./firstPageComponents/SecondSection"
import "../../styles/styles.scss"
import "../../styles/styles.css"
import TabsComponent from './firstPageComponents/TabsComponent'
import Testimonial from './firstPageComponents/Testimonial'
function Home() {
  return (
    <div>
    <CarouselComponent />
    <FirstSection />
    <TabsComponent />
    <SecondSection />
    <Testimonial />
    </div>
  )
}

export default Home