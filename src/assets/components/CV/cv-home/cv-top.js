import React from "react";
import CvPDF from '../../../media/CV_Kian_Vos_V2.pdf';
import {Link} from "react-scroll";

const CvHome = () => {
    return (
        <div className="sections" id="cv-top">
            <div className={"center"}>
                <h1 className={"cv-h1-text"}>Curriculum vitae</h1>
                <h3 className={"cv-subtext"}>Student HBO Software Engineering</h3>
            </div>
            <div className={"button-group"}>
                <Link href={"#cv-information"} ignoreCancelEvents to="cv-information" className={"information-button left cv"} spy={true} smooth={true} offset={-80} duration={800}>
                    Interactief
                </Link>
                <a className={"information-button right cv"} href={CvPDF} download={"Kian_Vos_CV"}>
                    Download
                </a>
            </div>
        </div>
    );
};

export default CvHome;
