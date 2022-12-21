import React, {FC, ReactNode} from 'react';
import ProjectStatusRow from "./utilityComponents/ProjectStatusRow";
import ProjectSections from "./ProjectSections";
import {ProjectDescriptionData} from "../../../types/Api/dataTypes";
import LogoLink from "../../shared/Logo/LogoLink";

export type ProjectDescriptionType = ProjectDescriptionData & {
    text: ReactNode | string
    appointment: string
}

interface IProjectDescriptionProps {
    description?: ProjectDescriptionType
}

const ProjectDescription: FC<IProjectDescriptionProps> = ({description}) => {

    const splitIndents = (text: string) => {
        return text.split('\n').map(str => <p key={str}>{str}</p>)
    }

    return (
        <>
            <ProjectSections
                className={`w-98.5 px-7 pb-6`}
                border
            >
                <div className="flex flex-col w-full h-full">
                    <LogoLink href={'/'} align={"start"}/>
                    <div className="w-full flex flex-col">
                        <div className="w-full h-px bg-matterhorn mb-1.5"/>
                        <div className="uppercase text-matterhorn leading-18p font-medium text-sm text-justify">
                            {description?.title}
                        </div>
                    </div>
                    <div className="h-full my-9 text-matterhorn text-xs leading-13p font-normal text-justify space-y-0.5">
                        {description?.description ? splitIndents(description?.description) : null}
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