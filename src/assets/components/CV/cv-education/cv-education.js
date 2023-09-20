import React from "react";
import {Link} from "react-scroll";
import {TbArrowNarrowUp} from "react-icons/tb";

const CvEducation = () => {
    return (
        <div className="sections cv-section cv-color">
            <Link ignoreCancelEvents href={"#cv-work-experience"} to="cv-work-experience" spy={true} smooth={true} offset={-80}
                  duration={800} className={"cv-navigation-link"}>
                <div className={"cv-navigation go-up"}>
                    <TbArrowNarrowUp fontSize={50}/>
                    <p>Werkervaringen</p>
                </div>
            </Link>
            <div className="centered-content">
                <h1>Opleidingen</h1>
            </div>
            <div className={"cv-navigation go-down"}/>
        </div>
    );
};

export default CvEducation;
