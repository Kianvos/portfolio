import React, {useRef, useState} from "react";
import Information from "./information/information";
import Projects from "./projects/projects";
import Experiences from "./experiences/experiences";

import {Element, Link} from "react-scroll";
import './style.css';
import Header from "../default/header";

const Homepage = ({isFullPageScrolled, isScrolled}) => {
    const ref = useRef(null);
    const [isExperience, setExperience] = useState(false);

    //TODO iets leuks mee doen.
    const handleSetActive = (to) => {
        if (to === "experiences" && isExperience === false) {
            const elements = document.getElementsByClassName("experience");
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add("experience-active");
            }
            setExperience(true);
        }
    };

    const sideBarClass = isFullPageScrolled ? "sidebar scrolled" : "sidebar";
    const upClass = isScrolled ? "up scrolled" : "up";

    return (
        <div>
            <Header isFullPageScrolled={isFullPageScrolled}/>
            <div ref={ref} id="top">
                <div className={sideBarClass}>
                    <ul>
                        <li>
                            <Link to="information" spy={true} smooth={true} offset={-80} duration={800}
                                  onSetActive={handleSetActive}>
                                Informatie
                            </Link>
                        </li>
                        <li>
                            <Link to="experiences" spy={true} smooth={true} offset={-80} duration={800}
                                  onSetActive={handleSetActive}>
                                Ervaringen
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" spy={true} smooth={true} offset={-80} duration={800}
                                  onSetActive={handleSetActive}>
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

                <div className={upClass}>
                    <Link to="information" smooth={true}>
                        Naar boven
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
