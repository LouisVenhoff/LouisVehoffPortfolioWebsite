import React, { useEffect } from "react";
import "../../styles/pages/project/project.css";
import ReactMarkdown from "react-markdown";
import test from "../../assets/test.md?raw";

const Project:React.FC = () => { 
    return(
        <div className="w-full h-full flex justify-center">
            <div className="bg-black m-64 w-full h-full">
                <ReactMarkdown>
                    {test}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default Project;