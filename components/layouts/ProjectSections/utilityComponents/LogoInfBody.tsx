import React, {FC, ReactNode} from 'react';
import {Transition} from "@headlessui/react";

interface IProps {
    children: ReactNode | ReactNode[] | string | string[]
    show: boolean
    enterDuration?: number
}

const LogoInfBody: FC<IProps> = ({children, show, enterDuration=200}) => {
    return (
        <Transition
            appear={true}
            show={show}
            enter={`transform transition-opacity duration-${enterDuration}`}
            enterFrom="opacity-0 w-full h-full"
            enterTo="opacity-100 w-full h-full"
        >
            {children}
        </Transition>
    );
};

export default LogoInfBody;