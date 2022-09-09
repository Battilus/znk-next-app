import React, {FC} from 'react';
import {firstLetterCapitalize} from "../../../../features/utils";

interface IProps {
    title?: string
    status?: string | number
}

const ProjectStatusRow: FC<IProps> = ({title, status}) => {
    return (
        <>
            {title && (status || typeof status === "number") ?
                <div className="w-full">
                    <div className="w-full h-px bg-matterhorn mb-1.5"/>
                    <div className="w-full flex flex-row justify-between text-matterhorn text-sm text-justify">
                        <div className="leading-17p">{firstLetterCapitalize(title)}</div>
                        <div className="uppercase leading-17p font-medium">{status}</div>
                    </div>
                </div> : null}
        </>
    );
};

export default ProjectStatusRow;