import CommitHeatmap from "../../components/commitHeatmap/commitHeatmap";
import "../../styles/pages/home/home.css";
import avatar from "../../assets/louis.png";

const Home: React.FC = () => {
  return (
    <>
     <div className="flex justify-center items-center w-full h-full">
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
               <CommitHeatmap />
          </div>
          <div className="home--avatar">
               <img src={avatar} className="home-avatar--image" width="500px" />
          </div>
          </div>
     </div>
    </>
  );
};

export default Home;
