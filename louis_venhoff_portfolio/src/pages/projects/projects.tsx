import ProjectThumbnail from "../../components/projectThumbnail/projectThumbnail";
import "../../styles/pages/projects/projects.css";


const Projects:React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="projects--container">
                <ProjectThumbnail />
                <ProjectThumbnail />
                <ProjectThumbnail />
                <ProjectThumbnail />
                <ProjectThumbnail />
                <ProjectThumbnail />
                <ProjectThumbnail />
            </div>
        </div>
    );
}

export default Projects;