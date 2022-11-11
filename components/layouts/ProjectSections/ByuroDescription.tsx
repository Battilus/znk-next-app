import React, {FC, ReactNode, useEffect, useState} from 'react';
import DownloadIcon from "../../../public/svg/download-arrow.svg";
import ProjectSections from "./ProjectSections";
import {useDebounce} from "../../../features/hooks/useDebounce";
import Button from "../../shared/Button/Button";

interface DescriptionProps {
    children?: ReactNode | ReactNode[] | string | string[]
    descriptionText?: string | ReactNode
    hide?: boolean
}

const ByuroDescription: FC<DescriptionProps> = ({children, descriptionText, hide}) => {
    const [debouncedDescription, setDebouncedDescription] = useState<string | ReactNode>("");
    const descriptionUpdate = useDebounce((description: string | ReactNode) => setDebouncedDescription(description), 300);

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
            widthDuration={300}
            border={!hide}
        >
            <div
                className={`px-4 h-full w-full min-w-48 transition-opacity duration-200 ${!hide && debouncedDescription ? "opacity-100" : "opacity-0"} 
                                items-center text-matterhorn font-medium uppercase text-sm leading-18p text-justify space-y-6`}>
                {debouncedDescription}
            </div>
            {children &&
                <div className="h-full w-full px-4">
                    {children}
                </div>}
            <div className={`h-full w-full px-5 flex flex-col items-center justify-end transition-opacity duration-150
                                 ${!debouncedDescription ? "opacity-0" : "opacity-100"}`}>
                <Button
                    styleType={"rounded"}
                    className="w-full border border-matterhorn"
                    childrenClassName="w-full flex flex-row justify-center"
                >
                    <div className="text-xs font-medium text-center leading-15.42p mr-2">Презентация</div>
                    <DownloadIcon className="pt-0.5 h-4"/>
                </Button>
            </div>
        </ProjectSections>
    );
};

export default ByuroDescription;