import React from 'react';
import {NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import Button from '../components/shared/Button/Button';

const NotFound: NextPage = () => {
    return (
        <PageWrapper title={"ZNK App - 404 Not Found"} description={"404 Not Found"}>
            <div className="h-screen bg-white flex flex-col items-center justify-center">
                <div className="text-matterhorn uppercase text-xs leading-4 mb-8">
                    что-то пошло не так :(
                </div>
                <Button.Link
                    styleType={"rounded"}
                    href="/"
                    className="max-w-152px animate-bounce border border-matterhorn"
                >
                    На главную
                </Button.Link>
            </div>
        </PageWrapper>
    );
};

export default NotFound;