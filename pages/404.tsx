import React from 'react';
import {NextPage} from "next";
import A from '../components/shared/A';

const NotFound: NextPage = () => {
    return (
        <div className="h-screen bg-white flex flex-col items-center justify-center">
            <div className="text-matterhorn uppercase text-xs leading-4 mb-8">
                что-то пошло не так :(
            </div>
            <A href="/">
                <button
                    className="max-w-152px pt-2.5 pb-2 px-8 text-matterhorn uppercase text-xs leading-4
                                border border-matterhorn rounded-full
                                bg-whiteSmoke hover:bg-matterhorn hover:text-whiteSmoke transition duration-200"
                >
                    На главную
                </button>
            </A>
        </div>
    );
};

export default NotFound;