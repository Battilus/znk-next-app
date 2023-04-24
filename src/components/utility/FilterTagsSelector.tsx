import React, { FC } from 'react';
import Button from '../shared/Button/Button';
import { BffFilterParam } from '../../types/Api/dataTypes';

interface IProps {
  title: string;
  bffParams?: BffFilterParam[];
  selectedFilter?: string;
  setSelectedFilter?: (val: string) => void;
}

const FilterTagsSelector: FC<IProps> = ({ title, bffParams, selectedFilter, setSelectedFilter }) => {

  const selectHandler = (filterParam: string) => {
    if (setSelectedFilter) {
      setSelectedFilter(selectedFilter === filterParam ? '' : filterParam);
    }
  };

  if (!bffParams || bffParams.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3.5 2xl:gap-0.97v">
      <div
        className="text-matterhorn uppercase font-medium text-sm leading-18p 2xl:text-0.97v 2xl:leading-1.25v">{title}</div>
      <div className="flex flex-wrap gap-[0.3125rem] 2xl:gap-[0.35vw]">
        {bffParams.map(filterTag =>
          <Button
            key={filterTag}
            styleType="rounded"
            onClick={() => selectHandler(filterTag)}
            isActive={filterTag === selectedFilter}
            activeClassName="bg-matterhorn text-whiteSmoke"
            roundedPadding="px-[0.4375rem] 2xl:px-[0.49vw] pt-[0.1875rem] 2xl:pt-[0.21vw] pb-[0.125rem] 2xl:pb-[0.14vw]"
          >
            <div className="text-[0.625rem] 2xl:text-[0.69vw] leading-[0.8125rem] 2xl:leading-0.9v">
              {filterTag}
            </div>
          </Button>)}
      </div>
    </div>
  );
};

export default FilterTagsSelector;