import React, { FC, useCallback, useEffect, useState } from 'react';
import ProjectSections from '../ProjectSections/ProjectSections';
import ProjectPreviewDescription from '../ProjectSections/utilityComponents/ProjectPreviewDescription';
import MainProjectPreview from './MainProjectPreview';
import ShowProjectSlider from '../ProjectSections/utilityComponents/ShowProjectSlider';
import { ProjectDescriptionData } from '../../../types/Api/dataTypes';
import { TFunction } from 'i18next';

interface IProps {
  previewProjects: ProjectDescriptionData[];
  t: TFunction<'translation', undefined, 'translation'>;
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

  return (
    <div className="flex">
      <div className="flex">
        <ProjectSections.LogoInf hover={hover}>
          <ProjectPreviewDescription
            description={selectedProjectIndex !== null ? previewProjects[selectedProjectIndex] : undefined}/>
        </ProjectSections.LogoInf>
        <ProjectSections.BurroDescription
          hide={hover}
          descriptionText={
            <>
              <p>{t('pages.main.burroDescription.desktop.text_p1')}</p>
              <p>{t('pages.main.burroDescription.desktop.text_p2')}</p>
            </>
          }
        />
      </div>
      <MainProjectPreview
        previewProjects={previewProjects}
        hover={hover}
        hoverHandler={hoverHandler}
      />
      <ShowProjectSlider/>
    </div>
  );
};

export default DesktopWrapper;