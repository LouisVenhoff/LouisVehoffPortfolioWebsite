import Doc from "../classes/doc";

export default function useDocument(){
    
    const loadDocumentList = async ():Promise<Doc[]> => {
        
        let result = await fetch("http://localhost:5297/api/Docs");

        const data = await result.json();

        let output:Doc[] = [];
        
        for(let i = 0; i < data.length; i++){
            output.push(new Doc(data[i].repositoryName, await fetchMarkdown(data[i].id)))
        }

        return output;

    }

    const fetchMarkdown = async (docId: number):Promise<File> => {

        let result = await fetch(`http://localhost:5297/api/Docs/download/markdown/${docId}`);

        let buffer = await result.arrayBuffer();
        let markdownBlob = new Blob([buffer], {type: "text/markdown"});
        let file = new File([markdownBlob], "markdown.md", {type: "text/markdown"});

        return file;

    }

    return loadDocumentList;

}