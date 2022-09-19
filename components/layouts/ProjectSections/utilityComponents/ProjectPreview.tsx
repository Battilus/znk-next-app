import React, {FC, useState} from 'react';
import {useDebounce} from "../../../../features/hooks/useDebounce";
import Image from "next/image";
import A from "../../../shared/Link/A";

interface IProps {
    name?: string
    imgSrc?: string
    href: string
    description?: string
    hover?: boolean
    setHover: (hover: boolean) => void
}

const ProjectPreview: FC<IProps> = ({name, imgSrc, href, description, hover, setHover}) => {
    // const debounce = useDebounce((state: boolean) => setHover(state), 100);
    const [currentHover, setCurrentHover] = useState<boolean>(false);

    const onHover = () => {
        setHover(true);
        setCurrentHover(true);
    }

    const onLeave = () => {
        setHover(false);
        setCurrentHover(false);
    }

    return (
        <A
            className={`transition-all duration-200 
                        ${hover && currentHover ? "w-886 bg-white bg-opacity-100" : "bg-matterhorn bg-opacity-40"} 
                        ${hover && !currentHover ? "w-34" : "w-full"} 
                        h-screen border-r border-matterhorn`}
            href={href}
        >
            <div
                className="w-full h-full"
                onMouseMove={onHover}
                onMouseLeave={onLeave}
            >
                {imgSrc && <Image src={imgSrc} alt="background"/>}
            </div>
        </A>
    );
};

export default ProjectPreview;