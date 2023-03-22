import React, {FC, ReactNode} from 'react';
import {Transition} from "@headlessui/react";

interface IProps {
    children: ReactNode | string
    show: boolean
}

const LogoInfBody: FC<IProps> = ({children, show}) => {
    return (
        <Transition
            appear={true}
            show={show}
            enter={`transform transition-opacity duration-500`}
            enterFrom="opacity-0 w-full"
            enterTo="opacity-100 w-full"
        >
            {children}
        </Transition>
    );
};

export default LogoInfBody;