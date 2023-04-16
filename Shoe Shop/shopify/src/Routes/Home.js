import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import '../Components/Hero.css'
import Shoes from '../Components/Shoes'
import Highlights from '../Components/Highlights'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Shoes />
            <Highlights />
        </>
    )
}

export default Home
