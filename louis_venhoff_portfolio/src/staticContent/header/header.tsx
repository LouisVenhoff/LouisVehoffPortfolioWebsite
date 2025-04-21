import React, {JSX, ReactNode, useEffect, useState} from "react";
import "../../styles/staticContent/header.css";
import { Button, Drawer, Portal } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

type HeaderProps = {
    children:ReactNode,
}


const Header:React.FC<HeaderProps> = ({ children }) => {
        
    return(
        <>
        <div className="header--main">
            <div className="header--title">
                <h1>Louis Venhoff</h1>
            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="header--actions">
                    {children}
                </div>
                <div className="header-actions--underline" />
            </div>
        </div>
        <div className="header--drawer">
            <Drawer.Root placement="start">
                <Drawer.Trigger asChild>
                    <Button variant="plain" color="teal">
                        <GiHamburgerMenu />        
                    </Button>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content backgroundColor="black">
                            <Drawer.Header>
                                <Drawer.Title>
                                    Menu
                                </Drawer.Title>
                            </Drawer.Header>
                            <Drawer.Body>
                                {children}
                            </Drawer.Body>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </div>
        </>
    );
}

export default Header;