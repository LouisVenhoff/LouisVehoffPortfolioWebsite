import React, { JSX, useEffect, useRef} from "react";
import * as motion from "motion/react-client";
import { useAnimation } from "motion/react";
import { Badge } from "@chakra-ui/react";
import Doc from "../../classes/doc";
import "../../styles/components/tagDisplayStyle.css";

type TagDisplayProps = {
    currentDoc: Doc;
}


const TagDisplay:React.FC<TagDisplayProps> = ({currentDoc}) => {

    const tagsDiv:Ref<HTMLElement> = useRef<HTMLElement>(null);

    const animationController = useAnimation();

    useEffect(() => {
        // setupAnimation((currentDoc?.tags.length ?? 0) > 5);
    }, [currentDoc]);
    
    const calculateTagsDivSize = (badges: JSX.Element[]) => {
        
        if(!tagsDiv) return;

        let divSize:number = 0;

        badges.forEach((_) => {
            divSize += 50;
        });

        tagsDiv.current!.style.width = `${divSize}px`;
    }

    const renderTags = ():JSX.Element[] => {
        if(!currentDoc) return [];

        // let tagBadges:JSX.Element[] = currentDoc.tags.map((tag, index) => {
        //     return <Badge key={index} maxW="sm" backgroundColor="#000000" color="teal">{tag}</Badge>
        // });

        let badges:JSX.Element[] = [];

        const visibleTagCount = currentDoc.tags.length < 5 ? currentDoc.tags.length : 5;
        
        for(let i = 0; i < visibleTagCount; i++){
            badges.push(<Badge key={i} maxW="sm" backgroundColor="#000000" color="teal">{currentDoc.tags[i]}</Badge>);
        }

        let hiddenTagCount: number = currentDoc.tags.length - visibleTagCount;

        badges.push(<p className="tag-display--hidden-tag-count">{`+${hiddenTagCount}`}</p>);

        // calculateTagsDivSize(badges);

        return badges;

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
        <div className="flex flex-row">
            <div ref={tagsDiv}>
                <motion.div animate={animationController} transition={{repeat: Infinity, duration: 30, ease: "linear"}} className="flex gap-2">
                    {renderTags()}
                </motion.div>
            </div>
        </div>
    );

}

export default TagDisplay;