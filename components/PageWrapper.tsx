import React, {FC, ReactNode} from 'react';
import Meta, {MetaTag} from "./utility/Meta";
import MainMenu from "./shared/SideBars/MainMenu";
import MainMenuMobile from "./shared/SideBars/MainMenuMobile";
import {useScreen} from "../features/hooks/useScreen";

interface IPageWrapperProps {
    children: ReactNode | string
    title: string
    description: string
    metaTagsList?: MetaTag[]
    isHomeLocation?: boolean
    hideHomeButton?: boolean
}

const PageWrapper: FC<IPageWrapperProps> = ({children, title, description, metaTagsList, isHomeLocation, hideHomeButton}) => {
    const {screens: {desktop, tablet}} = useScreen();
    return (
        <>
            <Meta
                title={title}
                description={description}
                tagsList={metaTagsList}
            />
            <main className="h-screen w-screen bg-whiteSmoke">
                {desktop && <MainMenu isHomeLocation={isHomeLocation} hide={hideHomeButton}/>}
                {tablet && <MainMenuMobile isHomeLocation={isHomeLocation} hide={hideHomeButton}/>}
                <div className="ml-0 lg:ml-8 2xl:ml-2.22v overflow-x-hidden">
                    {children}
                </div>
            </main>
        </>
    );
};

export default PageWrapper;