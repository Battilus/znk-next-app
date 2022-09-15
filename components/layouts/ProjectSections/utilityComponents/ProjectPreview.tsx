import React, {FC} from 'react';
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
    return (
        <A
            className={`transition-all duration-300 ${hover ? "w-34 hover:w-886 hover:bg-white hover:bg-opacity-100" : "w-full"} 
                        h-screen bg-matterhorn bg-opacity-40 border-r border-matterhorn`}
            href={href}
        >
            <div
                className="w-full h-full"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {imgSrc && <Image src={imgSrc} alt="background"/>}
            </div>
        </A>
    );
};

export default ProjectPreview;