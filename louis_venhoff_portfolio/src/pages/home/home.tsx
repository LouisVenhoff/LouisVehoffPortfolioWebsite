import CommitHeatmap from "../../components/commitHeatmap/commitHeatmap";
import "../../styles/pages/home/home.css";


const Home:React.FC = () => {
      
    return(
    <div className="absolute flex justify-center items-center w-full h-full">
        <div className="home--content">
            <div className="home--introduction">
               <div>
                    <p className="home-introduction--heading">
                         Hi, <br />
                    </p>
                    <strong className="home-introduction--heading">
                         i´m
                    </strong>
                    <strong className="home-introduction--heading home-introduction-description--focus-name">
                         {" Louis"}
                    </strong>
                    <p className="home-introduction--heading">
                         FullStack Developer <br />
                    </p>
               </div>
               <div className="mt-16">
                    <strong>
                         Github Activity:
                    </strong>
                    <div className="mt-2">
                         <div className="pl-8">
                              <CommitHeatmap />
                         </div>
                    </div>
               </div>
            </div>
            <div className="home--avatar">

            </div>
        </div>
    </div>);
}

export default Home;