import React from "react";
import '../index.css';
import MestoLogo from '../images/logo-white.svg';

function Header() {
    return(
        <header className="header">
            <img className="logo" alt="логотип Mesto" src={MestoLogo}/>
        </header>
    )
}

export default Header;
