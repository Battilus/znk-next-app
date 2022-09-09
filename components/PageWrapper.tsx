import React, {FC, ReactNode} from 'react';
import Meta, {MetaTag} from "./utility/Meta";
import MainMenu from "./shared/SideBars/MainMenu";

interface IPageWrapperProps {
    children: ReactNode | ReactNode[] | string | string[]
    title: string
    description: string
    metaTagsList?: MetaTag[]
    isHomeLocation?: boolean
}

const PageWrapper: FC<IPageWrapperProps> = ({children, title, description, metaTagsList, isHomeLocation}) => {
    return (
        <>
            <Meta
                title={title}
                description={description}
                tagsList={metaTagsList}
            />

            <main className="h-screen w-screen bg-white">
                <MainMenu isHomeLocation={isHomeLocation}/>
                <div className="ml-8">
                    {children}
                </div>
            </main>
        </>
    );
};

export default PageWrapper;