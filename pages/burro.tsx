import React, {useState} from 'react';
import {GetStaticProps, NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import BurroPreview from '../components/shared/SliderPreview/BurroPreview';
import DoubleSlashIcon from '../public/svg/double-slash.svg';
import Button from "../components/shared/Button/Button";
import CertificateCard from "../components/utility/CertificateCard";
import {CERTIFICATES} from "../assets/staticParams";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const Burro: NextPage = () => {

    const [hover, setHover] = useState<boolean>(false);

    const {t} = useTranslation();

    return (
        <PageWrapper title={"ZNK App"} description={"Burro page"}>
            <div className="flex">
                <div className="flex">
                    <ProjectSections.LogoInf/>
                </div>
                <div className="w-full h-full flex">
                    <BurroPreview
                        title={t("pages.burro.philosophy.title")}
                        titleTextColor={"text-gray-800"}
                        hoverTitleTextColor={"text-white"}
                        bgImage={"bg-buro_philosophy_hover"}
                        hover={hover}
                        setHover={setHover}
                        hoverClassName={"brightness-200"}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center gap-5">
                            <DoubleSlashIcon/>
                            <div
                                className="w-2/4 flex flex-col items-center gap-10 font-medium uppercase text-white text-sm leading-18p text-justify">
                                <div>{t("pages.burro.philosophy.description.p1")}</div>
                                <div>{t("pages.burro.philosophy.description.p2")}</div>
                            </div>
                            <DoubleSlashIcon/>
                        </div>
                    </BurroPreview>
                    <BurroPreview
                        title={t("pages.burro.command.title")}
                        titleTextColor={"text-matterhorn"}
                        hoverTitleTextColor={"text-white"}
                        bgImage={"bg-buro_command_hover_2"}
                        hover={hover}
                        setHover={setHover}
                        hoverClassName={"brightness-75"}
                    >
                        <>
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <div className="relative w-full h-full transition-colors duration-300">
                                    <div
                                        className={`w-6 h-6 bg-whiteSmoke rounded-full hover:bg-yellow-200 absolute top-[20rem] left-[14.3rem]`}/>
                                    <div
                                        className={`w-6 h-6 bg-whiteSmoke rounded-full hover:bg-yellow-200 absolute top-[30.5rem] left-[9rem]`}/>
                                    <div
                                        className={`w-6 h-6 bg-whiteSmoke rounded-full hover:bg-yellow-200 absolute top-[17rem] right-[16.6rem]`}/>
                                    <div
                                        className={`w-6 h-6 bg-whiteSmoke rounded-full hover:bg-yellow-200 absolute bottom-[11.5rem] right-[4.4rem]`}/>
                                </div>
                            </div>
                            <Button.Link
                                styleType={"rounded"}
                                className="absolute bottom-5 left-5 font-medium"
                                href="/"
                            >
                                {t("pages.burro.buttonLink.title")}
                            </Button.Link>
                        </>
                    </BurroPreview>
                    <BurroPreview
                        title={t("pages.burro.achievements.title")}
                        bgImage={"bg-buro_achievements_hover"}
                        hover={hover}
                        setHover={setHover}
                        hoverClassName={"brightness-75"}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full max-w-[38.56rem] h-full max-h-[26rem] grid grid-cols-2 gap-8">
                                {CERTIFICATES.map(certificate =>
                                    <CertificateCard
                                        key={certificate.id}
                                        title={t(`${certificate.title}`)}
                                        logoImg={certificate.logo.img}
                                        logoWidth={certificate.logo.width}
                                        logoHeight={certificate.logo.height}
                                        certificateHref={certificate.certificateHref}
                                    />)}
                            </div>
                        </div>
                    </BurroPreview>
                </div>
            </div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "", ["common"])),
        },
    }
}
export default Burro;