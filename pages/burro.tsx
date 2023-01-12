import React, {memo, useState} from 'react';
import {GetStaticProps, NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import {CERTIFICATES} from "../assets/staticParams";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {CertificateCardType} from "../types";
import BurroDesktop from "../components/layouts/burroPage/desktop/BurroDesktop";
import BurroMobile from '../components/layouts/burroPage/mobile/BurroMobile';


interface IProps {
    certificates: CertificateCardType[]
}

const Burro: NextPage<IProps> = ({certificates}) => {

    const [hover, setHover] = useState<boolean>(false);

    const {t} = useTranslation();

    return (
        <PageWrapper title={"ZNK App"} description={"Burro page"} screenBreakpoints menuButtonColor={"text-white"}>
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

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            certificates: CERTIFICATES,
            ...(await serverSideTranslations(locale!, ["common"])),
        },
    }
}
export default memo(Burro);
