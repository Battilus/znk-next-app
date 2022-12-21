import React, {FC, ReactNode, useState} from 'react';
import {useDebounce} from "../../../features/hooks/useDebounce";

interface IProps {
    children: ReactNode | string
    title: string
    titleTextColor?: string
    hoverTitleTextColor?: string
    imgSrc?: string
    bgImage?: string
    hover?: boolean
    setHover: (hover: boolean) => void
    disableBorder?: boolean
    hoverClassName?: string
}

const BurroPreview: FC<IProps> = ({
                                      children,
                                      title, titleTextColor, hoverTitleTextColor,
                                      bgImage,
                                      hover,
                                      setHover,
                                      disableBorder,
                                      hoverClassName
                                  }) => {
    const debounce = useDebounce((callback) => callback(), 200);
    const [currentHover, setCurrentHover] = useState<boolean>(false);
    const [enHover, setEnHover] = useState<boolean>(true);
    const [showContent, setShowContent] = useState<boolean>(false);

    const onHover = () => {
        debounce.bounce(() => setShowContent(true));
        if (enHover) {
            // debounce.cancel();
            setHover(true);
            setCurrentHover(true);
            setEnHover(false);
        }
    }

    const onLeave = () => {
        setShowContent(false);
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
                        transition-width duration-200 min-w-198
                        ${hover && !currentHover ? "w-198" : hover && currentHover ? "w-full flex basis-auto" : "w-full"}`}
        >
            <div
                className={`w-full h-full overflow-x-hidden`}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                <div
                    className={`relative w-full h-full transition-all duration-300 
                                    ${bgImage} ${currentHover ? "grayscale-0" : `grayscale ${hoverClassName}`} 
                                    bg-no-repeat bg-center bg-cover`}
                >
                    <div className="px-5 py-4.5 w-full h-full flex flex-col">
                        <div className={`font-medium uppercase 
                                            ${hover ? "text-sl leading-21.5" : "text-4xl leading-46.26"}
                                            ${titleTextColor && hoverTitleTextColor ?
                                            currentHover ? `${hoverTitleTextColor}` : `${titleTextColor}`
                                            : titleTextColor ? titleTextColor : "text-matterhorn"}
                                            `}
                        >
                            {title}
                        </div>
                        <div className="h-full flex flex-col items-center justify-center">
                            {showContent &&
                                <div
                                    className={`w-full h-full transition-opacity duration-100 ${showContent ? "opacity-100" : "opacity-0"}`}
                                >
                                    {children}
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurroPreview;
