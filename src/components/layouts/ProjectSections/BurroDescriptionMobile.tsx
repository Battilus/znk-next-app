import React, { FC, ReactNode } from 'react';

interface DescriptionProps {
  descriptionText?: string | ReactNode;
}

const BurroDescriptionMobile: FC<DescriptionProps> = ({ descriptionText }) => {
  return (
    <div className="flex flex-col justify-end">
      <div className="font-semibold text-matterhorn uppercase text-base sm:text-sm leading-[1.285rem] sm:leading-18p
                      text-justify space-y-6">
        {descriptionText}
      </div>
    </div>
  );
};

export default BurroDescriptionMobile;