import React from "react";
import { Carousel } from 'react-responsive-carousel';
import FerienWohnung from '../../../img/ferienwohnung.webp'
import Apartments from '../../../img/Projects/apartments.png'
import Winter from '../../../img/Projects/winter.png'
import Summer from '../../../img/Projects/summer.png'

import {FaReact} from "react-icons/fa";


const HouseAustria = () => {
    return (
        <div className={"sections project-sections"}>
            <h1 className={"project-name"}>Vakantiehuis Oostenrijk</h1>
            <div className={"project-container"} id={"house-austria"}>
                <div className={"project-left"}>
                    <Carousel dynamicHeight={false} width={'55%'} infiniteLoop={true} showThumbs={false}>
                        <div className={"carousel-item"}>
                            <img className={"project-image"} src={FerienWohnung} alt={"Homepagina van de website"}/>
                            <p className={"bottom-text"}>Homepage</p>
                        </div>
                        <div className={"carousel-item"}>
                            <img className={"project-image"} src={Apartments} alt={"Appartementen pagina"}/>
                            <p className={"bottom-text"}>Appartementen pagina</p>
                        </div>
                        <div className={"carousel-item"}>
                            <img className={"project-image"} src={Summer} alt={"Lijst met zomeractiviteiten in de buurt"}/>
                            <p className={"bottom-text"}>Zomeractiviteitenpagina</p>
                        </div>
                        <div className={"carousel-item"}>
                            <img className={"project-image"} src={Winter} alt={"Lijst met winteractiviteiten in de buurt"}/>
                            <p className={"bottom-text"}>Winteractiviteitenpagina</p>
                        </div>
                    </Carousel>
                </div>
                <div className={"project-right"}>
                    <ul>
                        <li>Appartementen</li>
                        <li>Meerdere talen</li>
                        <li>Zomer/ winterpagina</li>
                    </ul>
                    <div className={"built-with "}>
                        <div className={"icon-text-stack relative"}>
                            <FaReact fontSize={40} color={"green"}/>
                            <p className={"icon-text"}>React</p>
                        </div>
                    </div>
                    <a className={"link-to-button"} href={"https://ferienwohnung.kianvos.nl"}>Link naar pagina</a>
                </div>
            </div>
        </div>
    );
};

export default HouseAustria;
