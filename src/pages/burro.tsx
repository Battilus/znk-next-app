import React, {memo, useState} from 'react';
import {GetServerSideProps, NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import {CERTIFICATES} from "../assets/staticParams";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {CertificateCardType, PageMeta} from "../types";
import BurroDesktop from "../components/layouts/burroPage/desktop/BurroDesktop";
import BurroMobile from '../components/layouts/burroPage/mobile/BurroMobile';


interface IProps {
    meta: PageMeta
    certificates: CertificateCardType[]
}

const Burro: NextPage<IProps> = ({meta, certificates}) => {

    const [hover, setHover] = useState<boolean>(false);

    const {t} = useTranslation();

    return (
        <PageWrapper meta={meta} screenBreakpoints menuButtonColor={"text-white"}>
            {({breakpoints: {mobileSm}, screens: {tablet}}) =>
                tablet ?
                    <BurroMobile
                        certificates={certificates}
                        t={t}
                        isMobileScreen={mobileSm}
                    /> :
                    <BurroDesktop
                        certificates={certificates}
                        t={t}
                        hover={hover}
                        setHover={setHover}
                    />}
        </PageWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    return {
        props: {
            meta: {title: "ZNK Project Burro", description:"Burro page"},
            certificates: CERTIFICATES,
            ...(await serverSideTranslations(locale!, ["common"])),
        },
    }
}
export default memo(Burro);
