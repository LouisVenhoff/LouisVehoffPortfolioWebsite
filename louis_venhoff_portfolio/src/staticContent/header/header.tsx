import React, {JSX, ReactNode, useEffect, useState} from "react";
import "../../styles/staticContent/header.css";
import NavButton from "./navButton/navButton";

type HeaderProps = {
    children:ReactNode,
}


const Header:React.FC<HeaderProps> = ({ children }) => {
        
    return(
        <div className="header--main">
            <div className="header--title">
                <h1>Louis Venhoff</h1>
            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="header--actions">
                    {children}
                </div>
                <div className="header-actions--underline">

                </div>
            </div>
        </div>
    );
}

export default Header;