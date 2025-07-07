import React, { useState } from 'react'
import { useTheme } from '../../ThemeContext.jsx'
import './Navbar.scss'
import logo from '../../assets/logo.svg'
import { Toggle } from '../../Components/Toggle/Toggle.jsx'
import { Burger } from './Burger/Burger'
import { Link } from 'react-scroll';


export const Navbar = () => {

    const { isDarkMode } = useTheme();
    const [openMenu, setOpenMenu] = useState(false);


    return (
        <nav className={`${isDarkMode ? 'dark' : ''}`}>
            <div className="logo-holder">
                <img src={logo} alt="" />
            </div>
            <div className={`links-list ${openMenu ? 'open' : ''}`}>
                <ul className={`${openMenu ? 'open' : ''} ${isDarkMode ? 'dark' : ''}`}>
                    <li>
                        <Link to='hero' smooth={true} offset={-150} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} offset={-150} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='projects' smooth={true} offset={-60} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} offset={0} duration={500}>
                            Contacs
                        </Link>
                    </li>
                    <li><div className='toggle-holder'><Toggle /></div></li>
                </ul>
            </div>
            <Burger active={openMenu} setActive={setOpenMenu} />
        </nav>
    )
}
