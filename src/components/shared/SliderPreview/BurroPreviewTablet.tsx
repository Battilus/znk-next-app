import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode | string;
  title: string;
  bgImage: string;
  contentAlign?: 'end' | 'center' | 'start';
  titleColor?: string;
}

enum AlignContent {
  start = 'justify-start',
  center = 'justify-center',
  end = 'justify-end'
}

const BurroPreviewTablet: FC<IProps> = ({ children, title, bgImage, contentAlign = 'center', titleColor = 'text-white' }) => {
  return (
    <div className={`w-full h-dvh ${bgImage} bg-no-repeat bg-center bg-cover basis-auto`}>
      <div className="h-full px-9 pt-[2.625rem] pb-20 flex flex-col">
        <div className={`${titleColor} font-medium uppercase text-sl leading-21.5`}>
          {title}
        </div>
        <div className={`h-full flex flex-col items-center ${AlignContent[contentAlign]}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BurroPreviewTablet;