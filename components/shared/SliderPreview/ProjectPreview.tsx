import React, {FC, useEffect, useState} from 'react';
import {useDebounce} from "../../../features/hooks/useDebounce";
import Image from "next/image";
import A from "../Link/A";

interface IProps {
    name?: string
    imgSrc?: string
    href: string
    description?: string
    hover?: boolean
    setHover: (hover: boolean) => void
    disableBorder?: boolean
    widthDuration?: number
}

const ProjectPreview: FC<IProps> = ({name, imgSrc, href, description, hover, setHover, disableBorder, widthDuration=150}) => {
    const debounce = useDebounce((callback) => callback(), widthDuration);
    const [currentHover, setCurrentHover] = useState<boolean>(false);
    const [enHover, setEnHover] = useState<boolean>(true);

    const onHover = () => {
        if (enHover) {
            debounce.cancel();
            setHover(true);
            setCurrentHover(true);
            setEnHover(false);
        }
    }

    const onLeave = () => {
        if (!enHover) {
            setHover(false);
            setCurrentHover(false);
            debounce.bounce(() => {
                setEnHover(true);
            })
        }
    }

    return (
        <A
            className={`h-screen ${!disableBorder ? "border-r border-matterhorn": ""} 
                        transition-width duration-${widthDuration} min-w-33.5
                        ${hover && !currentHover ? "w-33.5" : hover && currentHover ? "w-full flex basis-auto" : "w-full"}`}
            href={href}
        >
            <div
                className={`slideItem w-full h-full overflow-x-hidden transition-all duration-${widthDuration} ${currentHover ? "grayscale-0" : `grayscale`}`}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                {imgSrc &&
                    <div className="relative w-full h-full">
                        <Image className="w-full h-full object-cover object-center" src={imgSrc} alt={name} layout="fill" quality={100}/>
                    </div>}
            </div>
        </A>
    );
};

export default ProjectPreview;