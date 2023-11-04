import React, { FC, useCallback, useEffect, useState } from 'react';
import ProjectSections from '../ProjectSections/ProjectSections';
import ProjectPreviewDescription from '../ProjectSections/utilityComponents/ProjectPreviewDescription';
import MainProjectPreview from './MainProjectPreview';
import ShowProjectSlider from '../ProjectSections/utilityComponents/ShowProjectSlider';
import { TFunction } from 'i18next';
import { Project } from '../../../api/entities/project/types/client';

interface IProps {
  previewProjects: Project[];
  t: TFunction<'translation', undefined>;
  hover: boolean;
  setHover: (val: boolean) => void;
}

const DesktopWrapper: FC<IProps> = ({ previewProjects, t, hover, setHover }) => {
  const [ selectedProjectIndex, setSelectedProjectIndex ] = useState<number | null>(null);

  const hoverHandler = useCallback((val: boolean, index: number | null) => {
    setHover(val);
    setSelectedProjectIndex(index);
  }, [setHover]);

  useEffect(() => {
    if (!hover) {
      setSelectedProjectIndex(null);
    }
  }, [ hover ]);

  const renderDescriptionText = () => {
    const extraDirection = t('pages.main.burroDescription.desktop.mainDirections.d7');

    return (
      <div>
        <div className="flex flex-col gap-4">
          <div>{t('pages.main.burroDescription.desktop.text_p1')}</div>
          <div>{t('pages.main.burroDescription.desktop.text_p2')}</div>
          <div>{t('pages.main.burroDescription.desktop.text_p3')}</div>
        </div>

        <div className="mt-8">
          <div>{t('pages.main.burroDescription.desktop.mainDirections.title')}</div>
          <ul className="font-medium mt-3">
            <li>- {t('pages.main.burroDescription.desktop.mainDirections.d1')}</li>
            <li>- {t('pages.main.burroDescription.desktop.mainDirections.d2')}</li>
            <li>- {t('pages.main.burroDescription.desktop.mainDirections.d3')}</li>
            <li>- {t('pages.main.burroDescription.desktop.mainDirections.d4')}</li>
            <li>- {t('pages.main.burroDescription.desktop.mainDirections.d5')}</li>
            <li>- {t('pages.main.burroDescription.desktop.mainDirections.d6')}</li>
            {extraDirection && <li>- {extraDirection}</li>}
          </ul>
        </div>
      </div>
    )
  }

  const renderProjects = () => {
    return (
      <MainProjectPreview
        previewProjects={previewProjects}
        hover={hover}
        hoverHandler={hoverHandler}
      />
    );
  }

  return (
    <div className="flex">
      <div className="flex">
        <ProjectSections.LogoInf hover={hover}>
          <ProjectPreviewDescription
            project={selectedProjectIndex !== null ? previewProjects[selectedProjectIndex] : null}/>
        </ProjectSections.LogoInf>
        <ProjectSections.BurroDescription
          hide={hover}
          descriptionText={renderDescriptionText()}
        />
      </div>
      {renderProjects()}
      <ShowProjectSlider/>
    </div>
  );
};

export default DesktopWrapper;