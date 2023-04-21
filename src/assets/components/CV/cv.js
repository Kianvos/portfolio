import React, {useRef} from 'react';
import {Link} from "react-scroll";
const CV = () => {
    const ref = useRef(null);

    return (
        <div ref={ref} id="top">
            <div style={{position: "fixed", bottom: "20px", right: "20px", cursor: "pointer"}}>
                <Link to="top" smooth={true}>
                    Naar boven
                </Link>
            </div>
        </div>
    );
}

export default CV;