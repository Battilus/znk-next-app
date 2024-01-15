import React, { FC } from 'react';
import { firstLetterCapitalize } from '../../../../features/utils';

interface IProps {
  title?: string | null;
  status?: string | number;
  isWhite?: boolean;
  fontSizeClassName?: string;
  withoutDivider?: boolean;
}

const ProjectStatusRow: FC<IProps> = ({ title, status, isWhite, fontSizeClassName, withoutDivider }) => {
  if (!title || !(status || typeof status === 'number')) {
    return null;
  }

  return (
    <div className="w-full">
      {!withoutDivider && <div className={`w-full h-px 2xl:h-[0.07vw] ${isWhite ? 'bg-white' : 'bg-matterhorn'} mb-1.5 2xl:mb-0.42v`}/>}
      <div className={`w-full flex flex-row justify-between ${isWhite ? 'text-white' : 'text-matterhorn'} ${fontSizeClassName || 'text-xs 2xl:text-0.83v 2xl:leading-1.11v'} text-justify`}>
        {title && <div className={`${fontSizeClassName || 'leading-17p 2xl:leading-1.18v'}`}>{firstLetterCapitalize(title)}</div>}
        {status && <div className={`uppercase ${fontSizeClassName || 'leading-17p 2xl:leading-1.18v'} font-medium`}>{status}</div>}
      </div>
    </div>
  );
};

export default ProjectStatusRow;