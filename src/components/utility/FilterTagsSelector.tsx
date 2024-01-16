import React, { FC } from 'react';
import Button from '../shared/Button/Button';
import { BffTag } from '../../api/entities/bffTags/types/client';
import { SelectedFilterParam } from '../../pages/projects';
import { BffTagsQueryKey } from '../../api/constants';

interface IProps {
  title: string;
  type: BffTagsQueryKey;
  bffParams?: BffTag[];
  selectedFilter: SelectedFilterParam;
  setSelectedFilter?: (val: SelectedFilterParam) => void;
  isInverseColor?: boolean;
}

const FilterTagsSelector: FC<IProps> = ({ title, type, bffParams, selectedFilter, setSelectedFilter, isInverseColor }) => {

  const selectHandler = (filterParam: BffTag) => {
    setSelectedFilter?.({
      type,
      tag: filterParam,
    });
  };

  if (!bffParams || bffParams.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col ${isInverseColor ? 'gap-4' : 'gap-3.5 2xl:gap-0.97v'}`}>
      <div
        className={`${isInverseColor ? 'text-whiteSmoke' : 'text-matterhorn'} uppercase font-medium ${isInverseColor ? 'text-sl' : 'text-sm leading-18p 2xl:text-0.97v 2xl:leading-1.25v'}`}>{title}</div>
      <div className="flex flex-wrap gap-[0.3125rem] 2xl:gap-[0.35vw]">
        {bffParams.map(filterTag => {
          const isActive = filterTag === selectedFilter.tag && type == selectedFilter.type;

          return (
            <Button
              key={filterTag}
              styleType="rounded"
              onClick={() => selectHandler(filterTag)}
              isActive={isActive}
              className={!isActive ? `border ${isInverseColor ? 'border-silver !bg-neonGray text-silver' : 'border-matterhorn text-matterhorn'}` : ''}
              activeClassName={isInverseColor ? '!border-whiteSmoke !bg-whiteSmoke !text-matterhorn' : '!bg-matterhorn !text-whiteSmoke'}
              roundedPadding={isInverseColor ? 'px-[1rem] pt-[0.25rem] pb-[0.125rem]' :
                'px-[0.4375rem] 2xl:px-[0.49vw] pt-[0.1875rem] 2xl:pt-[0.21vw] pb-[0.125rem] 2xl:pb-[0.14vw]'}
            >
              <div className={isInverseColor ? 'text-sm' : 'text-[0.625rem] 2xl:text-[0.69vw] leading-[0.8125rem] 2xl:leading-0.9v'}>
                {filterTag}
              </div>
            </Button>
          )
        })}
      </div>
    </div>
  );
};

export default FilterTagsSelector;