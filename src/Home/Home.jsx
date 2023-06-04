import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import HeadLineCards from '../components/HeadLineCards'
import Food from '../components/Food'
import Catagoty from '../components/catagoty'


const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero  />
        <HeadLineCards />
        <Food />
        <Catagoty/>
    </div>
  )
}

export default Home