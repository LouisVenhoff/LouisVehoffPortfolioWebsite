import CommitHeatmap from "../../components/commitHeatmap/commitHeatmap";
import "../../styles/pages/home/home.css";


const Home:React.FC = () => {
      
    return(
    <div className="absolute flex justify-center items-center w-full h-full">
        <div className="home--content">
            <div className="home--introduction">
               <div className="home-introduction--heading">
                    <p>
                         Hi, <br />
                    </p>
                    <strong>
                         i´m
                    </strong>
                    <strong className="home-introduction-description--focus-name">
                         {" Louis"}
                    </strong>
                    <p>
                         FullStack Developer <br />
                    </p>
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