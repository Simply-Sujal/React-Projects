import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Components/Navbar.css'
import Nike from './nike.png'
import Bag from './bag.png'
import Heart from './heart.png'

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <nav className="navbar">
                <h3 className="logo">Shopify <img src={Nike} alt="shoe" className='logo-2' /></h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}
                >
                    <Link to="/" className='Home'>
                        <li className='list-item'>New & Featured</li>
                    </Link>
                    <Link to="/" className='About'>
                        <li className='list-item'>Men</li>
                    </Link>
                    <Link to="/" className='Skills'>
                        <li className='list-item'>Women</li>
                    </Link>
                    <Link to="/" className='Contact'>
                        <li className='list-item'>Kids</li>
                    </Link>
                    <Link to="/" className='SignUp'>
                        <li className='list-item'>Sale</li>
                    </Link>
                </ul>
                <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>)}
                </button>

                <input type='text' placeholder='search' className='search-bar' />
                <img src={Heart} alt="" className='heart' />
                <img src={Bag} alt="" className='bag' />

            </nav >
        </>
    )
}

export default Navbar