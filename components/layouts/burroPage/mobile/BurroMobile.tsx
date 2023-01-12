import React, {FC, useEffect, useRef} from 'react';
import {CertificateCardType} from "../../../../types";
import {TFunction} from "i18next";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import DoubleSlashIcon from "../../../../public/svg/double-slash.svg";
import CertificateCard from "../../../utility/CertificateCard";
import BurroPreviewTablet from "../../../shared/SliderPreview/BurroPreviewTablet";
import ArrowLeftStrokeIcon from "../../../../public/svg/arrow-left-stroke.svg";
import {useRouter} from "next/router";

interface IProps {
    certificates: CertificateCardType[]
    t: TFunction<"translation", undefined, "translation">
    isMobileScreen: boolean
}

type SlidesPath = "philosophy" | "command" | "achievements"

enum SlideIndex {
    philosophy = 1,
    command = 2,
    achievements = 3
}

const BurroMobile: FC<IProps> = ({certificates, t, isMobileScreen}) => {

    const swiperExtRef = useRef<SwiperRef>(null);
    const router= useRouter();

    const slideTo = (index: number) => {
        swiperExtRef?.current?.swiper.slideTo(index - 1, 300);
    };

    useEffect(() => {
        const slideFromPath = router.asPath.split('#')[1];

        if (slideFromPath) {
            slideTo(SlideIndex[slideFromPath as SlidesPath]);
        }

    }, [router]);

    return (
        <div className="h-full w-full">
            <Swiper
                ref={swiperExtRef}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    dynamicMainBullets: 3,
                    horizontalClass: "!bottom-10",
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <BurroPreviewTablet
                        title={t("pages.burro.philosophy.title")}
                        bgImage={"bg-burro_philosophy_mobile"}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center gap-5">
                            <DoubleSlashIcon className="w-[27px] h-[33px]"/>
                            <div
                                className="w-full sm:w-3/4 md:w-2/4 flex flex-col items-center gap-10 font-medium uppercase text-white
                                           text-sm leading-18p text-justify">
                                <div>{t("pages.burro.philosophy.description.p1")}</div>
                                <div>{t("pages.burro.philosophy.description.p2")}</div>
                            </div>
                            <DoubleSlashIcon className="w-[27px] h-[33px]"/>
                        </div>
                        <div
                            className="fixed right-9 bottom-8 text-white font-medium uppercase text-sl leading-21.5 flex items-center gap-[0.718rem]"
                            onClick={() => slideTo(SlideIndex.command)}
                        >
                            <div>{t("pages.burro.command.title")}</div>
                            <ArrowLeftStrokeIcon className="w-[0.562rem] h-3.5 text-white -mt-1"/>
                        </div>
                    </BurroPreviewTablet>
                </SwiperSlide>
                <SwiperSlide>
                    <BurroPreviewTablet
                        title={t("pages.burro.command.title")}
                        bgImage={"bg-burro_philosophy_hover"}
                        contentAlign={'end'}
                    >
                        <div
                            className="flex flex-row items-center gap-8 font-medium uppercase text-white
                                           text-sm leading-18p text-justify">
                            {isMobileScreen ?
                                <div className="w-[363px] h-full">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={32}
                                    >
                                        <SwiperSlide>
                                            <div className="w-[363px] h-[252px]">{t("pages.burro.command.mobile.p1")}</div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-[363px] h-[252px]">{t("pages.burro.command.mobile.p2")}</div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div> :
                                <>
                                    <div>{t("pages.burro.command.mobile.p1")}</div>
                                    <div>{t("pages.burro.command.mobile.p2")}</div>
                                </>
                            }
                        </div>
                        <div
                            className="fixed left-9 bottom-8 text-white font-medium uppercase text-sl leading-21.5 flex items-center gap-[0.718rem]"
                            onClick={() => slideTo(SlideIndex.philosophy)}
                        >
                            <ArrowLeftStrokeIcon className="w-[0.562rem] h-3.5 text-white -mt-1 rotate-180"/>
                            <div>{t("pages.burro.philosophy.title")}</div>
                        </div>
                        <div
                            className="fixed right-9 bottom-8 text-white font-medium uppercase text-sl leading-21.5 flex items-center gap-[0.718rem]"
                            onClick={() => slideTo(SlideIndex.achievements)}
                        >
                            <div>{t("pages.burro.achievements.title")}</div>
                            <ArrowLeftStrokeIcon className="w-[0.562rem] h-3.5 text-white -mt-1"/>
                        </div>
                    </BurroPreviewTablet>
                </SwiperSlide>
                <SwiperSlide>
                    <BurroPreviewTablet
                        title={t("pages.burro.achievements.title")}
                        bgImage={"bg-burro_achievements_mobile"}
                    >
                        <div className="w-full max-w-[38.56rem] h-full max-h-[26rem] grid grid-cols-2 gap-8 text-white">
                            {certificates.map(certificate =>
                                <CertificateCard
                                    {...certificate}
                                    key={certificate.id}
                                />)}
                        </div>
                        <div
                            className="fixed left-9 bottom-8 text-white font-medium uppercase text-sl leading-21.5 flex items-center gap-[0.718rem]"
                            onClick={() => slideTo(SlideIndex.command)}
                        >
                            <ArrowLeftStrokeIcon className="w-[0.562rem] h-3.5 text-white -mt-1 rotate-180"/>
                            <div>{t("pages.burro.command.title")}</div>
                        </div>
                    </BurroPreviewTablet>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BurroMobile;