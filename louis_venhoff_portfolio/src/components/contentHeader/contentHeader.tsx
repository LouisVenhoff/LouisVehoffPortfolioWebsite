import React from "react";
import "../../styles/components/contentHeader.css";

type ContentHeaderProps = {
    children: React.ReactNode;
}


const ContentHeader:React.FC<ContentHeaderProps> = ({children}: ContentHeaderProps) => {
    return(
        <div className="content-header--main">
            {children}
        </div>
    );
}

export default ContentHeader;