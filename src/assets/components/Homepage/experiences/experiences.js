import React from "react";
import {FaCss3, FaHtml5, FaJava, FaPhp, FaPython, FaReact} from "react-icons/fa";
import {TbBrandGolang} from "react-icons/tb";
import {Rating} from "@mui/material";
import './experiences.css';

const Projects = () => {
    return (
        <div className="sections" id="experiences">
            <div className={"top-text"}>
                <h1>Ervaringen</h1>
                <h2 style={{color: "darkgray"}}>Deze ervaringen zijn opgedaan tijdens schoolopdrachten, stageopdrachten
                    en thuisprojecten.
                </h2>
            </div>
            <div className={"container-experiences"}>
                <div className={"row frontend"}>
                    <div className="experience">
                        <FaReact className={"icon"}/>
                        <p>React</p>
                        <Rating readOnly precision={0.5} defaultValue={3.5}/>
                    </div>
                    <div className="experience">
                        <FaHtml5 className={"icon"}/>
                        <p>HTML 5</p>
                        <Rating readOnly precision={0.5} defaultValue={3}/>
                    </div>
                    <div className="experience">
                        <FaCss3 className={"icon"}/>
                        <p>CSS 3</p>
                        <Rating readOnly precision={0.5} defaultValue={2.5}/>
                    </div>
                </div>
                <div className={"row backend"}>
                    <div className="experience">
                        <FaPython className={"icon"}/>
                        <p>Python</p>
                        <Rating readOnly precision={0.5} defaultValue={4}/>
                    </div>
                    <div className="experience">
                        <TbBrandGolang className={"icon"}/>
                        <p>Golang</p>
                        <Rating readOnly precision={0.5} defaultValue={4}/>
                    </div>
                    <div className="experience">
                        <FaPhp className={"icon"}/>
                        <p>PHP</p>
                        <Rating readOnly precision={0.5} defaultValue={3}/>
                    </div>
                    <div className="experience">
                        <FaJava className={"icon"}/>
                        <p>Java</p>
                        <Rating readOnly precision={0.5} defaultValue={3}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
