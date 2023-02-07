import React, {FC} from 'react';
import ProjectSections from "./ProjectSections";
import {BffFilterParam, ProjectDescriptionData, ProjectsCategoriesTag} from "../../../types/Api/dataTypes";
import ProjectPreviewDescription from "./utilityComponents/ProjectPreviewDescription";
import FilterTagsSelector from "../../utility/FilterTagsSelector";

interface IProps {
    hover?: boolean
    description?: ProjectDescriptionData
    categoriesTags?: ProjectsCategoriesTag[]
    selectedTags?: ProjectsCategoriesTag[]
    selectTag?: (selected: ProjectsCategoriesTag) => void
    bffParams?: {
        bffServices: BffFilterParam[]
        bffAssignments: BffFilterParam[]
        bffYearsOfBuilds: BffFilterParam[]
    }
    selectedFilter?: string
    setSelectedFilter?: (val: string) => void
}

const ProjectsFilter: FC<IProps> = ({hover, description, bffParams, selectedFilter, setSelectedFilter}) => {
    return (
        <ProjectSections.LogoInf
            hover={hover}
            staticWidth
            onLeaveChildren={
                <div className="w-full h-full flex flex-col justify-end">
                    <div className="w-full flex flex-col justify-between gap-[52px]">
                        <FilterTagsSelector
                            bffParams={bffParams?.bffServices}
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                        />
                        <FilterTagsSelector
                            bffParams={bffParams?.bffAssignments}
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                        />
                        <FilterTagsSelector
                            bffParams={bffParams?.bffYearsOfBuilds}
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                        />
                    </div>
                </div>
            }
        >
            <ProjectPreviewDescription description={description}/>
        </ProjectSections.LogoInf>
    );
};

export default ProjectsFilter;