import { Badge, Button, Card, Image } from "@chakra-ui/react";
import { JSX } from "react";
import useRedirect, { PageType } from "../../hooks/useRedirect";

type ProjectThumbnailProps = {
    name: string,
    tags: string[],
    description?: string,
    imagePath: string,
    projectId: number,

};

const ProjectThumbnail:React.FC<ProjectThumbnailProps> = ({name, tags, description, imagePath, projectId}) => {

    const redirect = useRedirect();

    const generateTags = ():JSX.Element[] => {
        return tags.map((tag:string) => <Badge maxW="sm" backgroundColor="#242424" color="teal">{tag}</Badge>);
    }

    const redirectToProject = () => {
        redirect(PageType.PROJECT_SHOW, projectId);
    }
    
    return (
        <Card.Root maxW="sm" overflow="hidden" variant="elevated" color="teal" backgroundColor="#171717">
            <Card.Body>
                <Image src={imagePath} alt="Image can not be loaded!"/>
                    <Card.Title mt="3" mb="1">
                        {name}
                    </Card.Title>
                <div className="flex flex-wrap justify-start gap-2">
                    {generateTags()}
                </div>
               <Card.Description textStyle="xl" font-weight="medium" mt="2">
                    {description}
               </Card.Description>
            </Card.Body>
            <Card.Footer>
                <Button variant="solid" backgroundColor="teal" color="white" onClick={() => {redirectToProject()}}>
                    Zum Projekt
                </Button>
            </Card.Footer>
        </Card.Root>
    ); 
}

export default ProjectThumbnail;