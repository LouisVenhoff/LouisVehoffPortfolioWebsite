
type NavButtonProps = {
    title: String;
    target: string;
};

const NavButton:React.FC<NavButtonProps> = ({title, target}) => {
    
    return(
        <a href={target}>{title}</a>
    );
};

export default NavButton;