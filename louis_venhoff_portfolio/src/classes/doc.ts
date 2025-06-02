import useDocument from "../hooks/useDocument";

class Doc{

    public name:string;
    public repositoryName:string;
    public docId: number;
    public markdown:File | null;
    public description: string;
    public tags: string[];

    private docLoader = useDocument();

    public constructor(name:string, repositoryName: string, docId: number, description: string, tags: string[], markdown?:File,){
        this.name = name;
        this.repositoryName = repositoryName;
        this.docId = docId;
        this.markdown = markdown ?? null;
        this.description = description;
        this.tags = tags;
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
