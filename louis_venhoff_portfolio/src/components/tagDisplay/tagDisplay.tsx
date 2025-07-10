import React, { JSX, useEffect, useRef} from "react";
import * as motion from "motion/react-client";
import { useAnimation } from "motion/react";
import { Badge } from "@chakra-ui/react";
import Doc from "../../classes/doc";

type TagDisplayProps = {
    currentDoc: Doc;
}


const TagDisplay:React.FC<TagDisplayProps> = ({currentDoc}) => {

    const tagsDiv:Ref<HTMLElement> = useRef<HTMLElement>(null);

    const animationController = useAnimation();

    useEffect(() => {
        setupAnimation((currentDoc?.tags.length ?? 0) > 5);
    }, [currentDoc]);
    
    const calculateTagsDivSize = (badges: JSX.Element[]) => {
        
        let divSize:number = 0;

        badges.forEach((_) => {
            divSize += 50;
        });

        tagsDiv.current!.style.width = `${divSize}px`;
    }

    const renderTags = ():JSX.Element[] => {
        if(!currentDoc) return [];

        let tagBadges:JSX.Element[] = currentDoc.tags.map((tag, index) => {
            return <Badge key={index} maxW="sm" backgroundColor="#000000" color="teal">{tag}</Badge>
        });

        calculateTagsDivSize(tagBadges);

        return tagBadges;

    }

    const setupAnimation = (enabled: boolean) => {
        if(enabled){
            animationController.start({x: ["0%", "-50%"]});
        }
        else{
            animationController.start({x: 0});
        }
    }

    return(
        <div ref={tagsDiv} className="project-header--tags">
            <motion.div animate={animationController} transition={{repeat: Infinity, duration: 30, ease: "linear"}} className="flex gap-2">
                {renderTags()}
                {renderTags()}
            </motion.div>
        </div>
    );

}

export default TagDisplay;