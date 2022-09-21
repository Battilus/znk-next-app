import React, {FC, ReactNode} from 'react';
import ProjectStatusRow from "./utilityComponents/ProjectStatusRow";
import Logo from "../../shared/Logo/Logo";
import ProjectSections from "./ProjectSections";
import {ProjectDescriptionData} from "../../../types/Api/dataTypes";

export type ProjectDescriptionType = ProjectDescriptionData & {
    text: ReactNode | ReactNode[] | string | string[]
    appointment: string
}

interface IProjectDescriptionProps {
    description?: ProjectDescriptionType
}

const ProjectDescription: FC<IProjectDescriptionProps> = ({description}) => {
    return (
        <>
            <ProjectSections
                className={`w-98.5 px-7 pb-6`}
                border
            >
                <div className="flex flex-col w-full h-full">
                    <Logo align={"start"}/>
                    <div className="w-full flex flex-col">
                        <div className="w-full h-px bg-matterhorn mb-1.5"/>
                        <div className="uppercase text-matterhorn leading-18p font-medium text-sm text-justify">
                            {description?.title}
                        </div>
                    </div>
                    <div className="h-full my-9 text-matterhorn text-xs leading-13p font-normal text-justify">
                        {description?.text}
                    </div>
                    <div className="w-full h-full flex flex-col justify-end items-end space-y-3">
                        <ProjectStatusRow title={"назначение"} status={description?.appointment}/>
                        <ProjectStatusRow title={"место"} status={description?.location}/>
                        <ProjectStatusRow title={"год"} status={description?.yearOfBuild}/>
                        <ProjectStatusRow title={"статус"} status={description?.status}/>
                    </div>
                </div>
            </ProjectSections>
        </>
    );
};

export default ProjectDescription;