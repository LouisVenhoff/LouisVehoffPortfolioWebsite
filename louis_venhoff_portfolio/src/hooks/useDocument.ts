import Doc from "../classes/doc";

export default function useDocument(){
    
    const loadDocumentList = async ():Promise<Document[]> => {
        
        let result = await fetch("http://localhost:5297/api/Docs");

        const data = await result.json();

        let output:Doc[] = [];
        
        data.forEach(async (project:any) => {
            output.push(new Doc(project.repositoryName, await fetchMarkdown(project.id)));
        });

        console.log(output);

        return [];
    }

    const fetchMarkdown = async (docId: number):Promise<File> => {

        let result = await fetch(`http://localhost:5297/api/Docs/download/markdown/${docId}`);

        //console.log(await result.arrayBuffer().toString());
        let buffer = await result.arrayBuffer();
        let markdownBlob = new Blob([buffer], {type: "text/markdown"});
        let file = new File([markdownBlob], "markdown.md", {type: "text/markdown"});

        return file;

    }

    return loadDocumentList;

}