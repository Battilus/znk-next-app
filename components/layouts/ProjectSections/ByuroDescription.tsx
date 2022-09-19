import React, {FC, ReactNode, useMemo, useState} from 'react';
import {Button} from "../../shared/Button";
import DownloadIcon from "../../../public/svg/download-arrow.svg";
import ProjectSections from "./ProjectSections";
import {Transition} from '@headlessui/react';
import {useDebounce} from "../../../features/hooks/useDebounce";

interface DescriptionProps {
    children?: ReactNode | ReactNode[] | string | string[]
    descriptionText?: string | ReactNode
    hide?: boolean
}

const ByuroDescription: FC<DescriptionProps> = ({children, descriptionText, hide}) => {
    const [debouncedDescription, setDebouncedDescription] = useState<string | ReactNode>(descriptionText);
    const descriptionUpdate = useDebounce((description: string | ReactNode) => setDebouncedDescription(description), 200);

    useMemo(() => {
        if (hide) {
            setDebouncedDescription("");
        } else {
            descriptionUpdate(descriptionText);
        }
    }, [hide, descriptionText, setDebouncedDescription])

    return (
        <Transition
            show={!hide}
            enter="transition transition-all duration-200"
            enterFrom="w-0 opacity-0"
            enterTo="w-64 opacity-100"
            leave="transition transition-all duration-1"
            leaveFrom="w-64 opacity-100"
            leaveTo="w-0 opacity-0"
        >
            <ProjectSections
                className={`w-64 p-4`}
                border
            >
                <div
                    className={`h-full w-full transition-opacity duration-100 ${debouncedDescription ? "opacity-100" : "opacity-0"} 
                                items-center text-matterhorn font-medium uppercase text-sm leading-18p text-justify space-y-6`}>
                    {debouncedDescription}
                </div>
                {children &&
                    <div className="h-full w-full">
                        {children}
                    </div>}
                <div className={`h-full w-full px-1.5 flex flex-col items-center justify-end 
                                 ${!debouncedDescription ? "hidden" : ""}`}>
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
        </Transition>
    );
};

export default ByuroDescription;