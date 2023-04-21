import React from 'react';
import './default.css';
function Header({isScrolled}) {
    const navBarClass = isScrolled ? "navbar scrolled" : "navbar";
    return (
        <div className={navBarClass}>
            <h1>test</h1>
        </div>
    );
}

export default Header;