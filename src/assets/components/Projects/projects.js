import React from "react";
import {Element} from "react-scroll";
import Header from "../default/header";
import Ai from "./AI/ai";

import './projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HouseAustria from "./HouseAustria/houseAustria";
import Vitality from "./Vitality/vitality";

const Projects = () => {
    return (
        <div>
            <Header isFullPageScrolled={true}/>
            <Element name="projects" id='section1'>
                <Ai/>
            </Element>
            <Element name="projects" id='section2'>
                <Vitality/>
            </Element>
            <Element name="projects" id='section3'>
                <HouseAustria/>
            </Element>
            <div className={"sections"} id='section4'>
                <h1>Er worden later meer projecten toegevoegd.</h1>
            </div>
        </div>
    );
};

export default Projects;
