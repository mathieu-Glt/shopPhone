import React from 'react';
import './header.scss';
import Nav from '../Nav/index';


function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <Nav />
            </div>
        </header>
    )
}

export default Header;


