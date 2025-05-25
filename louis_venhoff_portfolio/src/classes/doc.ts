import useDocument from "../hooks/useDocument";

class Doc{

    public name:string;
    public docId: number;
    public markdown:File | null;

    private docLoader = useDocument();

    public constructor(name:string, docId: number, markdown?:File){
        this.name = name;
        this.docId = docId;
        this.markdown = markdown ?? null;
    }

    public get markdownLoaded():boolean {
        return this.markdown !== null;
    }

    public async loadMarkdown():Promise<File>{
        this.markdown = await this.docLoader.fetchMarkdown(this.docId);

        if(!this.markdown) throw new Error("Markdown file is not available!");

        return this.markdown;
    }
    

}

export default Doc;
