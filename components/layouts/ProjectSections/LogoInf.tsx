import React, {FC, ReactNode} from 'react';
import ProjectSections from "./ProjectSections";
import {Transition} from '@headlessui/react';
import LogoInfBody from "./utilityComponents/LogoInfBody";
import LogoLink from "../../shared/Logo/LogoLink";

interface IProps {
    children?: ReactNode | string
    hover?: boolean
    staticWidth?: boolean
    onLeaveChildren?: ReactNode | string
}

const LogoInf: FC<IProps> = ({children, hover, staticWidth, onLeaveChildren}) => {
    return (
        <>
            <ProjectSections
                className={`${staticWidth ? "w-64" : hover ? "w-64" : "w-48"}`}
                border
            >
                <div
                    className="px-7 pb-6 w-full h-full flex flex-col items-center text-matterhorn font-medium uppercase">
                    <LogoLink href={'/'} align={"start"}/>
                    {!onLeaveChildren ?
                        <Transition
                            show={!!hover}
                            enter="transform transition-opacity duration-500"
                            enterFrom="opacity-0 w-full h-full"
                            enterTo="opacity-100 w-full h-full"
                            leave="transform transition-opacity duration-100"
                            leaveFrom="opacity-100 w-full h-full"
                            leaveTo="opacity-0 w-full h-full"
                        >
                            {children}
                        </Transition> :
                        <>
                            <LogoInfBody show={!!hover}>
                                {hover && children}
                            </LogoInfBody>
                            <LogoInfBody show={!hover}>
                                {!hover ? onLeaveChildren : null}
                            </LogoInfBody>
                        </>
                    }
                </div>
            </ProjectSections>
        </>
    );
};

export default LogoInf;