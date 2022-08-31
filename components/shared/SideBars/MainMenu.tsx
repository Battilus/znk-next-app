import React, {FC, useState} from 'react';
import BurgerIcon from '../../../public/svg/burger-menu.svg';
import CrossIcon from '../../../public/svg/cross-menu.svg';
import Image from "next/image";
import Button from "../Button";
import {Transition} from '@headlessui/react';

const MainMenu: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <Button
                className={`fixed left-0 w-8 h-8 ${isOpen ? "border-r border-b" : "border-b border-r"} z-50`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen
                    ? <Image src={CrossIcon} alt="cross logo" width={10} height={10}/>
                    : <Image src={BurgerIcon} alt="burger logo" width={10} height={10}/>}
            </Button>

            <div
                className={`flex flex-col h-screen w-42 fixed left-0 
                            transform transition-all duration-700 ${isOpen ? "" : "-translate-x-38"} 
                            border-r border-matterhorn border-opacity-40 bg-whiteSmoke z-40`}
            >
                <Transition
                    show={isOpen}
                >
                    <Transition.Child
                        enter="transform transition-all duration-700"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transform transition-all duration-700"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="mt-8">
                            <Button
                                className={`border-y outline-0 w-full h-8 uppercase text-sm font-medium`}
                            >
                                Бюро
                            </Button>
                            <Button
                                className={`hover:border-y outline-0 w-full h-8 uppercase text-sm font-medium`}
                            >
                                Все проекты
                            </Button>
                            <Button
                                className={`border-y outline-0 w-full h-8 uppercase text-sm font-medium`}
                            >
                                О нас
                            </Button>
                        </div>
                    </Transition.Child>
                    <Transition.Child
                        enter="transform transition-all duration-700"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transform transition-all duration-700"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="flex flex-col justify-end h-full">
                            <span className="text-center uppercase text-sm font-medium">RU/EN</span>
                        </div>
                    </Transition.Child>
                </Transition>
            </div>
        </>
    );
};

export default MainMenu;