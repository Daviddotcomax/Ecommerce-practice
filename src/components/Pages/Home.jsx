import React from 'react'
import Hero from '../herosection/Hero'
import LatestCollections from '../latest_collections/LatestCollections'
import Bestseller from '../Bestseller/Bestseller'
import Newsletter from '../Newsletter/Newsletter'

const Home = () => {
  return (
      <div>
          <Hero />
          
      <LatestCollections />
      <Bestseller />
      <Newsletter />
    </div>
  )
}

export default Home