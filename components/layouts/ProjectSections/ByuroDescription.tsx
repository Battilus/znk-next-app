import React, {FC, ReactNode} from 'react';
import {Button} from "../../shared/Button";
import DownloadIcon from "../../../public/svg/download-arrow.svg";

interface DescriptionProps {
    children?: ReactNode | ReactNode[] | string | string[]
    descriptionText?: string
    hide?: boolean
}

const ByuroDescription: FC<DescriptionProps> = ({children, descriptionText, hide}) => {
    return (
        <>
            {!hide ?
                <div
                    className={`flex flex-col items-center h-screen
                        transform transition-all duration-500 w-64
                        border-r border-matterhorn border-opacity-40 bg-white p-4`}
                >
                    <div className="h-full w-full items-center text-matterhorn font-medium uppercase text-sm">
                        {descriptionText}
                    </div>
                    <div className="h-full w-full">{children}</div>
                    <div className="h-full w-full px-1.5 flex flex-col items-center justify-end">
                        <Button
                            styleType={"rounded"}
                            className="w-full border border-matterhorn"
                            childrenClassName="w-full flex flex-row justify-center"
                        >
                            <div className="text-xs font-medium text-center leading-15.42p mr-2">Презентация</div>
                            <DownloadIcon className="pt-0.5 h-4"/>
                        </Button>
                    </div>
                </div> : null}
        </>
    );
};

export default ByuroDescription;