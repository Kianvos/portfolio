import React from "react";
import {Link} from "react-scroll";
import {TbArrowNarrowDown, TbArrowNarrowUp} from "react-icons/tb";

const CvInformation = () => {
    return (
        <div className="sections cv-section cv-color" id="cv-interactive">
            <Link ignoreCancelEvents href={"#cv-home"} to="cv-home" spy={true} smooth={true} offset={-80}
                  duration={800} className={"cv-navigation-link"}>
                <div className={"cv-navigation go-up"}>
                    <TbArrowNarrowUp fontSize={50}/>
                    <p>Home</p>
                </div>
            </Link>
            <div className="centered-content">
                <div className="profile-text">
                    <h2>Kian Vos</h2>
                    <p>Ik ben een hardwerkende developer die het leuk vindt om samen met anderen tot een mooi
                        eindresultaat te komen. Een aantal jaar geleden heb ik de opleiding Applicatie- en
                        Mediaontwikkelaar afgerond op het mbo. Inmiddels heb ik de propedeuse voor het hbo gehaald. In
                        de toekomst wil ik graag mijn kennis uitbreiden, zodat ik een steeds betere developer wordt.</p>
                </div>
                <div className="profile-img">
                    {/*<img src="jouw-foto-url.jpg" alt="Jouw foto" />*/}
                </div>
            </div>
            <Link ignoreCancelEvents href={"#cv-skills"} to="cv-skills" spy={true} smooth={true} offset={-80}
                  duration={800} className={"cv-navigation-link"}>
                <div className={"cv-navigation go-down"}>
                    <p>Skills</p>
                    <TbArrowNarrowDown fontSize={50}/>
                </div>
            </Link>
        </div>
    );
};

export default CvInformation;
