import "../../styles/pages/home/home.css";
import avatar from "../../assets/louis.png";

const Home:React.FC = () => {
    return(
    <div className="absolute flex justify-center items-center w-full h-full">
        <div className="home--content">
            <div className="home--introduction">
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
            <div className="home--avatar">
               <img src={avatar} />
            </div>
        </div>
    </div>);
}

export default Home;