import React, {FC, ReactNode} from 'react';
import Meta, {MetaTag} from "./utility/Meta";
import MainMenu from "./shared/SideBars/MainMenu";

interface IPageWrapperProps {
    children: ReactNode | ReactNode[] | string | string[]
    title: string
    description: string
    metaTagsList?: MetaTag[]
}

const PageWrapper: FC<IPageWrapperProps> = ({children, title, description, metaTagsList}) => {
    return (
        <>
            <Meta
                title={title}
                description={description}
                tagsList={metaTagsList}
            />

            <main className="h-screen bg-white">
                <MainMenu />
                <div>
                    {children}
                </div>
            </main>
        </>
    );
};

export default PageWrapper;