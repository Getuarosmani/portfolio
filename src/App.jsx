import { useTheme } from "./ThemeContext";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Title } from "./Components/Title/Title";
import { About } from "./Components/About/About";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';


function App() {

    const { isDarkMode } = useTheme();

    return (
        <>
            <div className={`page ${isDarkMode ? 'dark' : ''}`}>
                <Navbar />
                <section id="hero">
                    <Hero />
                </section>
                <section id="about">
                    <Title title='About' />
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
            </div>
            <section id="contact">
                <Contact />
            </section>
                <Footer />
        </>

    )
}

export default App
