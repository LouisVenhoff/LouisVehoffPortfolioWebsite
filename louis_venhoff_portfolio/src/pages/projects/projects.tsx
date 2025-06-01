import ProjectThumbnail from "../../components/projectThumbnail/projectThumbnail";
import "../../styles/pages/projects/projects.css";


const Projects:React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="projects--container">
                <ProjectThumbnail name="TestEintrag" description="Ein testeintrag für dieses Portfolio" tags={["Tag1", "Tag2", "Tag3", "Tag4", "hasdjashkdajshd", "hajasdkhas"]} imagePath={""} projectId={0}/>
            </div>
        </div>
    );
}

export default Projects;