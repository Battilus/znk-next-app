import { TFunction } from 'i18next';
import React, { FC } from 'react';
import DoubleSlashIcon from '../../../../../public/svg/double-slash.svg';
import BurroPreview from '../../../shared/SliderPreview/BurroPreview';

interface IProps {
  hover: boolean,
  setHover: (v: boolean) => void,
  t: TFunction<'translation', undefined, 'translation'>,
}

const PhilosophySection: FC<IProps> = ({ hover, setHover, t }) => {
  return (
    <BurroPreview
      title={t('pages.burro.philosophy.title')}
      titleTextColor="text-gray-800"
      hoverTitleTextColor="text-white"
      bgImage="bg-burro_philosophy_hover"
      hover={hover}
      setHover={setHover}
      hoverClassName="brightness-200"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 2xl:gap-1.39v">
        <DoubleSlashIcon className="w-[27px] 2xl:w-[1.88vw] h-[33px] 2xl:h-[2.29vw]"/>

        <div
          className="w-2/4 flex flex-col items-center gap-10 2xl:gap-2.78v font-medium uppercase text-white
                     text-sm 2xl:text-0.97v leading-18p 2xl:leading-1.25v text-justify">
          <div>{t('pages.burro.philosophy.description.p1')}</div>
          <div>{t('pages.burro.philosophy.description.p2')}</div>
        </div>

        <DoubleSlashIcon className="w-[27px] 2xl:w-[1.88vw] h-[33px] 2xl:h-[2.29vw]"/>
      </div>
    </BurroPreview>
  );
};

export default PhilosophySection;