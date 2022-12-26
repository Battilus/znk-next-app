import type {GetStaticProps, NextPage} from 'next'
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import React, {useCallback, useEffect, useState} from "react";
import ProjectPreview from "../components/shared/SliderPreview/ProjectPreview";
import ShowProjectSlider from "../components/layouts/ProjectSections/utilityComponents/ShowProjectSlider";
import {ProjectDescriptionData} from "../types/Api/dataTypes";
import ProjectPreviewDescription
    from "../components/layouts/ProjectSections/utilityComponents/ProjectPreviewDescription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {projectsList} from "../app/mock/fakeData";
import {useTranslation} from "next-i18next";

interface IProps {
    previewProjects: ProjectDescriptionData[]
}

const Home: NextPage<IProps> = ({previewProjects}) => {
    const [hover, setHover] = useState<boolean>(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

    const {t} = useTranslation();

    const hoverHandler = useCallback((val: boolean, index: number | null) => {
        setHover(val);
        setSelectedProjectIndex(index);
    }, []);

    useEffect(() => {
        if (!hover) {
            setSelectedProjectIndex(null);
        }
    }, [hover]);

    return (
        <PageWrapper title={"ZNK App"} description={"Main page"} isHomeLocation hideHomeButton={hover}>
            <div className="flex">
                <div className="flex">
                    <ProjectSections.LogoInf hover={hover}>
                        <ProjectPreviewDescription description={selectedProjectIndex !== null ? previewProjects[selectedProjectIndex] : undefined}/>
                    </ProjectSections.LogoInf>
                    <ProjectSections.BurroDescription
                        hide={hover}
                        descriptionText={
                            <>
                                <p>{t("pages.main.burroDescription.text_p1")}</p>
                                <p>{t("pages.main.burroDescription.text_p2")}</p>
                            </>
                        }
                    />
                </div>
                <div className="w-full h-full flex !mr-8">
                    {previewProjects.map((project, index) =>
                        <ProjectPreview
                            key={project._id}
                            href={`/project/${project._id}`}
                            name={project.title}
                            imgSrc={project.images[0].src}
                            hover={hover}
                            setHover={(val) => hoverHandler(val, index)}
                            disableBorder={previewProjects.length - 1 === index}
                        />
                    )}
                </div>
                <ShowProjectSlider/>
            </div>
        </PageWrapper>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {

    const previewProjects = projectsList.filter(project => project.hasOwnProperty("mainPagePreview") && project.mainPagePreview);

    return {
        props: {
            previewProjects: previewProjects.length > 3 ? previewProjects.slice(0, 3) : previewProjects,
            ...(await serverSideTranslations(locale || "", ["common"])),
        },
        revalidate: 10,
    }
}

export default Home
