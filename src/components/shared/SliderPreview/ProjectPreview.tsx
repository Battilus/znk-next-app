import React, { FC, useState } from 'react';
import { useDebounce } from '../../../features/hooks/useDebounce';
import Image from "next/image";
import A from '../Link/A';

interface IProps {
  name?: string;
  imgSrc?: string;
  href: string;
  hover?: boolean;
  setHover: (hover: boolean) => void;
  disableBorder?: boolean;
}

const ProjectPreview: FC<IProps> = ({ imgSrc, href, hover, setHover, disableBorder }) => {
  const debounce = useDebounce((callback) => callback(), 200);
  const [ currentHover, setCurrentHover ] = useState<boolean>(false);
  const [ enHover, setEnHover ] = useState<boolean>(true);

  const onHover = () => {
    if (enHover) {
      debounce.cancel();
      setHover(true);
      setCurrentHover(true);
      setEnHover(false);
    }
  };

  const onLeave = () => {
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
      return currentHover ? 'w-full flex basis-auto' : 'w-33.5 2xl:w-8.33v';
    }

    return 'w-full';
  };

  return (
    <A
      className={`h-dvh ${!disableBorder ? 'border-r border-matterhorn' : ''} 
                  transition-width duration-200 min-w-33.5 2xl:min-w-8.33v
                  ${selectWidthOnHover()}`}
      href={href}
    >
      <div
        className={`relative w-full h-full overflow-x-hidden object-center transition-all duration-200 
                    ${currentHover ? 'grayscale-0' : 'grayscale'}`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {imgSrc &&
          <Image
            className="object-cover"
            src={imgSrc}
            alt="test"
            quality={100}
            priority={true}
            fill={true}
            sizes="100vw" />}
      </div>
    </A>
  );
};

export default ProjectPreview;