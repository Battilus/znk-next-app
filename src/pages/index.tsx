import type {GetServerSideProps, NextPage} from 'next'
import PageWrapper from "../components/PageWrapper";
import React, {useState} from "react";
import {ProjectDescriptionData} from "../types/Api/dataTypes";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {projectsList} from "../app/mock/fakeData";
import {useTranslation} from "next-i18next";
import MobileWrapper from "../components/layouts/mainPage/MobileWrapper";
import DesktopWrapper from "../components/layouts/mainPage/DesktopWrapper";
import {PageMeta} from "../types";
import NoProjectsWrapper from "../components/layouts/noProjects/NoProjectsWrapper";

interface IProps {
    meta: PageMeta
    previewProjects: ProjectDescriptionData[]
}

const Home: NextPage<IProps> = ({meta, previewProjects}) => {
    const [hover, setHover] = useState<boolean>(false);

    const {t} = useTranslation();

    return (
        <PageWrapper
            meta={meta}
            isHomeLocation
            hideHomeButton={hover}
            screenBreakpoints
        >
            {({breakpoints: {mobileSm: iPhone}, screens: {tablet}}) =>
                previewProjects.length ?
                    tablet ?
                        <MobileWrapper
                            previewProjects={previewProjects}
                            t={t}
                            alignLogo={iPhone ? "center" : "start"}
                            isPhone={iPhone}
                        /> :
                        <DesktopWrapper
                            previewProjects={previewProjects}
                            t={t}
                            hover={hover}
                            setHover={setHover}
                        />
                    : <NoProjectsWrapper t={t} isPhone={iPhone}/>
            }
        </PageWrapper>
    )
}

export const getServerSideProps: GetServerSideProps = async ({locale}) => {

    const previewProjects = projectsList.filter(project => project?.mainPagePreview && project.mainPagePreview);

    return {
        props: {
            meta: {title: "ZNK Project Burro", description: "Main page"},
            previewProjects: previewProjects.length > 3 ? previewProjects.slice(0, 3) : previewProjects,
            ...(await serverSideTranslations(locale!, ["common"])),
        }
    }
}

export default Home
