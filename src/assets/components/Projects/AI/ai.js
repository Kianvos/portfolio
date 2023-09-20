import React from "react";
import Slider from "react-slick";


const Ai = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        className: 'slides',
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={"sections"}>
            <Slider {...sliderSettings}>
                <div className={"project-slider"}>
                    <h1>Othello & TicTacToe AI</h1>
                    <ul>
                        <li>Minimax</li>
                        <li>Alpha-Beta Pruning</li>
                        <li>Transposition Tables</li>
                    </ul>
                </div>
                <div>
                    <h1>Screenshots</h1>
                </div>
            </Slider>
        </div>
    );
};

export default Ai;
