import React, {FC} from 'react';
import ProjectSections from "./ProjectSections";
import {BffFilterParam, ProjectDescriptionData, ProjectsCategoriesTag} from "../../../types/Api/dataTypes";
import ProjectPreviewDescription from "./utilityComponents/ProjectPreviewDescription";
import FilterTagsSelector from "../../utility/FilterTagsSelector";
import {useTranslation} from "next-i18next";

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
    const {t} = useTranslation();
    return (
        <ProjectSections.LogoInf
            hover={hover}
            staticWidth
            onLeaveChildren={
                <div className="w-full h-full flex flex-col justify-end">
                    <div className="w-full flex flex-col justify-between gap-[3.25rem] 2xl:gap-[3.61vw]">
                        <FilterTagsSelector
                            title={t("projects_filters.services")}
                            bffParams={bffParams?.bffServices}
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                        />
                        <FilterTagsSelector
                            title={t("projects_filters.assignment")}
                            bffParams={bffParams?.bffAssignments}
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                        />
                        <FilterTagsSelector
                            title={t("projects_filters.year")}
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