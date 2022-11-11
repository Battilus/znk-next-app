import React, {useCallback, useEffect, useState} from 'react';
import {NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import {ProjectDescriptionData} from "../types/Api/dataTypes";
import ProjectPreview from "../components/layouts/ProjectSections/utilityComponents/ProjectPreview";

interface IProps {
    projects: ProjectDescriptionData[]
}

const Projects: NextPage<IProps> = ({projects}) => {
    const [hover, setHover] = useState<boolean>(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

    const hoverHandler = useCallback((val: boolean, index: number | null) => {
        setHover(val);
        setSelectedProjectIndex(index);
    }, []);

    useEffect(() => {
        if (!hover) {
            setSelectedProjectIndex(null);
        }
    }, [hover])

    return (
        <PageWrapper title={"ZNK App"} description={"Projects page"}>
            <div className="flex flex-row">
                <div className="flex">
                    <ProjectSections.ProjectsFilter
                        hover={hover}
                        description={selectedProjectIndex !== null ? projects[selectedProjectIndex] : undefined}
                    />
                </div>
                <div className="w-full h-full flex flex-row overflow-x-auto">
                    {projects.map((project, index) =>
                        <ProjectPreview
                            key={project._id}
                            href={`/project/${project._id}`}
                            name={project.title}
                            imgSrc={project.images[0].src}
                            hover={hover}
                            setHover={(val) => hoverHandler(val, index)}
                        />
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};

export const getStaticProps = async () => {

    const response = await fetch(`${process.env.API_URL}/api/all-projects`);
    const projects = await response.json();

    return {
        props: {
            projects
        },
        revalidate: 10,
    }
}

export default Projects;