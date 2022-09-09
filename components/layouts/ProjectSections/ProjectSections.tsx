import React, {FC, ReactNode} from 'react';
import ByuroDescription from "./ByuroDescription";
import ProjectDescription from "./ProjectDescription";
import Logo from "../../shared/Logo/Logo";

interface ProjectSectionsProps {
    children: ReactNode | ReactNode[] | string | string[]
    hide?: boolean
    hover?: boolean
}

type ProjectSections = FC<ProjectSectionsProps> & { ByuroDescription: typeof ByuroDescription } & { ProjectDescription: typeof ProjectDescription }

const ProjectSections: ProjectSections = ({children, hover, hide}) => {
    return (
        <div className="w-full h-full flex flex-row">
            {!hide ?
                <div
                    className={`flex flex-col items-center h-screen
                        transform transition-all duration-500 ${hover ? "w-64" : "w-48"}
                        border-r border-matterhorn border-opacity-40 bg-white`}
                >
                    <Logo align={"center"}/>
                    <div className="flex flex-col items-center text-matterhorn font-medium uppercase space-y-8">

                    </div>
                </div> : null}
            {children}
        </div>
    );
};

export default ProjectSections;

ProjectSections.ByuroDescription = ByuroDescription;
ProjectSections.ProjectDescription = ProjectDescription;