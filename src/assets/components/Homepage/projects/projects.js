import React from "react";
import {MdGroups} from "react-icons/md";
import {FaJava, FaLaravel, FaReact} from "react-icons/fa";
import {SiPhp} from "react-icons/si";
import PythonI from "../../../img/python.svg"
import {TbApi, TbBrandGolang} from "react-icons/tb";
import {HashLink} from 'react-router-hash-link';


import './projects.css';
import othelloAI from '../../../img/AI.webp'
import ferienWohnung from '../../../img/ferienwohnung.webp'
import vitality from '../../../img/vitality.webp'

const Projects = () => {
    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({top: yCoordinate + yOffset, behavior: 'smooth'});
    }

    return (
        <div className="sections" id="projects">
            <div className={"top-text"}>
                <h1>Projecten</h1>
                <h2 style={{color: "darkgray"}}>Aan deze projecten heb ik gewerkt.</h2>
            </div>
            <div className={"projects"}>
                <div className="project">
                    <div className={"name"}>
                        <h3>Othello & TicTacToe AI</h3>
                    </div>
                    <div className={"image-container"}>
                        <img className={"image"} src={othelloAI} alt={"othello-AI"}/>
                    </div>
                    <div className={"built-with "}>
                        <div className={"icon-text-stack relative"}>
                            <FaJava fontSize={32} color={"orange"}/>
                            <p>Java</p>
                        </div>
                    </div>
                    <div className={"collaboration-container"}>
                        <MdGroups fontSize={26}/>
                        <p>Groepsproject</p>
                    </div>
                    <div className={"button-container"}>
                        <HashLink className={"projects-button"} smooth to='/projects#section1' scroll={el => scrollWidthOffset(el)}>Meer
                            informatie</HashLink>
                    </div>
                </div>
                <div className="project">
                    <div className={"name"}>
                        <h3>Vitaliteit app</h3>
                    </div>
                    <div className={"image-container"}>
                        <img className={"image"} src={vitality} alt={"vitality"}/>
                    </div>
                    <div className={"built-with"}>
                        <div className={"icon-text-stack"}>
                            <FaReact fontSize={32} color={"green"}/>
                            <p>React native</p>
                        </div>
                        <div className={"icon-text-stack"}>
                            <TbApi fontSize={32} color={"black"}/>
                            <p>API</p>
                        </div>
                        <div className={"icon-text-stack"}>
                            <FaLaravel fontSize={32} color={"red"}/>
                            <p>Laravel</p>
                        </div>
                    </div>
                    <div className={"collaboration-container"}>
                        <MdGroups fontSize={26}/>
                        <p>Groepsproject</p>
                    </div>
                    <div className={"button-container"}>
                        <HashLink className={"projects-button"} smooth to='/projects#section2' scroll={el => scrollWidthOffset(el)}>Meer
                            informatie</HashLink>
                    </div>
                </div>
                <div className="project">
                    <div className={"name"}>
                        <h3>Vakantiehuis Oostenrijk</h3>
                    </div>
                    <div className={"image-container"}>
                        <img className={"image"} src={ferienWohnung} alt={"ferienwohnung"}/>
                    </div>
                    <div className={"built-with"}>
                        <div className={"icon-text-stack"}>
                            <FaReact fontSize={32} color={"#61dafb"}/>
                            <p>React</p>
                        </div>
                    </div>
                    <div className={"collaboration-container"}>
                        <MdGroups fontSize={26}/>
                        <p>Solo-project</p>
                    </div>
                    <div className={"button-container"}>
                        <HashLink className={"projects-button"} smooth to='/projects#section3'
                                  scroll={el => scrollWidthOffset(el)}>Meer
                            informatie</HashLink>
                    </div>
                </div>
                <div className="project">
                    <div className={"name"}>
                        <h3>Andere projecten</h3>
                    </div>
                    <p>In projecten gewerkt met: </p>
                    <div className={"more-projects"}>
                        <div className={"icon-text-horizontal"}>
                            <img src={PythonI} alt={"python"}/>
                            <p>Python</p>
                        </div>
                        <div className={"icon-text-horizontal"}>
                            <TbBrandGolang fontSize={40} color={"cyan"}/>
                            <p>Golang</p>
                        </div>
                        <div className={"icon-text-horizontal"}>
                            <SiPhp fontSize={40} color={"#8993be"}/>
                            <p>PHP</p>
                        </div>
                    </div>
                    <div className={"button-container"}>
                        <HashLink className={"projects-button"} smooth to='/projects'
                                  scroll={el => scrollWidthOffset(el)}>Meer
                            projecten</HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
