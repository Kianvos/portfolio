import React from "react";
import { Carousel } from 'react-responsive-carousel';

import Homescreen from '../../../media/Homescreen.mp4'

const Vitality = () => {
    return (
        <div className={"sections project-sections"}>
            <h1 className={"project-name"}>Vitality</h1>
            <div className={"project-container"} id={"vitality"}>
                <div className={"project-left"}>
                    <Carousel dynamicHeight={false} width={'55%'} infiniteLoop={true} showThumbs={false}>
                        <div className={"carousel-item"}>
                            <video style={{ width: '50%'}} controls>
                                <source src={Homescreen} type="video/mp4"/>
                            </video>
                            <p className={"bottom-text"}>Homescreen App</p>
                        </div>
                    </Carousel>
                </div>
                <div className={"project-right"}>
                    <ul>
                        <li>Minimax</li>
                        <li>Alpha-Beta Pruning</li>
                        <li>Transposition Tables</li>
                    </ul>
                    <ul>
                        <li>React Native</li>
                        <li>Laravel</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Vitality;
