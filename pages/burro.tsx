import React, {useMemo, useState} from 'react';
import {NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import BurroPreview from '../components/shared/SliderPreview/BurroPreview';
import DoubleSlashIcon from '../public/svg/double-slash.svg';
import Button from "../components/shared/Button/Button";
import CertificateCard from "../components/utility/CertificateCard";
import {CertificateCardType} from '../types';

const Burro: NextPage = () => {

    const [hover, setHover] = useState<boolean>(false);
    const certificates: CertificateCardType[] = useMemo(() => ([
        {
            id: 1,
            title: "сертификат pega",
            logo: {
                img: "/achievements/pega.png",
                width: 66,
                height: 53,
            },
            certificateHref: "/",
        },
        {
            id: 2,
            title: "сертификат pega",
            logo: {
                img: "/achievements/pega.png",
                width: 66,
                height: 53,
            },
            certificateHref: "/",
        },
        {
            id: 3,
            title: "сертификат Lifecycle",
            logo: {
                img: "/achievements/lifecycle.png",
                width: 66,
                height: 65,
            },
            certificateHref: "/",
        },
        {
            id: 4,
            title: "сертификат Lifecycle",
            logo: {
                img: "/achievements/lifecycle.png",
                width: 66,
                height: 65,
            },
            certificateHref: "/",
        },
        {
            id: 5,
            title: "премия build architecture",
            logo: {
                img: "/achievements/build_architecture.png",
                width: 66,
                height: 46,
            },
            certificateHref: "/",
        },
        {
            id: 6,
            title: "премия build architecture",
            logo: {
                img: "/achievements/build_architecture.png",
                width: 66,
                height: 46,
            },
            certificateHref: "/",
        },
        {
            id: 7,
            title: "премия architecture",
            logo: {
                img: "/achievements/architecture.png",
                width: 66,
                height: 74.33,
            },
            certificateHref: "/",
        },
        {
            id: 8,
            title: "премия architecture",
            logo: {
                img: "/achievements/architecture.png",
                width: 66,
                height: 74.33,
            },
            certificateHref: "/",
        },
    ]), []);

    return (
        <PageWrapper title={"ZNK App"} description={"Burro page"}>
            <div className="flex">
                <div className="flex">
                    <ProjectSections.LogoInf/>
                </div>
                <div className="w-full h-full flex">
                    <BurroPreview
                        title={"философия"}
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
                                <div>«Знак: проект» — архитектурное бюро, работающее в области градостроительства,
                                    архитектуры, консалтинга и дизайна из Санкт- Петербурга. Мы уверены, комплексный
                                    подход к архитектуре и градостроительству — основа устойчивого развития, соединяя
                                    качество, разнообразие, экологию и эсте-тическую ценность застройки.
                                </div>
                                <div>Наша команда сосредоточена на вдумчивом и эффективном творческом процессе, для
                                    создания идеальных пространств для наших клиентов. Мы ценим людей, с которыми
                                    работаем. Уважение, честность и профессионализм руководят нами в нашей повседневной
                                    работе.
                                </div>
                            </div>
                            <DoubleSlashIcon/>
                        </div>
                    </BurroPreview>
                    <BurroPreview
                        title={"команда"}
                        titleTextColor={"text-matterhorn"}
                        hoverTitleTextColor={"text-white"}
                        bgImage={"bg-buro_command_hover_2"}
                        hover={hover}
                        setHover={setHover}
                        hoverClassName={"brightness-75"}
                    >
                        <>
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <div className="relative w-full h-full">
                                    <div
                                        className={`w-6 h-6 bg-white rounded-full hover:bg-yellow-200 absolute top-[20rem] left-[14.3rem]`}/>
                                    <div
                                        className={`w-6 h-6 bg-white rounded-full hover:bg-yellow-200 absolute top-[30.5rem] left-[9rem]`}/>
                                    <div
                                        className={`w-6 h-6 bg-white rounded-full hover:bg-yellow-200 absolute top-[17rem] right-[16.6rem]`}/>
                                    <div
                                        className={`w-6 h-6 bg-white rounded-full hover:bg-yellow-200 absolute bottom-[11.5rem] right-[4.4rem]`}/>
                                </div>
                            </div>
                            <Button.Link
                                styleType={"rounded"}
                                className="absolute bottom-5 left-5 font-medium"
                                href="/"
                            >
                                вакансии
                            </Button.Link>
                        </>
                    </BurroPreview>
                    <BurroPreview
                        title={"достижения"}
                        bgImage={"bg-buro_achievements_hover"}
                        hover={hover}
                        setHover={setHover}
                        hoverClassName={"brightness-75"}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full max-w-[38.56rem] h-full max-h-[26rem] grid grid-cols-2 gap-8">
                                {certificates.map(certificate =>
                                    <CertificateCard
                                        key={certificate.id}
                                        title={certificate.title}
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

export default Burro;