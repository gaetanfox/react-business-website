import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjOne } from './Data'

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  )
}

export default Services
