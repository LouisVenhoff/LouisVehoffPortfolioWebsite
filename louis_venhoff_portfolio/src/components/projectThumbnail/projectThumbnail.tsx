import { Badge, Button, Card, Image, Text } from "@chakra-ui/react";
import "../../styles/components/projectThumbnail.css";

const ProjectThumbnail:React.FC = () => {
    return (
        // <div className="project-thumbnail--main">
        //     <img src="https://picsum.photos/500/300" />
        //     <div className="project-thumbnail--name-banner">
        //         <h2>Auto Portfolio</h2>
        //     </div>
        // </div>
        <Card.Root maxW="sm" overflow="hidden" variant="elevated" color="teal" backgroundColor="#171717">
            <Card.Body>
                <Image src="https://picsum.photos/500/300" alt="Error"/>
                <Card.Title mt="2">
                    Automatic Portfolio
                </Card.Title>
                <div className="flex justify-start gap-2">
                    <Badge maxW="sm" backgroundColor="#242424" color="teal">
                        javascript
                    </Badge>
                    <Badge maxW="sm" backgroundColor="#242424" color="teal">
                        React
                    </Badge>
                    <Badge maxW="sm" backgroundColor="#242424" color="teal">
                        .Net Core
                    </Badge>
                </div>
               <Card.Description>
                    <Text textStyle="xl" font-weight="medium" mt="2">
                        Ein Entwicklerportfolio was über Markdown files im jeweiligen Entwicklungsprojekt verwaltet wird
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