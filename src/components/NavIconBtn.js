import React from 'react';
import './nav.scss';

const NavIconBtn = (props) => {
    return (
        <button onClick={props.click} className="toggle-button">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </button>

    )
}

export default NavIconBtn;