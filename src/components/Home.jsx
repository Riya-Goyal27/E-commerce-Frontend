import React, { useEffect } from 'react'
import FirstComp from './FirstComp';
import FeaturedProducts from './FeaturedProducts';
import Features from './Features';
import Subscribe from './Subscribe';

const Home = () => {
  useEffect(() => {
    document.title="Home"
  }, [])

  return (
    <>
      <FirstComp />
      <FeaturedProducts />
      <Features />
      <Subscribe />
    </>
  )
}

export default Home
