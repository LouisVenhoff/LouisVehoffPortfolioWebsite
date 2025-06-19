import React, { useEffect, useState } from "react";
import "../../styles/pages/project/project.css";
import MarkdownElement from "../../components/markdownElement/markdownElement";
import testMarkdown from "../../assets/test.md?raw";
import useDocument from "../../hooks/useDocument";
import Doc from "../../classes/doc";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/contentHeader/contentHeader";
import { Badge } from "@chakra-ui/react";


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

    const renderTags = ():JSX.Element[] => {
        
        if(!currentDoc) return [];
        return currentDoc.tags.map((tag, _) => 
            <Badge maxW="sm" backgroundColor="#000000" color="teal">{tag}</Badge>
        );

    }
    
    return(
        <>
            <div className="project-main">
                <ContentHeader>
                    <div className="flex flex-col">
                        {currentDoc?.name}
                        <div className="flex gap-2">
                            {renderTags()}
                        </div>
                    </div>
                </ContentHeader>
                <div className="project-main--markdown-viewer">
                    <MarkdownElement markdown={markdown ?? testMarkdown} />
                </div>
            </div>
        </>
    );
}

export default Project;