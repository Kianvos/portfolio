import React from "react";
import {Link} from "react-scroll";
import {TbArrowNarrowDown, TbArrowNarrowUp} from "react-icons/tb";

const CvInformation = () => {
    return (
        <div className="sections cv-color" id="cv-interactive">
            <Link ignoreCancelEvents href={"#cv-home"} to="cv-home" spy={true} smooth={true} offset={-80} duration={800}>
                <div className={"cv-navigation go-up"}>
                    <TbArrowNarrowUp fontSize={50}/>
                    <p>Home</p>
                </div>
            </Link>

            <h1 style={{marginTop: "200px"}}>Informatie</h1>

            <Link ignoreCancelEvents href={"#cv-skills"} to="cv-skills" spy={true} smooth={true} offset={-80} duration={800}>
                <div className={"cv-navigation go-down"}>
                    <p>Skills</p>
                    <TbArrowNarrowDown fontSize={50}/>
                </div>
            </Link>
        </div>
    );
};

export default CvInformation;
