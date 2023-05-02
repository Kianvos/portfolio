import React from "react";
import {Link} from "react-scroll";
import {TbArrowNarrowDown, TbArrowNarrowUp} from "react-icons/tb";

const CvSkills = () => {
    return (
        <div className="sections cv-color">
            <Link ignoreCancelEvents href={"#cv-information"} to="cv-information" spy={true} smooth={true} offset={-80} duration={800}>
                <div className={"cv-navigation go-up"}>
                    <TbArrowNarrowUp fontSize={50}/>
                    <p>Informatie</p>
                </div>
            </Link>
            <h1>Skills</h1>
            <Link ignoreCancelEvents href={"#cv-work-experience"} to="cv-work-experience" spy={true} smooth={true} offset={-80} duration={800}>
                <div className={"cv-navigation go-down"}>
                    <p>Werkervaring</p>
                    <TbArrowNarrowDown fontSize={50}/>
                </div>
            </Link>
        </div>
    );
};

export default CvSkills;
