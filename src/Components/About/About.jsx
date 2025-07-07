import React from 'react'
import './About.scss'
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import sass from '../../assets/sass.png';
import tailwind from '../../assets/tailwind.png';
import bootstrap from '../../assets/bootstrap.png';
import swiper from '../../assets/swiper.png';
import backgroundPatern from '../../assets/hero-decor.png';


const techStacks = [
  html,
  css,
  js,
  react,
  sass,
  tailwind,
  bootstrap,
  swiper
];

export const About = () => {
    return (
        <div className='about'>
            <img className='background-patern' src={backgroundPatern} alt="" />
            <div className="container">
                <p>Hi, I’m Getuar Osmani, a front-end developer passionate about web design and development. I specialize in creating responsive, user-friendly websites and always strive to improve my workflow by exploring new tools and technologies. I believe great websites are a blend of creativity and functionality, and I’m always looking for ways to solve problems and enhance user experiences. Below are some of the technologies I've masterd.</p>
                <div className="tech-stacks">
                    {techStacks.map((icon, index) => (
                        <img key={index} src={icon} className='tech-icons' alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}
