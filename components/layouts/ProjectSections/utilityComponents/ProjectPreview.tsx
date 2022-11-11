import React, {FC, useEffect, useState} from 'react';
import {useDebounce} from "../../../../features/hooks/useDebounce";
import Image from "next/image";
import A from "../../../shared/Link/A";

interface IProps {
    name?: string
    imgSrc?: string
    href?: string
    description?: string
    hover?: boolean
    setHover: (hover: boolean) => void
    disableBorder?: boolean
}

const ProjectPreview: FC<IProps> = ({name, imgSrc, href, description, hover, setHover, disableBorder}) => {
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

    //max-w-886
    return (
        <A
            className={`h-screen ${!disableBorder ? "border-r border-matterhorn" : ""} transition-width duration-300 min-w-34
                        ${hover && !currentHover ? "w-34" : hover && currentHover ? "projectSliderHover" : "projectSlider"}`}
            href={href}
        >
            <div
                className={`slideItem w-full h-full overflow-x-hidden transition-all duration-300 ${currentHover ? "bg-white bg-opacity-100" : `bg-matterhorn bg-opacity-40`}`}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                {imgSrc &&
                    <div className="relative w-886 h-full">
                        <Image src={imgSrc} alt={name} layout="fill" quality={100}/>
                    </div>}
            </div>
        </A>
    );
};

export default ProjectPreview;