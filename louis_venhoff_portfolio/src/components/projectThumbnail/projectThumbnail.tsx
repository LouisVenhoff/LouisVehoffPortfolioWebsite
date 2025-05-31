import "../../styles/components/projectThumbnail.css";

const ProjectThumbnail:React.FC = () => {
    return (
        <div className="project-thumbnail--main">
            <img src="https://picsum.photos/500/300" />
            <div className="project-thumbnail--name-banner">
                <h2>Auto Portfolio</h2>
            </div>
        </div>
    ); 
}

export default ProjectThumbnail;