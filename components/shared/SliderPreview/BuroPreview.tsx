import React, {FC, ReactNode, useState} from 'react';
import {useDebounce} from "../../../features/hooks/useDebounce";
import Image from "next/image";

interface IProps {
    children: ReactNode | ReactNode[] | string | string[]
    name?: string
    imgSrc?: string
    hoverImg?: string
    hover?: boolean
    setHover: (hover: boolean) => void
    disableBorder?: boolean
    widthDuration?: number
    brightness?: number
    contrast?: number
    enGrayscale?: boolean
}

const BuroPreview: FC<IProps> = ({
                                     children,
                                     name,
                                     imgSrc,
                                     hoverImg,
                                     hover,
                                     setHover,
                                     disableBorder,
                                     widthDuration = 200,
                                     brightness,
                                     contrast,
                                     enGrayscale
                                 }) => {
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
        <div
            className={`h-screen ${!disableBorder ? "border-r border-matterhorn" : ""} 
                        transition-width duration-${widthDuration} min-w-198
                        ${hover && !currentHover ? "w-198" : hover && currentHover ? "w-full flex basis-auto" : "w-full"}`}
        >
            <div
                className={`slideItem w-full h-full overflow-x-hidden`}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                {imgSrc &&
                    <div className={`relative w-full h-full ${currentHover ? `${hoverImg}` : `${imgSrc}`} bg-no-repeat bg-center bg-cover`}>
                        <div className="w-full h-full">
                            {children}
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default BuroPreview;
