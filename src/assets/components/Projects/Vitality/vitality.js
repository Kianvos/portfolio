import React from "react";
import { Carousel } from 'react-responsive-carousel';

import Homescreen from '../../../media/Homescreen.mp4'
import {FaLaravel, FaReact} from "react-icons/fa";

const Vitality = () => {
    return (
        <div className={"sections project-sections"}>
            <h1 className={"project-name"}>Vitality</h1>
            <div className={"project-container"} id={"vitality"}>
                <div className={"project-left"}>
                    <Carousel dynamicHeight={false} width={'55%'} infiniteLoop={true} showThumbs={false}>
                        <div className={"carousel-item"}>
                            <video className={"video-vitality"} controls>
                                <source src={Homescreen} type="video/mp4"/>
                            </video>
                            <p className={"bottom-text"}>Homescreen App</p>
                        </div>
                    </Carousel>
                </div>
                <div className={"project-right"}>
                    <ul>
                        <li>Vitaliteit meten</li>
                        <li>Todo's bijhouden</li>
                        <li>Bekijken hoe het met vrienden gaat.</li>
                        <li>Samen sporten</li>
                    </ul>
                    <div className={"built-with "}>
                        <div className={"icon-text-stack relative"}>
                            <FaReact fontSize={40} color={"orange"}/>
                            <p className={"icon-text"}>React Native</p>
                        </div>
                        <div className={"icon-text-stack relative"}>
                            <FaLaravel fontSize={40} color={"red"}/>
                            <p className={"icon-text"}>Laravel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vitality;
