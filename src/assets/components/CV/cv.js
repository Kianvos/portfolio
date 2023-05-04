import React, {useEffect, useRef, useState} from 'react';
import {Link, Element} from "react-scroll";
import Header from "../default/header";

import './cv.css';
import CvTop from "./cv-home/cv-top";
import CvInformation from "./cv-information/cv-information";
import CvSkills from "./cv-skills/cv-skills";
import CvEducation from "./cv-education/cv-education";
import CvWorkExperience from "./cv-work-experience/cv-work-experience";

const CV = () => {
    const ref = useRef(null);
    const [isFullPageScroll, setFullPageScroll] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        if (window.innerWidth > 600){
            // disable scrolling
            document.body.style.overflow = 'hidden';
        }

        // re-enable scrolling when other component
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);

    const handleSetActive = (to) => {
        if (to === "cv-information" && isFullPageScroll === false) {
            const sidebar = document.getElementById("sidebar-cv-scroll");
            sidebar.classList.add("scrolled");
            setFullPageScroll(true);
        }
        if (to === "cv-home" && isFullPageScroll === true) {
            const sidebar = document.getElementById("sidebar-cv-scroll");
            sidebar.classList.remove("scrolled");
            setFullPageScroll(false);
        }
    };

    return (
        <div ref={ref}>
            <div className={"sidebar-cv"} id={"sidebar-cv-scroll"}>
                <ul>
                    <li>
                        <Link href={"#cv-home"} ignoreCancelEvents to="cv-home" spy={true} smooth={true} offset={-80} duration={800}
                              onSetActive={handleSetActive}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"#cv-information"} ignoreCancelEvents to="cv-information" spy={true} smooth={true} offset={-80}
                              duration={800}
                              onSetActive={handleSetActive}>
                            Informatie
                        </Link>
                    </li>
                    <li>
                        <Link href={"#cv-skills"} ignoreCancelEvents to="cv-skills" spy={true} smooth={true} offset={-80} duration={800}
                              onSetActive={handleSetActive}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href={"#cv-work-experience"} ignoreCancelEvents to="cv-work-experience" spy={true} smooth={true} offset={-80}
                              duration={800}
                              onSetActive={handleSetActive}>
                            Werkervaring
                        </Link>
                    </li>
                    <li>
                        <Link href={"#cv-education"} ignoreCancelEvents to="cv-education" spy={true} smooth={true} offset={-80} duration={800}
                              onSetActive={handleSetActive}>
                            Opleidingen
                        </Link>
                    </li>
                </ul>
            </div>
            <Header isFullPageScrolled={true}/>
            <Element name="cv-home" id="cv-home">
                <CvTop/>
            </Element>
            <Element name={"cv-information"} id={"cv-information"}>
                <CvInformation/>
            </Element>
            <Element name={"cv-skills"} id={"cv-skills"}>
                <CvSkills/>
            </Element>
            <Element name={"cv-work-experience"} id={"cv-work-experience"}>
                <CvWorkExperience/>
            </Element>
            <Element name={"cv-education"} id={"cv-education"}>
                <CvEducation/>
            </Element>
        </div>
    );
}

export default CV;