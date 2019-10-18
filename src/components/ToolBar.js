import React from 'react';
import NavIconBtn from './NavIconBtn';


const ToolBar = (props) => {
  return (
    <header className="toolBar">
        <nav className="navigation">
            <div>
                <NavIconBtn click={props.openToggleBtn}/>
            </div>
            <div className="logo"> <a href="/"> LOGO </a></div>
            <div className="space"></div>
            <div className="toolbar-items">
                <ul>
                    <li> <a href="/"> About Us</a> </li>
                    <li> <a href="/"> Services</a> </li>
                    <li> <a href="/"> Contact </a> </li>
                    <li> <a href="/"> Blog </a> </li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default ToolBar;
