import React, { useEffect, useState } from "react";
import "../../styles/pages/project/project.css";
import MarkdownElement from "../../components/markdownElement/markdownElement";
import testMarkdown from "../../assets/test.md?raw";
import useDocument from "../../hooks/useDocument";
import Doc from "../../classes/doc";
import { useParams } from "react-router-dom";


const Project:React.FC= () => { 
    
    const [currentDoc, setCurrentDoc] = useState<Doc>();

    const [markdown, setMarkdown] = useState<string>();

    const docLoader = useDocument();

    const {id} = useParams();
    
    useEffect(() => {
        loadDoc();
    }, []);

    useEffect(() => {
        updateMarkdown();
    }, [currentDoc]);

    const loadDoc = async () => {
        
        if(!id) throw new Error("No id parameter provided!");
        
        let docList:Doc[] = await docLoader.loadDocumentList();
        
        //TODO: Make Route for loading a single document
        setCurrentDoc(docList.find(dc => dc.docId == parseInt(id)));
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