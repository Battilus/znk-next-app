import React, {FC, ReactNode} from 'react';
import ProjectSections from "./ProjectSections";
import Logo from "../../shared/Logo/Logo";
import {Transition} from '@headlessui/react';

interface IProps {
    children?: ReactNode | ReactNode[] | string | string[]
    hover?: boolean
    hide?: boolean
}

const LogoInf: FC<IProps> = ({children, hover, hide}) => {
    return (
        <>
            <ProjectSections
                hide={hide}
                className={`${hover ? "w-64" : "w-48"}`}
                border
            >
                <div
                    className="px-7 pb-6 w-full h-full flex flex-col items-center text-matterhorn font-medium uppercase">
                    <div className="flex flex-col w-full h-full">
                        <Logo align={"start"}/>
                        <Transition
                            show={!!hover}
                            enter="transition transition-opacity duration-700"
                            enterFrom="opacity-0 w-full h-full"
                            enterTo="opacity-100 w-full h-full"
                            leave="transition transition-all duration-100"
                            leaveFrom="opacity-100 w-full h-full"
                            leaveTo="opacity-0 w-full h-full"
                        >
                            {children}
                        </Transition>
                    </div>
                </div>
            </ProjectSections>
        </>
    );
};

export default LogoInf;