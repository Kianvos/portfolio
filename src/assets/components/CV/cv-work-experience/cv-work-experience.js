import React from "react";
import {Link} from "react-scroll";
import {TbArrowNarrowDown, TbArrowNarrowUp} from "react-icons/tb";

const CvSkills = () => {
    return (
        <div className="sections cv-section cv-color">
            <Link ignoreCancelEvents href={"#cv-skills"} to="cv-skills" spy={true} smooth={true} offset={-80}
                  duration={800} className={"cv-navigation-link"}>
                <div className={"cv-navigation go-up"}>
                    <TbArrowNarrowUp fontSize={50}/>
                    <p>Skills</p>
                </div>
            </Link>
            <div className="centered-content">
                <h1>Werkervaring</h1>
            </div>
            <Link ignoreCancelEvents href={"#cv-education"} to="cv-education" spy={true} smooth={true} offset={-80}
                  duration={800} className={"cv-navigation-link"}>
                <div className={"cv-navigation go-down"}>
                    <p>Opleidingen</p>
                    <TbArrowNarrowDown fontSize={50}/>
                </div>
            </Link>
        </div>
    );
};

export default CvSkills;
