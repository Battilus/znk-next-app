import React, {memo, useState} from 'react';
import {GetStaticProps, NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import {CERTIFICATES} from "../assets/staticParams";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {CertificateCardType} from "../types";
import PhilosophySection from "../components/layouts/burroPage/PhilosophySection";
import CommandSection from "../components/layouts/burroPage/CommandSection";
import AchievementsSection from "../components/layouts/burroPage/AchievementsSection";


interface IProps {
    certificates: CertificateCardType[]
}
const Burro: NextPage<IProps> = ({certificates}) => {

    const [hover, setHover] = useState<boolean>(false);

    const {t} = useTranslation();

    return (
        <PageWrapper title={"ZNK App"} description={"Burro page"}>
            <div className="flex">
                <div className="flex">
                    <ProjectSections.LogoInf/>
                </div>
                <div className="w-full h-full flex">
                    <PhilosophySection
                        hover={hover}
                        setHover={setHover}
                        t={t}
                    />
                    <CommandSection
                        hover={hover}
                        setHover={setHover}
                        t={t}
                    />
                    <AchievementsSection
                        certificates={certificates}
                        hover={hover}
                        setHover={setHover}
                        t={t}
                    />
                </div>
            </div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            certificates: CERTIFICATES,
            ...(await serverSideTranslations(locale!, ["common"])),
        },
    }
}
export default memo(Burro);
