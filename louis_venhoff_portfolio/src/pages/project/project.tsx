import React, { useEffect } from "react";
import "../../styles/pages/project/project.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import test from "../../assets/test.md?raw";

const Project:React.FC = () => { 
    return(
        <div className="w-full h-full flex justify-center">
            <div className="bg-black m-64 w-full h-full">
                <MarkdownPreview source={test} />
            </div>
        </div>
    );
}

export default Project;