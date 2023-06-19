import React, { FC, useCallback, useEffect, useState } from 'react';
import ProjectSections from '../ProjectSections/ProjectSections';
import ProjectPreviewDescription from '../ProjectSections/utilityComponents/ProjectPreviewDescription';
import MainProjectPreview from './MainProjectPreview';
import ShowProjectSlider from '../ProjectSections/utilityComponents/ShowProjectSlider';
import { TFunction } from 'i18next';
import { Project } from '../../../api/entities/project/types/client';
import LoadingScreen from '../../shared/Loader/LoadingScreen';

interface IProps {
  previewProjects: Project[];
  t: TFunction<'translation', undefined, 'translation'>;
  hover: boolean;
  setHover: (val: boolean) => void;
  isLoading?: boolean;
}

const DesktopWrapper: FC<IProps> = ({ previewProjects, t, hover, setHover, isLoading }) => {
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

  const renderProjects = () => {
    if (isLoading) {
      return (
        <LoadingScreen/>
      )
    }

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
          descriptionText={
            <>
              <p>{t('pages.main.burroDescription.desktop.text_p1')}</p>
              <p>{t('pages.main.burroDescription.desktop.text_p2')}</p>
            </>
          }
        />
      </div>
      {renderProjects()}
      <ShowProjectSlider/>
    </div>
  );
};

export default DesktopWrapper;