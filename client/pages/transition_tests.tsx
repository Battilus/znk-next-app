import React, {useState} from 'react';
import {NextPage} from "next";
import Button from "../components/shared/Button";
import {Transition} from '@headlessui/react';

const TransitionTests: NextPage = () => {
    const [active, setActive] = useState<boolean>(false);
    return (
        <div className="flex flex-col items-center">
            <Button
                className="w-20 h-10 m-12"
                onClick={() => setActive(!active)}
            >
                Click
            </Button>
            <div className="w-40 h-40">
                <Transition
                    show={active}
                    enter="transform transition duration-[400]"
                    enterFrom="opacity-0 rotate-[-120deg] scale-50"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="w-40 h-40 bg-matterhorn rounded"/>
                </Transition>
            </div>
        </div>
    );
};

export default TransitionTests;