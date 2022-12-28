import React, {FC} from 'react';
import {firstLetterCapitalize} from "../../../../features/utils";

interface IProps {
    title?: string
    status?: string | number
}

const ProjectStatusRow: FC<IProps> = ({title, status}) => {
    return (
        <>
            {title || (status || typeof status === "number") ?
                <div className="w-full">
                    <div className="w-full h-px bg-matterhorn mb-1.5 2xl:mb-0.42v"/>
                    <div className="w-full flex flex-row justify-between text-matterhorn text-xs 2xl:text-0.83v 2xl:leading-1.11v text-justify">
                        {title && <div className="leading-17p 2xl:leading-1.18v">{firstLetterCapitalize(title)}</div>}
                        {status && <div className="uppercase leading-17p 2xl:leading-1.18v font-medium">{status}</div>}
                    </div>
                </div> : null}
        </>
    );
};

export default ProjectStatusRow;