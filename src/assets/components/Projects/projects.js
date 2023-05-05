import React from "react";
import {Element} from "react-scroll";
import Header from "../default/header";
import Ai from "./AI/ai";

import './projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    return (
        <div>
            <Header isFullPageScrolled={true}/>
            <Element name="projects" id="projects">
                <Ai/>
            </Element>
            <div className={"sections"} id='section3'>
                <h1>Er worden later meer projecten toegevoegd.</h1>
            </div>
        </div>
    );
};

export default Projects;
