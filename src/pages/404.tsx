import React from 'react';
import {GetStaticProps, NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import Button from '../components/shared/Button/Button';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const NotFound: NextPage = () => {
    const {t} = useTranslation();
    return (
        <PageWrapper meta={{title: "ZNK Project Burro - 404 Not Found", description: "404 Not Found"}}>
            <div className="h-screen bg-whiteSmoke flex flex-col items-center justify-center">
                <div className="text-matterhorn uppercase text-xs 2xl:text-0.83v leading-4 2xl:leading-1.11v mb-8 2xl:mb-2.22v">
                    {t("pages.404.description")}
                </div>
                <Button.Link
                    styleType={"rounded"}
                    href="/"
                    className="max-w-152px animate-bounce border border-matterhorn"
                >
                    <div className="text-xs 2xl:text-0.83v font-medium text-center leading-15.42p 2xl:leading-1.07v">{t("pages.404.buttonLink.title")}</div>
                </Button.Link>
            </div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps = async ({locale})  => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ["common"])),
        },
    }
}

export default NotFound;