import React, {FC} from 'react';
import Button from "../shared/Button/Button";
import {BffFilterParam} from "../../types/Api/dataTypes";

interface IProps {
    bffParams?: BffFilterParam[]
    selectedFilter?: string
    setSelectedFilter?: (val: string) => void
}

const FilterTagsSelector: FC<IProps> = ({bffParams, selectedFilter, setSelectedFilter}) => {

    const selectHandler = (filterParam: string) => {
        if (setSelectedFilter) {
            setSelectedFilter(selectedFilter === filterParam ? "" : filterParam);
        }
    };

    return (
        <>
            {bffParams?.length &&
                <div className="flex flex-col gap-3.5">
                    <div className="text-matterhorn uppercase font-medium text-sm leading-18p 2xl:text-0.97v 2xl:leading-1.25v">Услуги</div>
                    <div className="flex flex-wrap gap-[5px]">
                        {bffParams.map(filterTag =>
                            <Button
                                key={filterTag}
                                styleType="rounded"
                                onClick={() => selectHandler(filterTag)}
                                isActive={filterTag === selectedFilter}
                                activeClassName="bg-matterhorn text-whiteSmoke"
                                roundedPadding="px-[7px] pt-[3px] pb-[2px]"
                            >
                                {filterTag}
                            </Button>)}
                    </div>
                </div>
            }
        </>
    );
};

export default FilterTagsSelector;