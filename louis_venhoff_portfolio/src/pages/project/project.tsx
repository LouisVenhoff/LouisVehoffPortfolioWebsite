import React, { useEffect, useState } from "react";
import "../../styles/pages/project/project.css";
import MarkdownElement from "../../components/markdownElement/markdownElement";
import testMarkdown from "../../assets/test.md?raw";
import useDocument from "../../hooks/useDocument";
import Doc from "../../classes/doc";

type ProjectProps = {
    docId: number,
}



const Project:React.FC<ProjectProps>= ({docId}) => { 
    
    const [currentDoc, setCurrentDoc] = useState<Doc>();

    const [markdown, setMarkdown] = useState<string>();

    const docLoader = useDocument();
    
    useEffect(() => {
        loadDoc();
    }, []);

    useEffect(() => {
        updateMarkdown();
    }, [currentDoc]);

    const loadDoc = async () => {
        let docList:Doc[] = await docLoader.loadDocumentList();
        //TODO: Make Route for loading a single document
        setCurrentDoc(docList.find(dc => dc.docId == docId));
    }
    
    const updateMarkdown = async () => {
        if(!currentDoc) return;

        if(!currentDoc.markdownLoaded){
            await currentDoc.loadMarkdown();
        }

        let markdownText:string = await currentDoc!.markdown!.text();

        setMarkdown(markdownText);
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