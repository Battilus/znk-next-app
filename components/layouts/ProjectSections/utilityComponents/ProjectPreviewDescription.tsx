import React, {FC} from 'react';
import {ProjectDescriptionData} from "../../../../types/Api/dataTypes";
import ProjectStatusRow from "./ProjectStatusRow";

interface IProps {
    description?: ProjectDescriptionData
}

const ProjectPreviewDescription: FC<IProps> = ({description}) => {
    return (
        <div className="w-full h-full flex flex-col justify-between min-w-48 2xl:min-w-13.33v">
            <div>
                <div className="w-full h-px bg-matterhorn mb-1.5 2xl:mb-0.42v"/>
                <div className="uppercase text-matterhorn leading-18p 2xl:leading-1.25v font-medium text-sm 2xl:text-0.97v text-justify">
                    {description?.title}
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-end items-end space-y-3">
                <ProjectStatusRow status={description?.location}/>
                <ProjectStatusRow status={description?.yearOfBuild}/>
                <ProjectStatusRow status={description?.status}/>
            </div>
        </div>
    );
};

export default ProjectPreviewDescription;