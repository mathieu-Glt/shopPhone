import React from 'react';
import './Logo.scss';
import logo from './logoPhone.jpeg';

function Logo() {
    return (
        <img src={ logo } className="App-logo" alt="logo" />
    )
}

export default Logo;