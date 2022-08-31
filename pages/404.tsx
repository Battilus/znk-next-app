import React from 'react';
import {NextPage} from "next";
import A from '../components/shared/Link/A';
import PageWrapper from "../components/PageWrapper";

const NotFound: NextPage = () => {
    return (
        <PageWrapper title={"ZNK App - 404 Not Found"} description={"404 Not Found"}>
            <div className="h-screen bg-white flex flex-col items-center justify-center">
                <div className="text-matterhorn uppercase text-xs leading-4 mb-8">
                    что-то пошло не так :(
                </div>
                <A href="/"
                   className="max-w-152px pt-2.5 pb-2 px-8 text-matterhorn uppercase text-xs leading-4
                                border border-matterhorn rounded-full
                                bg-whiteSmoke hover:bg-matterhorn hover:text-whiteSmoke transition duration-200 animate-bounce"
                >
                    На главную
                </A>
            </div>
        </PageWrapper>
    );
};

export default NotFound;