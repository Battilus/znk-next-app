import React, {useCallback, useState} from 'react';
import {NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import BuroPreview from '../components/shared/SliderPreview/BuroPreview';
import DoubleSlachIcon from '../public/svg/double-slash.svg';
import Button from "../components/shared/Button/Button";
import Image from "next/image";

const Buro: NextPage = () => {

    const [hover, setHover] = useState<boolean>(false);
    const [currentHover, setCurrentHover] = useState<number>(-1);

    const hoverHandler = useCallback((val: boolean, index: number) => {
        setHover(val);
        setCurrentHover(val ? index : -1);
    }, []);

    return (
        <PageWrapper title={"ZNK App"} description={"Buro page"}>
            <div className="flex">
                <div className="flex">
                    <ProjectSections.LogoInf/>
                </div>
                <div className="w-full h-full flex">
                    <BuroPreview
                        name={"философия"}
                        imgSrc={"bg-buro_philosophy"}
                        hoverImg={"bg-buro_philosophy_hover"}
                        hover={hover}
                        setHover={(val) => hoverHandler(val, 0)}
                        widthDuration={300}
                    >
                        <div className="px-5 py-4.5 w-full h-full">
                            <div className={`font-normal uppercase 
                                            ${hover ? "text-sl leading-21.5" : "text-4xl leading-46.26"}
                                            ${currentHover === 0 ? "text-white" : "text-matterhorn"}
                                            `}
                            >философия</div>
                            {currentHover === 0 &&
                                <div className="w-full h-full flex flex-col items-center justify-center gap-5">
                                    <DoubleSlachIcon/>
                                    <div className="w-2/4 flex flex-col items-center gap-10 uppercase text-white text-sm leading-18p text-justify">
                                        <div>«Знак: проект» — архитектурное бюро, работающее в области градостроительства, архитектуры, консалтинга и дизайна из Санкт- Петербурга. Мы уверены, комплексный подход к архитектуре и градостроительству — основа устойчивого развития, соединяя качество, разнообразие, экологию и эсте-тическую ценность застройки.</div>
                                        <div>Наша команда сосредоточена на вдумчи-вом и эффективном творческом процессе, для создания идеальных пространств для наших клиентов. Мы ценим людей, с которыми работаем. Уважение, честность  и профессионализм руководят нами в нашей повседневной работе.</div>
                                    </div>
                                    <DoubleSlachIcon/>
                                </div>}
                        </div>
                    </BuroPreview>
                    <BuroPreview
                        name={"команда"}
                        imgSrc={"bg-buro_command"}
                        hoverImg={"bg-buro_command_hover"}
                        hover={hover}
                        setHover={(val) => hoverHandler(val, 1)}
                        widthDuration={300}
                    >
                        <div className="px-5 py-4.5 w-full h-full">
                            <div
                                className={`font-normal uppercase 
                                            ${hover ? "text-sl leading-21.5" : "text-4xl leading-46.26"}
                                            ${currentHover === 1 ? "text-white" : "text-matterhorn"}
                                            `}
                            >команда</div>
                            {currentHover === 1 &&
                                <>
                                    <div className="w-full h-full flex flex-col items-center justify-center">
                                        <div className="relative w-full h-full">
                                            <div className={`w-6 h-6 bg-white rounded-full hover:bg-yellow-200 absolute top-[20rem] left-[14.3rem]`}/>
                                            <div className={`w-6 h-6 bg-white rounded-full hover:bg-yellow-200 absolute top-[30.5rem] left-[9rem]`}/>
                                            <div className={`w-6 h-6 bg-white rounded-full hover:bg-yellow-200 absolute top-[17rem] right-[16.6rem]`}/>
                                            <div className={`w-6 h-6 bg-white rounded-full hover:bg-yellow-200 absolute bottom-[11.5rem] right-[4.4rem]`}/>
                                        </div>
                                    </div>
                                    <Button.Link
                                        styleType={"rounded"}
                                        className="absolute bottom-5 left-5"
                                        href="/"
                                    >вакансии</Button.Link>
                                </>}
                        </div>
                    </BuroPreview>
                    <BuroPreview
                        name={"достижения"}
                        imgSrc={"bg-buro_achievements"}
                        hoverImg={"bg-buro_achievements_hover"}
                        hover={hover}
                        setHover={(val) => hoverHandler(val, 2)}
                        widthDuration={300}
                    >
                        <div className="px-5 py-4.5 w-full h-full">
                            <div className={`font-normal uppercase 
                                            ${hover ? "text-sl leading-21.5" : "text-4xl leading-46.26"}
                                            text-matterhorn
                                            `}
                            >достижения</div>
                            {currentHover === 2 &&
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-full max-w-[38.56rem] h-full max-h-[26rem] grid grid-cols-2 gap-8">
                                        <div className="flex items-center gap-3.5">
                                            <Image src={"/achievements/pega.png"} width={66} height={53}/>
                                            <div className="flex flex-col items-start text-sm leading-18p gap-1.5">
                                                <div className="uppercase">сертификат pega</div>
                                                <div className="capitalize">открыть</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3.5">
                                            <Image src={"/achievements/pega.png"} width={66} height={53}/>
                                            <div className="flex flex-col items-start text-sm leading-18p gap-1.5">
                                                <div className="uppercase">сертификат pega</div>
                                                <div className="capitalize">открыть</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3.5">
                                            <Image src={"/achievements/lifecycle.png"} width={66} height={65}/>
                                            <div className="flex flex-col items-start text-sm leading-18p gap-1.5">
                                                <div className="uppercase">сертификат Lifecycle</div>
                                                <div className="capitalize">открыть</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3.5">
                                            <Image src={"/achievements/lifecycle.png"} width={66} height={65}/>
                                            <div className="flex flex-col items-start text-sm leading-18p gap-1.5">
                                                <div className="uppercase">сертификат Lifecycle</div>
                                                <div className="capitalize">открыть</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3.5">
                                            <Image src={"/achievements/build_architecture.png"} width={66} height={46}/>
                                            <div className="flex flex-col items-start text-sm leading-18p gap-1.5">
                                                <div className="uppercase">премия build architecture</div>
                                                <div className="capitalize">открыть</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3.5">
                                            <Image src={"/achievements/build_architecture.png"} width={66} height={46}/>
                                            <div className="flex flex-col items-start text-sm leading-18p gap-1.5">
                                                <div className="uppercase">премия build architecture</div>
                                                <div className="capitalize">открыть</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3.5">
                                            <Image src={"/achievements/architecture.png"} width={66} height={74.33}/>
                                            <div className="flex flex-col items-start text-sm leading-18p gap-1.5">
                                                <div className="uppercase">премия architecture</div>
                                                <div className="capitalize">открыть</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3.5">
                                            <Image src={"/achievements/architecture.png"} width={66} height={74.33}/>
                                            <div className="flex flex-col items-start text-sm leading-18p gap-1.5">
                                                <div className="uppercase">премия architecture</div>
                                                <div className="capitalize">открыть</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </BuroPreview>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Buro;