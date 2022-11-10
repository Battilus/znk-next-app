import React from 'react';
import {NextPage} from "next";
import PageWrapper from "../../components/PageWrapper";
import ProjectSections from "../../components/layouts/ProjectSections/ProjectSections";
import {ProjectDescriptionType} from "../../components/layouts/ProjectSections/ProjectDescription";
import {ProjectDescriptionData} from "../../types/Api/dataTypes";
import {IProjectsPath} from "../api/project/[id]";

const projects: ProjectDescriptionType[] = [
    {
        _id: 1,
        title: "общественное пространство «среда»",
        text: `Эстетически брутализм вписывается в контекст европейского модернизма 1950—1970-х годов (в сфере пластических искусств — в кино, фотографии, графике, скульптуре, оформлении интерьеров) — с его поисками новых средств выразительности. Это, в частности, интерес к локальному цвету, пластичной броской «модернистской» форме, остро-выразительным фактурам. Декларативной лёгкости и приглаженности «интернационального стиля» брутализм противопоставил впечатляющую мощь конструкций и объёмов, смелые крупномасштабные композиционные решения. Например, одна из популярных тем у бруталистов, часто используемая в проектах административных и общественных зданий — это ступенчатая пирамида, перевёрнутая основанием вверх и приподнятая над землёй на пилонах (Посольство Великобритании в Риме, 1971 г., архитектор сэр Бэзил Спенс; Бостон Сити Холл, Бостон, Массачусетс, США, 1981, архитекторы: Г. Кальман, М. Мак-Киннель, Э. Ноулс и другие).
        Подобные идеи вдохновлялись верой в новые строительные технологии, в частности, в неисследованные ещё возможности такого нового строительного материала, как армированный бетон. Пластичность бетона, его «скульптурные» возможности были едва ли не главным элементом художественного языка у архитекторов-необруталистов.`,
        appointment: "общественное пространство",
        location: "санкт-петербург",
        yearOfBuild: "2020",
        status: "проектирование",
        description: "",
        images: [],
    }
]

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
    const response = await fetch(`/api/project/${params.id}`);
    const project = await response.json();

    return {
        props: {
            project
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    const response = await fetch('/api/all-projects');
    const projects: ProjectDescriptionData[] = await response.json();

    const paths: IProjectsPath = projects.map(project => ({params: {id: project._id}}))

    return {paths, fallback: "blocking"}
}

export default Project;