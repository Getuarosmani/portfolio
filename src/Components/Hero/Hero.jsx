import React from 'react'
import './Hero.scss'
import me from '../../assets/hero.svg'
import decor from '../../assets/hero-decor.png'

export const Hero = () => {
    return (
        <div className='hero'>
            <img className='decor' src={decor} draggable="false" alt="" />
            <div className="container">
                <div className="hero-left">
                    <h1>Hi, i'm <br />Getuar Osmani</h1>
                    <p>Welcome to my corner of the web! I'm a junior frontend developer focused on building clean, responsive websites using HTML, CSS, and JavaScript. I enjoy turning ideas into interactive, user-friendly interfaces.</p>
                    <a href="https://github.com/Getuarosmani" target='_blank' rel="noopener noreferrer">
                        <button className='primary-btn'>View my Work</button>
                    </a>
                </div>
                <div className="hero-right">
                    <img src={me} alt="" />
                </div>
            </div>
        </div>
    )
}
