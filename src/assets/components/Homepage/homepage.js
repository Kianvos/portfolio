import React, {useRef} from "react";
import Information from "./information";
import Projects from "./projects";
import Experiences from "./experiences";

import {Element, Link} from "react-scroll";
import './style.css';

const Homepage = () => {
    const ref = useRef(null);

    //TODO iets leuks mee doen.
    const handleSetActive = (to) =>{
    };

    return (
        <div ref={ref} id="top">
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="information" spy={true} smooth={true} offset={-80} duration={800} onSetActive={handleSetActive}>
                            Informatie
                        </Link>
                    </li>
                    <li>
                        <Link to="experiences" spy={true} smooth={true} offset={-80} duration={800} onSetActive={handleSetActive}>
                            Ervaringen
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} smooth={true} offset={-80} duration={800} onSetActive={handleSetActive}>
                            Projecten
                        </Link>
                    </li>
                </ul>
            </div>

            <Element className="section" name="information" id="information">
                <Information/>
            </Element>
            <Element name="experiences" id="experiences">
                <Experiences/>
            </Element>
            <Element name="projects" id="projects">
                <Projects/>
            </Element>

            <div style={{position: "fixed", bottom: "20px", right: "20px", cursor: "pointer"}}>
                <Link to="information" smooth={true}>
                    Naar boven
                </Link>
            </div>
        </div>
    );
};

export default Homepage;
