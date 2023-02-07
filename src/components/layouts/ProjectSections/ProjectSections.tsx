import React, {FC, ReactNode} from 'react';
import BurroDescription from "./BurroDescription";
import ProjectDescription from "./ProjectDescription";
import LogoInf from './LogoInf';
import ProjectsFilter from './ProjectsFilter';
import BurroDescriptionMobile from './BurroDescriptionMobile';

interface ProjectSectionsProps {
    children?: ReactNode | string
    className?: string
    border?: boolean
}

type ProjectSections =
    FC<ProjectSectionsProps>
    & { LogoInf: typeof LogoInf }
    & { BurroDescription: typeof BurroDescription }
    & { BurroDescriptionMobile: typeof BurroDescriptionMobile }
    & { ProjectDescription: typeof ProjectDescription }
    & { ProjectsFilter: typeof ProjectsFilter }

const ProjectSections: ProjectSections = ({children, className, border}) => {
    return (
        <div
            className={`flex flex-col items-center h-screen
                        transform transition-width duration-200 ${className}
                        ${border ? "border-r border-matterhorn" : ""} bg-whiteSmoke`}
        >
            {children}
        </div>
    );
};

export default ProjectSections;

ProjectSections.LogoInf = LogoInf;
ProjectSections.BurroDescription = BurroDescription;
ProjectSections.BurroDescriptionMobile = BurroDescriptionMobile;
ProjectSections.ProjectDescription = ProjectDescription;
ProjectSections.ProjectsFilter = ProjectsFilter;
