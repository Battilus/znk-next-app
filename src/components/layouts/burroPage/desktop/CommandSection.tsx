import React, { FC } from 'react';
import { TFunction } from 'i18next';
import Button from '../../../shared/Button/Button';
import BurroPreview from '../../../shared/SliderPreview/BurroPreview';
import { VACANCIES_LINK } from '../../../../assets/constants';
import Hint from '../../../shared/Hint';

interface IProps {
  hover: boolean,
  setHover: (v: boolean) => void,
  t: TFunction<'translation', undefined, 'translation'>,
}

const CommandSection: FC<IProps> = ({ hover, setHover, t }) => {
  return (
    <BurroPreview
      title={t('pages.burro.command.title')}
      titleTextColor="text-gray-800"
      hoverTitleTextColor="text-white"
      bgImage="bg-burro_command_hover"
      hover={hover}
      setHover={setHover}
      hoverClassName="brightness-125"
    >
      <>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="relative w-full h-full">

            <Hint positionClassName="absolute bottom-[35.89%] left-[26.86%]">
              <p className="text-sm 2xl:text-[0.97vw] 2xl:leading-[1.39vw] font-medium">
                {t('pages.burro.command.employees.e2.title')}
              </p>
              <p>{t('pages.burro.command.employees.e2.p1')}</p>
              <p>{t('pages.burro.command.employees.e2.p2')}</p>
            </Hint>

            <Hint positionClassName="absolute top-[47.07%] right-[28.86%]" placement="LB">
              <p className="text-sm 2xl:text-[0.97vw] 2xl:leading-[1.39vw] font-medium">
                {t('pages.burro.command.employees.e1.title')}
              </p>
              <p>{t('pages.burro.command.employees.e1.p1')}</p>
              <p>{t('pages.burro.command.employees.e1.p2')}</p>
            </Hint>

          </div>
        </div>
        <Button.Link
          styleType="rounded"
          className="absolute bottom-5 2xl:bottom-1.39v left-5 2xl:left-1.39v font-medium"
          href={VACANCIES_LINK}
          isBlank={true}
        >
          {t('pages.burro.command.buttonLink.title')}
        </Button.Link>
      </>
    </BurroPreview>
  );
};

export default CommandSection;