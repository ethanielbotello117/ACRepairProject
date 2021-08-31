import { FaImages, FaPhone, FaInfoCircle } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'

const Home = () => {
    return (
        <div className="main">
            <div className="backdrop"></div>
            <div className="cards">
                <div className="img-container">
                    <h1 className="icon"><FaInfoCircle /></h1>
                </div>
                <h2 className="title">ABOUT</h2>
            </div>
            <div className="cards">
                <div className="img-container">
                    <h1 className="icon"><FaImages /></h1>
                </div>
                <h2 className="title">GALLERY</h2>
            </div>
            <div className="cards">
                <div className="img-container">
                    <h1 className="icon"><FaPhone /></h1>
                </div>
                <h2 className="title">CONTACT</h2>
            </div>
        </div>
    )
}

export default Home
