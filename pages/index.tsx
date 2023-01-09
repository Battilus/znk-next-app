import type {GetStaticProps, NextPage} from 'next'
import PageWrapper from "../components/PageWrapper";
import React, {useState} from "react";
import {ProjectDescriptionData} from "../types/Api/dataTypes";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {projectsList} from "../app/mock/fakeData";
import {useTranslation} from "next-i18next";
import MobileWrapper from "../components/layouts/mainPage/MobileWrapper";
import DesktopWrapper from "../components/layouts/mainPage/DesktopWrapper";

interface IProps {
    previewProjects: ProjectDescriptionData[]
}

const Home: NextPage<IProps> = ({previewProjects}) => {
    const [hover, setHover] = useState<boolean>(false);

    const {t} = useTranslation();

    return (
        <PageWrapper title={"ZNK App"} description={"Main page"} isHomeLocation hideHomeButton={hover} screenBreakpoints>
            {({breakpoints: {mobileSm: iPhone}, screens: {tablet}}) =>
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
            }
        </PageWrapper>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {

    const previewProjects = projectsList.filter(project => project.hasOwnProperty("mainPagePreview") && project.mainPagePreview);

    return {
        props: {
            previewProjects: previewProjects.length > 3 ? previewProjects.slice(0, 3) : previewProjects,
            ...(await serverSideTranslations(locale!, ["common"])),
        },
        revalidate: 10,
    }
}

export default Home
