import React from "react";
import './projects.css';

const Projects = () => {
    return (
        <div className="sections" id="projects">
            <h1>Projecten</h1>
            <h2 style={{color: "darkgray"}}>Aan deze projecten heb ik gewerkt.</h2>

            <div className={"projects"}>
                <div className="project">
                    <h3>Othello & TicTacToe AI</h3>

                    <div className={"built-with"}>
                        <p>Gebouwd met:</p>
                        <ul>
                            <li>Java</li>
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <h3>Vitaliteit app</h3>
                    <div className={"built-with"}>
                        <p>Gebouwd met:</p>
                        <ul>
                            <li>React Native</li>
                            <li>PHP Laravel</li>
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <h3>Huis Oostenrijk</h3>
                    <div className={"built-with"}>
                        <p>Gebouwd met:</p>
                        <ul>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <h3>Andere projecten</h3>
                    <div>
                        <p>In projecten gewerkt met: </p>
                        <ul>
                            <li>Python </li>
                            <li>Golang </li>
                            <li>PHP Flask</li>
                        </ul>
                    </div>
                    <p>Dit wordt later toegevoegt.</p>
                    <button>Meer projecten</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
