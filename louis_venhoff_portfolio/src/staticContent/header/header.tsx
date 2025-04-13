import React, {JSX, ReactNode, useEffect, useState} from "react";
import "../../styles/staticContent/header.css";
import NavButton from "./navButton/navButton";

type HeaderProps = {
    children:ReactNode,
}


const Header:React.FC<HeaderProps> = ({ children }) => {
    
    const childrenArr:ReactNode[] = React.Children.toArray(children);

    const [contentSlot, setContentSlot] = useState<ReactNode[]>();

    useEffect(() => {
        
        const output:ReactNode[] = [];
        
        for(let i = 0; i < childrenArr.length; i++){
            output.push(childrenArr[i]);
            output.push(<p>/</p>)
        }

        setContentSlot(output);
    });
        
    return(
        <div className="header--main">
            <div className="header--actions">
                {contentSlot}
            </div>
        </div>
    );
}

export default Header;