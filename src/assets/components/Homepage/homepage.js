import React, {useRef, useState} from "react";
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
                <Link to="information" spy={true} smooth={true} offset={-80} duration={800} onSetActive={handleSetActive}>
                    Informatie
                </Link>
                <br/>
                <Link to="experiences" spy={true} smooth={true} offset={-80} duration={800} onSetActive={handleSetActive}>
                    Ervaringen
                </Link>
                <br/>
                <Link to="projects" spy={true} smooth={true} offset={-80} duration={800} onSetActive={handleSetActive}>
                    Projecten
                </Link>


                {/*<ul>*/}
                {/*    <li*/}
                {/*        className={active === "information" ? "active" : ""}*/}
                {/*//         onClick={() => handleMenuItemClick("information")}*/}
                {/*//     >*/}
                {/*        Informatie*/}
                {/*    </li>*/}
                {/*//     <li*/}
                {/*        className={active === "projects" ? "active" : ""}*/}
                {/*        onClick={() => handleMenuItemClick("projects")}*/}
                {/*    >*/}
                {/*        Projecten*/}
                {/*    </li>*/}
                {/*    <li*/}
                {/*        className={active === "experiences" ? "active" : ""}*/}
                {/*        onClick={() => handleMenuItemClick("experiences")}*/}
                {/*    >*/}
                {/*        Ervaring*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>

            <Element name="information" id="information">
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
