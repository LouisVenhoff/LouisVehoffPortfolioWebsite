import CommitHeatmap from "../../components/commitHeatmap/commitHeatmap";
import "../../styles/pages/home/home.css";


const Home:React.FC = () => {
      
    return(
    <div className="absolute flex justify-center items-center w-full h-full">
        <div className="home--content">
            <div className="home--introduction">
               <div className="home-introduction--heading">
                    <span>
                         Hi, <br /> i'm <span className="home-introduction-description--focus-name"> {" Louis \r\n"} <br /> </span> FullStack Developer
                    </span>
               </div>
                    <CommitHeatmap />
               </div>
            </div>
            <div className="home--avatar">

            </div>
        </div>
    );
}

export default Home;