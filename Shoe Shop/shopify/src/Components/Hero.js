import React from 'react'
import { Link } from 'react-router-dom'
import NikeShoe from '../Images/Shoe1.png'
function Hero() {
    return (
        <>
            <div className='hero-section'>
                <div className='hero-info'>
                    <h2 className='title-shoe'>Do Drift With Your Desired
                        <span className='nike-title'> Nike Dunk</span> 2.O
                    </h2>
                    <Link to='/'><button className='explore-btn' type='submit'>Explore More</button></Link>
                    <div>
                        <Link to="/" className="f f-fcebook"></Link>
                        <Link to="/" className="f f-twitter"></Link>
                        <Link to="/" className="f f-google"></Link>
                        <Link to="/" className="f f-instgrm"></Link>
                    </div>
                </div>
                <img src={NikeShoe} alt="Images" className='hero-img' />
            </div>
        </>
    )
}

export default Hero
