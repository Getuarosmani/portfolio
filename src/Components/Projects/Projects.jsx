import { useTheme } from '../../ThemeContext'
import './Projects.css'
import { Title } from '../Title/Title'
import { Card } from '../Card/Card'
import edusity from '../../assets/edusity.png'
import weather from '../../assets/weather.png'
import shop from '../../assets/shop.png'
import stopWatch from '../../assets/stop-watch.png'


const projects = [
    {
        id: 1,
        img: edusity,
        title: 'Collage website',
        text: 'A responsive college website built as a practice project to showcase frontend skills. Below are the tecnologies used for these project.',
        tech: ['HTML', 'CSS', 'JS', 'React', 'Swiper.Js'],
        code: 'https://github.com/Getuarosmani/collage-website',
        deployment: 'https://getuarosmani.github.io/collage-website/'
        
    },

    {
        id: 2,
        img: shop,
        title: 'Online Shop',
        text: 'A practice e-commerce project built with React and React Router, featuring dynamic routing, API integration, and basic state management. Focused on technical functionality over design.',
        tech: ['HTML', 'Sass', 'JS', 'React'],
        code: 'https://github.com/Getuarosmani/online-shop',
        deployment: 'https://getuarosmani.github.io/online-shop/'
    },

    {
        id: 3,
        img: weather,
        title: 'Weather App',
        text: 'A weather app built to sharpen my frontend skills and explore real-time API consumption — featuring hourly forecasts in a clean, responsive UI.',
        tech: ['HTML', 'Tailwind', 'JS', 'React'],
        code: 'https://github.com/Getuarosmani/weather-app',
        deployment: 'https://getuarosmani.github.io/weather-app/'
    },

    {
        id: 4,
        img: stopWatch,
        title: 'Stopwatch',
        text: 'A functional stopwatch built with React, featuring start, stop, and reset. Demonstrates state management, component logic, and interval handling with setInterval.',
        tech: ['HTML', 'CSS', 'JS', 'React', 'Swiper.Js'],
        code: 'https://github.com/Getuarosmani/stop-watch',
        deployment: 'https://getuarosmani.github.io/stop-watch/'
    }
]

export const Projects = () => {

    const { isDarkMode } = useTheme();

    return (
        <div className={`projects ${isDarkMode ? 'dark' : ''}`}>
            <div className="container">
                <Title title='Projects' />
                <div className="cards-holder">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            image={project.img}
                            title={project.title}
                            text={project.text}
                            tech={project.tech}
                            code={project.code}
                            deployment={project.deployment}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}
