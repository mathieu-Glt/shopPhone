import React from 'react';
import './nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Logo from '../Logo/Logo';


import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Redirect,
    Link,
} from "react-router-dom"
import Home from '../Home';
import Accessoire from '../Accessoire';
import Openbox from '../Openbox';
import Contact from '../Contact';




function Nav() {


    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLink, setToggleLink] = useState(false);


    const transitionNav = () => {
        window.scrollY > 10 ? setNavBlack(true) : setNavBlack(false)
    };


    useState(() => {
        document.addEventListener("scroll", transitionNav);
    });


    const displayLinks = () => {
        window.scrollY > 10 ? setToggleLink(true) : setToggleLink(false);
    }

    useState(() => {
        document.addEventListener("scroll", displayLinks);
    })


    const handleClick = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    const navResponse = () => {
        window.scrollY > 10 ? setToggleMenu(false) : setToggleMenu(true);
    }


    return (
        <div
            className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"
                } ${toggleMenu && "show"}`}>
            <button className="nav__burger" onClick={handleClick}>
                <MenuIcon />
            </button>

            <nav className="nav__links">
                <div className='nav__linka' 
                >
                    <Link to="/home">HOME</Link>
                    <Link to="/openbox">OPENBOX</Link>
                    <Link to="/accessoire">ACCESSORIOS</Link>
                    <Link to="/contact">CONTACTO</Link>
                </div>


            </nav>
        </div>
    );

}

export default Nav;
