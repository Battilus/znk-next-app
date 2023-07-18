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

            <Hint positionClassName="absolute bottom-[16.875rem] 2xl:bottom-[35.89%] left-[220px] 2xl:left-[26.86%]">
              <p>Основатель АБ «Знак: проект», дизайн-студии «Знак: пресс». Имеет большой опыт работы в сфере архитектуры, градостроительства и дизайна в качестве руководителя проектной группы: мастер-планов развития территорий (в том числе объектов ЮНЕСКО), архитектурно-градостроительных концепций, проектов планировки территории, проектов зон охраны объектов культурного наследия.</p>

              <p>Ведёт научно-исследовательскую и образовательную деятельность в области архитектуры в вузах Санкт-Петербурга.</p>
            </Hint>

            <Hint positionClassName="absolute top-[23.125rem] 2xl:top-[47.07%] right-[220px] 2xl:right-[28.86%]" placement="LB">
              <p>Основатель АБ «Знак: проект», дизайн-студии «Знак: пресс». Имеет большой опыт работы в сфере архитектуры, градостроительства и дизайна в качестве руководителя проектной группы: мастер-планов развития территорий (в том числе объектов ЮНЕСКО), архитектурно-градостроительных концепций, проектов планировки территории, проектов зон охраны объектов культурного наследия.</p>

              <p>Ведёт научно-исследовательскую и образовательную деятельность в области архитектуры в вузах Санкт-Петербурга.</p>
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