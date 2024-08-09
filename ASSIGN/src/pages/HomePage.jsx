import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import {Carousel } from '../components/Carousel'
import {slides} from '../components/data/CarouselData.json'
import Allproducts from '../components/Allproducts'
import CardCont from '../components/Cards/CardCont'
function HomePage() {
  return (
    <div>
    <ResponsiveAppBar/>
    <Carousel data={slides}/>
    <CardCont/>
    <Allproducts/>
    </div>
  )
}

export default HomePage