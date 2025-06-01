import { Badge, Button, Card, Image, Text } from "@chakra-ui/react";
import "../../styles/components/projectThumbnail.css";
import { JSX } from "react";

type ProjectThumbnailProps = {
    name: string,
    tags: string[],
    description?: string,
    imagePath: string,
    projectId: number,

};

const ProjectThumbnail:React.FC<ProjectThumbnailProps> = ({name, tags, description, imagePath, projectId}) => {
    
    const generateTags = ():JSX.Element[] => {
        return tags.map((tag:string) => <Badge maxW="sm" backgroundColor="#242424" color="teal">{tag}</Badge>);
    }
    
    return (
        <Card.Root maxW="sm" overflow="hidden" variant="elevated" color="teal" backgroundColor="#171717">
            <Card.Body>
                <Image src={imagePath} alt="Image can not be loaded!"/>
                <Card.Title mt="2">
                    {name}
                </Card.Title>
                <div className="flex flex-wrap justify-start gap-2">
                    {generateTags()}
                </div>
               <Card.Description>
                    <Text textStyle="xl" font-weight="medium" mt="2">
                        {description}
                    </Text>
               </Card.Description>
            </Card.Body>
            <Card.Footer>
                <Button variant="solid" backgroundColor="teal" color="white">
                    Zum Projekt
                </Button>
            </Card.Footer>
        </Card.Root>
    ); 
}

export default ProjectThumbnail;