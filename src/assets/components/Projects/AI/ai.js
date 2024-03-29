import React from "react";
// import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import {FaJava} from "react-icons/fa";

import TicTacToe from '../../../img/Projects/tic-tac-toe.png'
import Othello from '../../../img/Projects/othello.png'


const Ai = () => {
    return (
        <div className={"sections project-sections"}>
            <h1 className={"project-name"}>Othello & TicTacToe AI</h1>
            <div className={"project-container"} id={"ai"}>
                <div className={"project-left"}>
                    <Carousel dynamicHeight={false} width={'55%'} infiniteLoop={true} showThumbs={false}>
                        <div className={"carousel-item"}>
                            <img src={TicTacToe} alt={"Playing tic-tac-toe"}/>
                            <p className={"bottom-text"}>Tic-Tac-Toe</p>
                        </div>
                        <div className={"carousel-item"}>
                            <img src={Othello} alt={"Othello White(AI) wins"}/>
                            <p className={"bottom-text"}>Othello</p>
                        </div>
                    </Carousel>
                </div>
                <div className={"project-right"}>
                    <ul>
                        <li>Minimax</li>
                        <li>Alpha-Beta Pruning</li>
                        <li>Transposition Tables</li>
                    </ul>
                    <div className={"built-with "}>
                        <div className={"icon-text-stack relative"}>
                            <FaJava fontSize={40} color={"orange"}/>
                            <p className={"icon-text"}>Java</p>
                        </div>
                    </div>
                    <div className={"bottom-one-button"}>
                        <a className={"link-to-github"} href={"https://github.com/Kianvos/Inteligente_Systemen"}>Link naar github</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ai;
