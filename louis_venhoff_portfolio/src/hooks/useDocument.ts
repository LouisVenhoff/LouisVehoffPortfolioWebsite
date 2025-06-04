import Doc from "../classes/doc";
import useEnv from "./useEnv";

export default function useDocument(){

    const {serverUrl} = useEnv();
    
    const loadDocumentList = async ():Promise<Doc[]> => {
        let result = await fetch(`http://localhost:5297/api/Docs`);

        const data = await result.json();

        let output:Doc[] = [];
        
        for(let i = 0; i < data.length; i++){
            output.push(new Doc(data[i].documentName, data[i].repositoryName, data[i].id, data[i].description, JSON.parse(data[i].tags)));
        }

        return output;

    }

    const fetchMarkdown = async (docId: number):Promise<File> => {
        console.log(serverUrl)
        let result = await fetch(`http://localhost:5297/api/Docs/download/markdown/${docId}`);

        let buffer = await result.arrayBuffer();
        let markdownBlob = new Blob([buffer], {type: "text/markdown"});
        let file = new File([markdownBlob], "markdown.md", {type: "text/markdown"});

        return file;

    }

    return {loadDocumentList, fetchMarkdown};

}