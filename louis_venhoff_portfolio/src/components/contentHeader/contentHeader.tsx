import React from "react";
import "../../styles/components/contentHeader.css";
import { Button, IconButton } from "@chakra-ui/react";
import { HiChevronLeft } from "react-icons/hi";

type ContentHeaderProps = {
    children: React.ReactNode;
}


const ContentHeader:React.FC<ContentHeaderProps> = ({children}: ContentHeaderProps) => {
    return(
        <div className="content-header--main">
            <div className="flex items-start">
                <IconButton size="xl" backgroundColor="#242424">
                    <HiChevronLeft />
                </IconButton>
                {children}
            </div>
            
        </div>
    );
}

export default ContentHeader;