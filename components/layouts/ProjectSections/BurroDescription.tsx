import React, {FC, ReactNode, useEffect, useState} from 'react';
import DownloadIcon from "../../../public/svg/download-arrow.svg";
import ProjectSections from "./ProjectSections";
import {useDebounce} from "../../../features/hooks/useDebounce";
import Button from "../../shared/Button/Button";
import {useTranslation} from "next-i18next";

interface DescriptionProps {
    children?: ReactNode | string
    descriptionText?: string | ReactNode
    hide?: boolean
}

const BurroDescription: FC<DescriptionProps> = ({children, descriptionText, hide}) => {
    const [debouncedDescription, setDebouncedDescription] = useState<string | ReactNode>("");
    const descriptionUpdate = useDebounce((description: string | ReactNode) => setDebouncedDescription(description), 200);

    const {t} = useTranslation();

    useEffect(() => {
        if (hide) {
            descriptionUpdate.cancel();
            setDebouncedDescription("");
        } else if (descriptionText) {
            descriptionUpdate.bounce(descriptionText);
        }
    }, [hide, descriptionText, setDebouncedDescription])

    return (
        <ProjectSections
            className={`${hide ? "w-0" : "w-64"} py-4`}
            border={!hide}
        >
            <div
                className={`px-4 h-full w-full min-w-48 transition-opacity duration-200 ${!hide && debouncedDescription ? "opacity-100" : "opacity-0"} 
                            font-semibold items-center text-matterhorn font-medium uppercase text-sm leading-18p text-justify space-y-6`}>
                {debouncedDescription}
            </div>
            {children &&
                <div className="h-full w-full px-4">
                    {children}
                </div>}
            <div className={`h-full w-full px-5 flex flex-col items-center justify-end transition-opacity duration-200
                                 ${!hide && debouncedDescription ? "opacity-100" : "opacity-0"}`}>
                {!hide && <Button.Link
                    href={"/"}
                    styleType={"rounded"}
                    className="w-full border border-matterhorn"
                    childrenClassName="w-full flex flex-row justify-center"
                >
                    <div className="text-xs font-semibold text-center leading-15.42p mr-2">{t("actionButtons.presentation")}</div>
                    <DownloadIcon className="pt-0.5 h-4"/>
                </Button.Link>}
            </div>
        </ProjectSections>
    );
};

export default BurroDescription;