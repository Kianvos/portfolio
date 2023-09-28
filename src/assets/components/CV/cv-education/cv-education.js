import React from "react";
import {Link} from "react-scroll";
import {TbArrowNarrowDown, TbArrowNarrowUp} from "react-icons/tb";

import HanzeLogo from '../../../img/CV/Logo_Hanze.png'
import AlfaLogo from '../../../img/CV/Logo_Alfa-college.png'
import WinklerPrinsLogo from '../../../img/CV/Logo_Winkler_Prins.png'

const CvEducation = () => {
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
                <div className={"experience-block"}>
                    <div className={"logo"}>
                        <img src={HanzeLogo} alt={"Hanzehogeschool Logo"}/>
                    </div>
                    <div className={"info"}>
                        <div className={"top-info"}>
                            <h3>HBO, Software Engineering</h3>
                            <p className="dates">sep 2021 - heden</p>
                        </div>
                        <p>Hanzehogeschool, Groninigen, Bachelor</p>
                    </div>
                </div>
                <div className={"experience-block"}>
                    <div className={"logo"}>
                        <img src={AlfaLogo} alt={"Alfa-college logo"}/>
                    </div>
                    <div className={"info"}>
                        <div className={"top-info"}>
                            <h3>MBO, Applicatie- en Mediaontwikkelaar</h3>
                            <p className="dates">sep 2018 - jul 2021</p>
                        </div>
                        <p>Alfa-College, Groninigen, Niveau 4</p>
                    </div>
                </div>
                <div className={"experience-block"}>
                    <div className={"logo"}>
                        <img src={WinklerPrinsLogo} alt={"Winkler Prins logo"}/>
                    </div>
                    <div className={"info"}>
                        <div className={"top-info"}>
                            <h3>Havo, Natuur & Gezondheid (t/m havo 4)</h3>
                            <p className="dates">sep 2014 - jul 2018</p>
                        </div>
                        <p>Winler Prins, Veendam</p>
                    </div>
                </div>
            </div>
            <div className={"cv-navigation go-down"}/>
            <Link ignoreCancelEvents href={"#cv-work-experience"} to="cv-work-experience" spy={true} smooth={true} offset={-80}
                  duration={800} className={"cv-navigation-link"}>
                <div className={"cv-navigation go-down"}>
                    <p>Werkervaring</p>
                    <TbArrowNarrowDown fontSize={50}/>
                </div>
            </Link>
        </div>
    );
};

export default CvEducation;
