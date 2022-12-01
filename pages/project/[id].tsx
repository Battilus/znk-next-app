import React from 'react';
import {NextPage} from "next";
import PageWrapper from "../../components/PageWrapper";
import ProjectSections from "../../components/layouts/ProjectSections/ProjectSections";
import {ProjectDescriptionType} from "../../components/layouts/ProjectSections/ProjectDescription";
import {projectsList} from "../../app/mock/fakeData";

type IProjectsPath = {
    params: {
        id: string | number
    }
}[];
interface IProps {
    project: ProjectDescriptionType
}

const Project: NextPage<IProps> = ({project}) => {
    return (
        <PageWrapper title={"ZNK Project"} description={"Project description"}>
            <ProjectSections.ProjectDescription
                description={project}
            />
        </PageWrapper>
    );
};

export const getStaticProps = async ({params}: any) => {
    return {
        props: {
            project: projectsList.find(project => project._id === params.id)
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    const paths: IProjectsPath = projectsList.map(project => ({params: {id: project._id}}))

    return {paths, fallback: "blocking"}
}

export default Project;