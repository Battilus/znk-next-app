import React, { FC } from 'react';
import FilterTagsSelector from '../../utility/FilterTagsSelector';
import { BffTagsQueryKey } from '../../../api/constants';
import { BffTag } from '../../../api/entities/bffTags/types/client';
import { SelectedFilterParam } from '../../../pages/projects';
import { TFunction } from 'i18next';

type Props = {
  bffParams?: {
    bffServices: BffTag[]
    bffPurposes: BffTag[]
    bffBuildYears: BffTag[]
  };
  selectedFilter: SelectedFilterParam;
  setSelectedFilter?: (val: SelectedFilterParam) => void;
  t: TFunction<'translation', undefined>;
}

const ProjectsFilterMobile: FC<Props> = (
  {
    bffParams,
    selectedFilter,
    setSelectedFilter,
    t,
  }) => {
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center gap-[3.25rem] 2xl:gap-[3.61vw]">
      <FilterTagsSelector
        title={t('projects_filters.services')}
        type={BffTagsQueryKey.Services}
        bffParams={bffParams?.bffServices}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        isInverseColor={true}
      />

      <FilterTagsSelector
        title={t('projects_filters.assignment')}
        type={BffTagsQueryKey.Purposes}
        bffParams={bffParams?.bffPurposes}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        isInverseColor={true}
      />

      <FilterTagsSelector
        title={t('projects_filters.year')}
        type={BffTagsQueryKey.BuildYears}
        bffParams={bffParams?.bffBuildYears}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        isInverseColor={true}
      />
    </div>
  );
};

export default ProjectsFilterMobile;