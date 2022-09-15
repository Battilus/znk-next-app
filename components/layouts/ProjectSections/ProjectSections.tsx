import React, {FC, ReactNode} from 'react';
import ByuroDescription from "./ByuroDescription";
import ProjectDescription from "./ProjectDescription";
import LogoInf from './LogoInf';
import ProjectsFilter from './ProjectsFilter';

interface ProjectSectionsProps {
    children?: ReactNode | ReactNode[] | string | string[]
    className?: string
    hide?: boolean
    border?: boolean
}

type ProjectSections =
    FC<ProjectSectionsProps>
    & { LogoInf: typeof LogoInf }
    & { ByuroDescription: typeof ByuroDescription }
    & { ProjectDescription: typeof ProjectDescription }
    & { ProjectsFilter: typeof ProjectsFilter }

const ProjectSections: ProjectSections = ({children, className, hide, border}) => {
    return (
        <>
            <div className="flex flex-row">
                <div
                    className={`flex flex-col items-center h-screen
                                transform transition-all duration-300 ${className}
                                ${border ? "border-r border-matterhorn" : ""} bg-white`}
                >
                    {children}
                </div>
            </div>
        </>
    );
};

export default ProjectSections;

ProjectSections.LogoInf = LogoInf;
ProjectSections.ByuroDescription = ByuroDescription;
ProjectSections.ProjectDescription = ProjectDescription;
ProjectSections.ProjectsFilter = ProjectsFilter;
