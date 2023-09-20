import React from "react";
import {Link} from "react-scroll";
import {TbArrowNarrowDown, TbArrowNarrowUp} from "react-icons/tb";

const CvSkills = () => {
    return (
        <div className="sections cv-section cv-color">
            <Link ignoreCancelEvents href={"#cv-information"} to="cv-information" spy={true} smooth={true} offset={-80}
                  duration={800} className={"cv-navigation-link"}>
                <div className={"cv-navigation go-up"} >
                    <TbArrowNarrowUp fontSize={50}/>
                    <p>Informatie</p>
                </div>
            </Link>
            <div className="centered-content languages">
                <div className={"skills-left"}>
                    <h2>Programmeertalen</h2>
                    <div className="skill-bar">
                        <div className="skill-label">Golang:</div>
                        <div className="skill-progress">
                            <div className="skill-progress-bar" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-label">React:</div>
                        <div className="skill-progress">
                            <div className="skill-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-label">Python:</div>
                        <div className="skill-progress">
                            <div className="skill-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-label">Php:</div>
                        <div className="skill-progress">
                            <div className="skill-progress-bar" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                </div>

                <div className={"skills-right"}>
                    <h2>Talen</h2>
                    <div className="skill-bar">
                        <div className="skill-label">Nederlands:</div>
                        <div className="skill-progress">
                            <div className="skill-progress-bar" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-label">Engels:</div>
                        <div className="skill-progress">
                            <div className="skill-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-label">Duits:</div>
                        <div className="skill-progress">
                            <div className="skill-progress-bar" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
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

export default CvSkills;
