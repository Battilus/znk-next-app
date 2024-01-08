import React, { FC, ReactNode, useState } from 'react';
import { useDebounce } from '../../../features/hooks/useDebounce';

interface IProps {
  children: ReactNode | string;
  title: string;
  titleTextColor?: string;
  hoverTitleTextColor?: string;
  bgImage?: string;
  hover?: boolean;
  setHover: (hover: boolean) => void;
  disableBorder?: boolean;
  hoverClassName?: string;
}

const BurroPreview: FC<IProps> = (
  {
    children,
    title, titleTextColor, hoverTitleTextColor,
    bgImage,
    hover,
    setHover,
    disableBorder,
    hoverClassName,
  }) => {
  const debounce = useDebounce((callback) => callback(), 200);
  const [ currentHover, setCurrentHover ] = useState<boolean>(false);
  const [ enHover, setEnHover ] = useState<boolean>(true);
  const [ showContent, setShowContent ] = useState<boolean>(false);

  const onHover = () => {
    if (!hover) {
      debounce.bounce(() => setShowContent(true));
      if (enHover) {
        setHover(true);
        setCurrentHover(true);
        setEnHover(false);
      }
    }
  };

  const onLeave = () => {
    setShowContent(false);
    if (!enHover) {
      setHover(false);
      setCurrentHover(false);
      debounce.bounce(() => {
        setEnHover(true);
      });
    }
  };

  const selectWidthOnHover = () => {
    if (hover) {
      return currentHover ? 'w-full flex basis-auto' : 'w-13.75v';
    }

    return 'w-full';
  };

  const selectTextColor = () => {
    if (titleTextColor && hoverTitleTextColor) {
      return currentHover ? `${hoverTitleTextColor}` : `${titleTextColor}`;
    }

    return titleTextColor || 'text-matterhorn';
  };

  return (
    <div
      className={`h-dvh ${!disableBorder ? 'border-r border-matterhorn' : ''} 
                  transition-width duration-200 min-w-13.75v
                  ${selectWidthOnHover()}`}
    >
      <div
        className="w-full h-full overflow-x-hidden"
        onMouseEnter={onHover}
        onMouseMove={onHover}
        onMouseLeave={onLeave}
      >
        <div
          className={`relative w-full h-full transition-all duration-300 
                                    ${bgImage} ${currentHover ? 'grayscale-0' : `grayscale ${hoverClassName}`} 
                                    bg-no-repeat bg-center bg-cover`}
        >
          <div className="px-5 2xl:px-[1.39vw] py-4.5 2xl:py-[1.25vw] w-full h-full flex flex-col">
            <div className={`font-medium uppercase transition-all duration-200
                            ${hover ? 'text-sl 2xl:text-1.18v leading-21.5 2xl:leading-1.51v' : 'text-4xl 2xl:text-2.5v leading-46.26 2xl:leading-3.21v'}
                            ${selectTextColor()}`}
            >
              {title}
            </div>
            <div className="h-full flex flex-col items-center justify-center">
              {showContent &&
                <div className={`w-full h-full transition-opacity duration-200 
                                ${showContent ? 'opacity-100' : 'opacity-0'}`}>
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
