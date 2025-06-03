import { useEffect, useState } from "react";
import ProjectThumbnail from "../../components/projectThumbnail/projectThumbnail";
import useDocument from "../../hooks/useDocument";
import "../../styles/pages/projects/projects.css";


const Projects:React.FC = () => {
    
    const [docs, setDocs] = useState<Doc[]>([]);
    
    const documentTools = useDocument();

    useEffect(() => {
        documentTools.loadDocumentList().then(e => setDocs(e));
    });

    const buildThumbnails = ():JSX.Element[] => {
        
        return docs.map((doc: Doc) => {
            
            let imagePath:string = `http://localhost:5297/api/Docs/download/thumbnail/${doc.docId}`
            
            return <ProjectThumbnail name={doc.name} description={doc.description} tags={doc.tags} imagePath={imagePath} projectId={doc.docId} />
        });
    }
    
    
    return (
        <div className="projects--main">
            <div className="projects--header">
                Projekte
            </div>
            <div className="flex justify-center">
                <div className="projects--container">
                    {buildThumbnails()}
                    {buildThumbnails()}
                    {buildThumbnails()}
                    {buildThumbnails()}
                    {buildThumbnails()}
                    {buildThumbnails()}
                    {buildThumbnails()}
                </div>
            </div>
        </div>
    );
}

export default Projects;