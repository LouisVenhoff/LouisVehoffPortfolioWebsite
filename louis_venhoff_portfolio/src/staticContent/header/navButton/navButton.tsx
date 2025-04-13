import "../../../styles/staticContent/header.css";

type NavButtonProps = {
    title: String;
    target: string;
};

const NavButton:React.FC<NavButtonProps> = ({title, target}) => {
    
    return(
        <div className="header-nav-button--background">
            <a href={target}>{title}</a>
        </div>
    );
};

export default NavButton;