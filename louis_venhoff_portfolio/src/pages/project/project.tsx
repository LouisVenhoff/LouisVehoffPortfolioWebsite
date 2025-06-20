import React, { JSX, useEffect, useRef, useState } from "react";
import "../../styles/pages/project/project.css";
import MarkdownElement from "../../components/markdownElement/markdownElement";
import testMarkdown from "../../assets/test.md?raw";
import useDocument from "../../hooks/useDocument";
import Doc from "../../classes/doc";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/contentHeader/contentHeader";
import { Badge } from "@chakra-ui/react";
import * as motion from "motion/react-client";


const Project:React.FC= () => { 
    
    const [currentDoc, setCurrentDoc] = useState<Doc>();

    const [markdown, setMarkdown] = useState<string>();

    const tagsDiv = useRef<HTMLDivElement>(null);

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

    const calculateTagsDivSize = (badges: JSX.Element[]) => {
        
        let divSize:number = 0;

        badges.forEach((element: JSX.Element) => {
            divSize += 50;
        });

        tagsDiv.current!.style.width = `${divSize}px`;
    }

    const renderTags = ():JSX.Element[] => {
        if(!currentDoc) return [];

        let tagBadges:JSX.Element[] = currentDoc.tags.map((tag, index) => {
            return <Badge key={index} maxW="sm" backgroundColor="#000000" color="teal">{tag}</Badge>
        });

        calculateTagsDivSize(tagBadges);

        return tagBadges;

    }
    
    return(
        <>
            <div className="project-main">
                <ContentHeader showBackButton={true}>
                    <div className="flex flex-col">
                        {currentDoc?.name}
                        <div ref={tagsDiv} className="project-header--tags">
                            <motion.div animate={{x: ["0%", "-50%"]}} transition={{repeat: Infinity, duration: 30, ease: "linear"}} className="flex gap-2">
                                {renderTags()}
                                {renderTags()}
                            </motion.div>
                        </div>
                    </div>
                </ContentHeader>
                <div className="project--markdown-viewer">
                    <MarkdownElement markdown={markdown ?? testMarkdown} />
                </div>
            </div>
        </>
    );
}

export default Project;