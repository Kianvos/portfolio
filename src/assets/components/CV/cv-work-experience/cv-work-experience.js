import React from "react";
import {Link} from "react-scroll";
import {TbArrowNarrowUp} from "react-icons/tb";

import ResatoLogo from '../../../img/CV/Logo_Resato.png'


const CvSkills = () => {
    return (
        <div className="sections cv-section cv-color">
            <Link ignoreCancelEvents href={"#cv-education"} to="cv-education" spy={true} smooth={true} offset={-80}
                  duration={800} className={"cv-navigation-link"}>
                <div className={"cv-navigation go-up"}>
                    <TbArrowNarrowUp fontSize={50}/>
                    <p>Opleidingen</p>
                </div>
            </Link>
            <div className="centered-content">
                <div className={"experience-block"}>
                    <div className={"logo"}>
                        <img src={ResatoLogo} alt={"Logo Resato International"}/>
                    </div>
                    <div className={"info"}>
                        <div className={"top-info"}>
                            <h3>Stage backend developer</h3>
                            <p className="dates">feb 2021 - jul 2021</p>
                        </div>
                        <p>In de tijd dat ik hier stage gelopen heb, heb ik voornamelijk gewerkt met Golang.</p>
                    </div>
                </div>

                <div className={"experience-block"}>
                    <div className={"logo"}>
                        <img src={ResatoLogo} alt={"Logo Resato International"}/>
                    </div>
                    <div className={"info"}>
                        <div className={"top-info"}>
                            <h3>Stage backend developer</h3>
                            <p className="dates">sep 2019 - feb 2020</p>
                        </div>
                        <p>Tijdens mijn stageperiode bij Resato ben ik vooral bezig geweest met Golang. Hier ben ik bezig geweest aan het bouwen van een API die door een frontend gebruikt kan worden.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvSkills;
