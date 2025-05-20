import React from "react";
import "../../styles/pages/project/project.css";
import MarkdownElement from "../../components/markdownElement/markdownElement";
import testMarkdown from "../../assets/test.md?raw";

const Project:React.FC = () => { 
    return(
        <>
            <div className="project-main">
                <div className="project-main--header">
                    Dillinger, the nice Markdown editor!
                </div>
                <div className="project-main--markdown-viewer">
                    <MarkdownElement markdown={testMarkdown}/>
                </div>
            </div>
        </>
    );
}

export default Project;