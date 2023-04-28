import React from "react";
import {MdGroups} from "react-icons/md";
import {FaJava, FaLaravel, FaReact} from "react-icons/fa";
import {SiPhp} from "react-icons/si";
import PythonI from "../../../img/python.svg"
import {TbApi, TbBrandGolang} from "react-icons/tb";

import './projects.css';
import othelloAI from '../../../img/AI.png'
import ferienWohnung from '../../../img/ferienwohnung.png'
import vitality from '../../../img/vitality.png'

const Projects = () => {
    return (
        <div className="sections" id="projects">
            <h1>Projecten</h1>
            <h2 style={{color: "darkgray"}}>Aan deze projecten heb ik gewerkt.</h2>

            <div className={"projects"}>
                <div className="project">
                    <div className={"name"}>
                        <h3>Othello & TicTacToe AI</h3>
                    </div>
                    <div className={"image-container"}>
                        <img className={"image"} src={othelloAI} alt={"othello-AI"}/>
                    </div>
                    <div className={"built-with"}>
                        <div className={"icon-text-stack"}>
                            <FaJava fontSize={32} color={"orange"}/>
                            <p>Java</p>
                        </div>
                    </div>
                    <div className={"collaboration-container"}>
                        <MdGroups fontSize={26}/>
                        <p>Groepsproject</p>
                    </div>
                    <div className={"button-container"}>
                        <button className={"projects-button"}>Meer informatie</button>
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
                        <button className={"projects-button"}>Meer informatie</button>
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
                        <button className={"projects-button"}>Meer informatie</button>
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
                            {/*<PythonI/>*/}
                            <p>Python</p>
                        </div>
                        <div className={"icon-text-horizontal"}>
                            <TbBrandGolang fontSize={32} color={"cyan"}/>
                            <p>Golang</p>
                        </div>
                        <div className={"icon-text-horizontal"}>
                            <SiPhp fontSize={32} color={"#8993be"}/>
                            <p>PHP</p>
                        </div>
                    </div>
                    <div className={"button-container"}>
                        <button className={"projects-button"}>Meer projecten</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
