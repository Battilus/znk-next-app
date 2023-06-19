import React, { FC } from 'react';
import ProjectSections from './ProjectSections';
import ProjectPreviewDescription from './utilityComponents/ProjectPreviewDescription';
import FilterTagsSelector from '../../utility/FilterTagsSelector';
import { useTranslation } from 'next-i18next';
import { Project } from '../../../api/entities/project/types/client';
import { BffTag } from '../../../api/entities/bffTags/types/client';
import { SelectedFilterParam } from '../../../pages/projects';
import { BffTagsQueryKey } from '../../../api/constants';

interface IProps {
  hover?: boolean;
  project: Project | null;
  bffParams?: {
    bffServices: BffTag[]
    bffPurposes: BffTag[]
    bffBuildYears: BffTag[]
  };
  selectedFilter: SelectedFilterParam;
  setSelectedFilter?: (val: SelectedFilterParam) => void;
}

const ProjectsFilter: FC<IProps> = ({ hover, project, bffParams, selectedFilter, setSelectedFilter }) => {
  const { t } = useTranslation();

  return (
    <ProjectSections.LogoInf
      hover={hover}
      staticWidth={true}
      onLeaveChildren={
        <div className="w-full h-full flex flex-col justify-end">
          <div className="w-full flex flex-col justify-between gap-[3.25rem] 2xl:gap-[3.61vw]">
            <FilterTagsSelector
              title={t('projects_filters.services')}
              type={BffTagsQueryKey.Services}
              bffParams={bffParams?.bffServices}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />

            <FilterTagsSelector
              title={t('projects_filters.assignment')}
              type={BffTagsQueryKey.Purposes}
              bffParams={bffParams?.bffPurposes}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />

            <FilterTagsSelector
              title={t('projects_filters.year')}
              type={BffTagsQueryKey.BuildYears}
              bffParams={bffParams?.bffBuildYears}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
        </div>
      }
    >
      <ProjectPreviewDescription project={project}/>
    </ProjectSections.LogoInf>
  );
};

export default ProjectsFilter;