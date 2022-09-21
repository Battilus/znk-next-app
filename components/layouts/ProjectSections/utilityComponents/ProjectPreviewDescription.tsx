import React, {FC} from 'react';
import {ProjectDescriptionData} from "../../../../types/Api/dataTypes";
import ProjectStatusRow from "./ProjectStatusRow";

interface IProps {
    description?: ProjectDescriptionData
}

const ProjectPreviewDescription: FC<IProps> = ({description}) => {
    return (
        <div className="w-full h-full flex flex-col justify-between min-w-48">
            <div>
                <div className="w-full h-px bg-matterhorn mb-1.5"/>
                <div className="uppercase text-matterhorn leading-18p font-medium text-sm text-justify">
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