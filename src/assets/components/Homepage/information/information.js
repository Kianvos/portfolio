import React, {useEffect, useState} from "react";
import {Link} from "react-scroll";
import {TbArrowNarrowDown} from "react-icons/tb";

import './information.css';

const Information = () => {
    const [age, setAge] = useState(null)

    //Most coding I do is for my studies, but often enough I find myself trying new things or creating my own projects just for the fun of it. You can find most these on my Github.

    useEffect(() => {
        const birthDate = new Date("2002-07-25"); // jouw geboortedatum hier invullen
        const today = new Date();
        const age = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
        setAge(age);
    }, []);

    return (
        <div className={"sections"} id="information">

            <div className={"center"}>
                <h1 className={"name-center"}>Kian Vos</h1>
                <h3 className={"subtext"}>SOFTWARE DEVELOPER</h3>
            </div>

            <div className={"small-talk"}>
                <p>Ik ben Kian, {age} jaar oud.<br/>Momenteel volg ik de studie HBO-ICT aan de HanzeHogeschool in
                    Groningen.<br/>Het meeste programmeerwerk doe ik tijdens mijn studie, maar ook vaak genoeg ben ik
                    zelf met leuke projecten bezig.</p>
            </div>
            <div className={"button-group"}>
                <a className={"information-button left"} href="https://www.linkedin.com/in/kian-vos/" target="_blank"
                   rel="noreferrer">
                    LinkedIn
                </a>
                <a className={"information-button right"} href="https://www.github.com/kianvos" target="_blank"
                   rel="noreferrer">
                    GitHub
                </a>
            </div>

            <div className={"arrow"}>
                <Link href={"#experiences"} to="experiences" spy={true} smooth={true} offset={-80} duration={800}>
                    <TbArrowNarrowDown fontSize={60}/>
                </Link>
            </div>
        </div>
    );
};

export default Information;