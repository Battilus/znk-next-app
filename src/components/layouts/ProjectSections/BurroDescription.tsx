import React, { FC, ReactNode, useEffect, useState } from 'react';
import DownloadIcon from '../../../../public/svg/download-arrow.svg';
import ProjectSections from './ProjectSections';
import { useDebounce } from '../../../features/hooks/useDebounce';
import Button from '../../shared/Button/Button';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { PRESENTATION_LINK } from '../../../assets/constants';

interface DescriptionProps {
  children?: ReactNode | string;
  descriptionText?: string | ReactNode;
  hide?: boolean;
  disableBorder?: boolean;
}

const BurroDescription: FC<DescriptionProps> = ({ children, descriptionText, hide, disableBorder }) => {
  const [ debouncedDescription, setDebouncedDescription ] = useState<string | ReactNode>('');
  const descriptionUpdate = useDebounce((description: string | ReactNode) => setDebouncedDescription(description), 200);

  const { locale } = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    if (hide) {
      descriptionUpdate.cancel();
      setDebouncedDescription('');
    } else if (descriptionText) {
      descriptionUpdate.bounce(descriptionText);
    }
  }, [ hide, descriptionText, setDebouncedDescription ]);

  return (
    <ProjectSections
      className={`${hide ? 'w-0' : 'w-64 2xl:w-17.78v'} py-4 2xl:py-[1.11vw]`}
      border={disableBorder ? !disableBorder : !hide}
    >
      <div
        className={`px-4 2xl:px-[1.11vw] h-full w-full min-w-48 2xl:min-w-13.33v transition-opacity duration-300 
                    ${!hide && debouncedDescription ? 'opacity-100' : 'opacity-0'} 
                    items-center text-matterhorn uppercase 
                    font-medium leading-18p 2xl:leading-1.25v text-justify
                    text-[0.76rem] 2xl:text-[0.84vw]
                    space-y-6`}
      >
        {debouncedDescription}
      </div>

      {children &&
        <div className="h-full w-full px-4 2xl:px-[1.11vw]">
          {children}
        </div>}

      <div className={`h-full w-full px-5 2xl:px-[1.39vw] flex flex-col items-center justify-end transition-opacity duration-300
                       ${!hide && debouncedDescription ? 'opacity-100' : 'opacity-0'}`}>
        {!hide &&
          <Button.Link
            href={PRESENTATION_LINK}
            isBlank={true}
            styleType="rounded"
            className="w-full border border-matterhorn"
            childrenClassName="w-full flex items-center justify-center gap-2 2xl:gap-0.42v"
          >
            <div className="text-xs 2xl:text-0.83v font-semibold text-center leading-15.42p 2xl:leading-1.07v">
              {t('actionButtons.presentation')}
            </div>

            <DownloadIcon className="w-3 2xl:w-0.83v h-2.4 2xl:h-0.63v -mt-[0.14rem] 2xl:-mt-[0.16vw]"/>
          </Button.Link>}
      </div>
    </ProjectSections>
  );
};

export default BurroDescription;


// ${locale === 'en' ?
//   'text-sm 2xl:text-0.97v'
//   : 'text-[0.76rem] 2xl:text-[0.84vw]'}