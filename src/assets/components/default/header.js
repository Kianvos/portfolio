import React from 'react';
import {NavLink} from "react-router-dom";
import {FaHome, FaGithub, FaLinkedin} from "react-icons/fa";

import './default.css';

function Header({isFullPageScrolled}) {
    const navBarClass = isFullPageScrolled ? "navbar scrolled" : "navbar";
    return (
        <div className={navBarClass}>
            <nav>
                <ul>
                    <div className="left-container">
                        <li>
                            <NavLink to={"/"}>
                                <FaHome color={"white"} size={40}/>
                            </NavLink>
                        </li>
                    </div>
                    <div></div>
                    <div className="center-container">
                        <li className="center">
                            <h1>KIAN VOS</h1>
                        </li>
                    </div>
                    <div>

                    </div>
                    <div className="right-container">
                        <li className="right">
                            <NavLink className="right-li" to={"/CV#cv-home"}>CV</NavLink>
                        </li>
                        <li className="right">
                            <NavLink className="right-li contact" to={"/CV"}>Contact</NavLink>
                        </li>
                        <li className="right">
                            <a href="https://www.github.com/kianvos" target="_blank" rel="noreferrer">
                                <FaGithub color={"black"} size={26}/>
                            </a>
                        </li>
                        <li className="right">
                            <a href="https://www.linkedin.com/in/kian-vos/" target="_blank" rel="noreferrer">
                                <FaLinkedin color={"black"} size={26}/>
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Header;