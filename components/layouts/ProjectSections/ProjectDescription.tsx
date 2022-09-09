import React, {FC, ReactNode} from 'react';
import ProjectStatusRow from "./utilityComponents/ProjectStatusRow";
import Logo from "../../shared/Logo/Logo";

export type ProjectDescriptionType = {
    title: string
    text: ReactNode | ReactNode[] | string | string[]
    appointment: string
    location: string
    yearOfBuild: string | number
    status: string
}

interface IProjectDescriptionProps {
    children?: ReactNode | ReactNode[] | string | string[]
    description?: ProjectDescriptionType
    hide?: boolean
}

const ProjectDescription: FC<IProjectDescriptionProps> = ({children, description, hide}) => {
    return (
        <div className="w-full h-screen flex flex-row">
            {!hide ?
                <div
                    className={`flex flex-col items-center h-full w-98.5 px-7 pt-4 pb-6
                        transform transition-all duration-500
                        border-r border-matterhorn border-opacity-40 bg-white`}
                >
                    <Logo align={"start"}/>
                    <div className="flex flex-col w-full h-full">
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
                </div> : null}
            {children}
        </div>
    );
};

export default ProjectDescription;