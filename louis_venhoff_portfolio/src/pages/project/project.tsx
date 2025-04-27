import React, { useEffect } from "react";
import "../../styles/pages/project/project.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import test from "../../assets/test.md?raw";

const Project:React.FC = () => { 
    return(
        <div className="project--main">
            <div className="project--content">
                "Hello WOrld"
            </div>
        </div>
    );
}

export default Project;