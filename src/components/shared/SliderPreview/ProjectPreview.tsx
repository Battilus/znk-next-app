import React, {FC, useState} from 'react';
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
}

const ProjectPreview: FC<IProps> = ({name, imgSrc, href, hover, setHover, disableBorder}) => {
    const debounce = useDebounce((callback) => callback(), 200);
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
                        transition-width duration-200 min-w-33.5 2xl:min-w-8.33v
                        ${hover && !currentHover ? "w-33.5 2xl:w-8.33v" : hover && currentHover ? "w-full flex basis-auto" : "w-full"}`}
            href={href}
        >
            <div
                className={`relative w-full h-full overflow-x-hidden object-center transition-all duration-200 ${currentHover ? "grayscale-0" : `grayscale`}`}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                {imgSrc &&
                    <Image
                        className="object-cover"
                        src={imgSrc}
                        alt={name}
                        layout="fill"
                        quality={100}
                        priority
                    />}
            </div>
        </A>
    );
};

export default ProjectPreview;