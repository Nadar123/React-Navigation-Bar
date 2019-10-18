import React from 'react';
import './nav.scss';


const OpenSideBar = (props) => {
    let sideBarClass = 'side-bar';
    if(props.show){
        sideBarClass = 'side-bar open'
    }
    return (
        <nav className={sideBarClass}>
            <ul>
                <li> <a href="/"> About Us</a> </li>
                <li> <a href="/"> Services</a> </li>
                <li> <a href="/"> Contact </a> </li>
                <li> <a href="/"> Blog </a> </li>
            </ul>
        </nav>
    )
}

export default OpenSideBar;