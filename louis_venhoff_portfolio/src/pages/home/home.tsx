import CommitHeatmap from "../../components/commitHeatmap/commitHeatmap";
import "../../styles/pages/home/home.css";
import avatar from "../../assets/louis.png";
import { Button } from "@chakra-ui/react";
import useRedirect, {PageType} from "../../hooks/useRedirect";

const Home: React.FC = () => {
  
     const redirectToProjectsPage = () => {
          redirect(PageType.PROJECTS_INDEX);
     }

     const redirect = useRedirect();
  
     return (
     <>
          <div className="flex justify-center items-center w-full h-full overflow-hidden">
               <div className="home--content">
               <div className="home--introduction">
                    <div className="home-introduction--heading">
                    <span>
                    Hi, <br /> i'm{" "}
                    <span className="home-introduction-heading--focus-name">
                         {" "}
                         {" Louis \r\n"} <br />{" "}
                    </span>{" "}
                    FullStack Developer
                    </span>
                    </div>
                    <div className="home--github-activity"> 
                         <CommitHeatmap />
                    </div>
               </div>
               <div className="home--avatar">
                    <img src={avatar} className="home-avatar--image" width="500px" />
               </div>
               <div className="home--projects-link">
                    <Button onClick={redirectToProjectsPage} size="xl" width={window.screen.width - 100} color="white" variant="solid" backgroundColor="teal">
                         My projects
                    </Button>
               </div>
               </div>
          </div>
     </>
  );
};

export default Home;
