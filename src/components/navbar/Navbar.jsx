import React from "react";
import './Navbar.css';
import BasicSwitches from "./ThemeSwitch";


function Navbar() {

    return (
        <div className="navbar">
            <nav>
                <h2 id="name">Theophilus Dapaah</h2>
                <div className="nav-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#experiences" className="nav-link">Experiences</a>
                    <a href="https://drive.google.com/file/d/1JWigTcIQww49m-cRKOyIBp91kBC_ooqM/view?usp=drive_link" className="nav-link" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                    <BasicSwitches />
                </div>
            </nav>
        </div>
    );
}
export default Navbar;