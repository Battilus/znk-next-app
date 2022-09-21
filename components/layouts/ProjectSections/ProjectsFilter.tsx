import React, {FC} from 'react';
import ProjectSections from "./ProjectSections";
import ProjectStatusRow from "./utilityComponents/ProjectStatusRow";
import {ProjectDescriptionData, ProjectsCategoriesTag} from "../../../types/Api/dataTypes";
import {Transition} from "@headlessui/react";
import ProjectPreviewDescription from "./utilityComponents/ProjectPreviewDescription";

interface IProps {
    hover?: boolean
    description?: ProjectDescriptionData
    categoriesTags?: ProjectsCategoriesTag[]
    selectedTags?: ProjectsCategoriesTag[]
    selectTag?: (selected: ProjectsCategoriesTag) => void
}

const ProjectsFilter: FC<IProps> = ({hover, description, categoriesTags, selectedTags}) => {
    return (
        <ProjectSections.LogoInf
            hover={hover}
            staticWidth
            onLeaveChildren={
                <div className="w-full h-full flex flex-col justify-between">
                    <div>
                        Tags
                    </div>
                </div>
            }
        >
            <ProjectPreviewDescription description={description}/>
        </ProjectSections.LogoInf>
    );
};

export default ProjectsFilter;