import React, {FC, ReactNode} from 'react';
import Meta, {MetaTag} from "./utility/Meta";
import MainMenu from "./shared/SideBars/MainMenu";

interface IPageWrapperProps {
    children: ReactNode | string
    title: string
    description: string
    metaTagsList?: MetaTag[]
    isHomeLocation?: boolean
    hideHomeButton?: boolean
}

const PageWrapper: FC<IPageWrapperProps> = ({children, title, description, metaTagsList, isHomeLocation, hideHomeButton}) => {
    return (
        <>
            <Meta
                title={title}
                description={description}
                tagsList={metaTagsList}
            />

            <main className="h-screen w-screen bg-whiteSmoke">
                <MainMenu isHomeLocation={isHomeLocation} hide={hideHomeButton}/>
                <div className="ml-8 2xl:ml-2.22v overflow-x-hidden">
                    {children}
                </div>
            </main>
        </>
    );
};

export default PageWrapper;