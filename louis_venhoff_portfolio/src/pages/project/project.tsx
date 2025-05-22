import React, { useEffect, useState } from "react";
import "../../styles/pages/project/project.css";
import MarkdownElement from "../../components/markdownElement/markdownElement";
import testMarkdown from "../../assets/test.md?raw";
import useDocument from "../../hooks/useDocument";
import Doc from "../../classes/doc";

const Project:React.FC = () => { 
    
    const [currentDoc, setCurrentDoc] = useState<Doc>();

    const [markdown, setMarkdown] = useState<string>();

    const docLoader = useDocument();
    
    useEffect(() => {
        loadDoc();
    }, []);

    useEffect(() => {
        currentDoc?.markdown.text().then((markdownText:string) => {setMarkdown(markdownText)});
    }, [currentDoc]);

    const loadDoc = async () => {
        let docList:Doc[] = await docLoader();
        setCurrentDoc(docList[0]);
    }
    
    
    return(
        <>
            <div className="project-main">
                <div className="project-main--header">
                    {currentDoc?.name}
                </div>
                <div className="project-main--markdown-viewer">
                    <MarkdownElement markdown={markdown ?? testMarkdown} />
                </div>
            </div>
        </>
    );
}

export default Project;