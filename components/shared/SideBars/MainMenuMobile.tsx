import React, {FC, useState} from 'react';
import {Transition} from "@headlessui/react";
import Button from "../Button/Button";
import CrossIcon from "../../../public/svg/cross-menu.svg";
import BurgerIcon from "../../../public/svg/burger-menu.svg";

interface IProps {
    isHomeLocation?: boolean
    hide?: boolean
}

const MainMenuMobile: FC<IProps> = ({hide}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="fixed right-0 top-0 z-999">
            <Transition
                show={!hide}
                enter="transform transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transform transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed right-0 w-[7.75rem] h-[5.25rem] flex flex-col z-50">
                    <Button
                        styleType={"transparent"}
                        className={`flex items-center justify-center w-[7.75rem] h-[5.25rem] outline-0`}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        {isOpen
                            ? <CrossIcon className="w-8.5 2xl:w-2.36v h-5 2xl:h-1.39v"/>
                            : <BurgerIcon className="w-8.5 2xl:w-2.36v h-5 2xl:h-1.39v"/>}
                    </Button>
                </div>
            </Transition>
        </div>
    );
};

export default MainMenuMobile;