import underConstructionIcon from "../../assets/underConstruction.svg";

const UnderConstruction:React.FC = () => {
    
    return(
    <div className="absolute flex justify-center items-center w-full h-full">
        <div className="flex flex-col items-center gap-8">
            <img className="rotate-[45deg]" src={underConstructionIcon} width="150px" />
            <p className="text-2xl">{"Hier wird aktuell noch gearbeitet, schaue später nochmal vorbei!"}</p>
        </div>
    </div>);
}

export default UnderConstruction;
