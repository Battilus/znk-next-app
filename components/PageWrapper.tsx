import React, {FC, ReactNode} from 'react';
import Meta, {MetaTag} from "./utility/Meta";
import MainMenu from "./shared/SideBars/mainMenu";
import {CommonScreenBreakpoints, ScreenBreakpoints, useScreen} from "../features/hooks/useScreen";

interface IPageWrapperProps {
    children: FC<{ breakpoints: ScreenBreakpoints, screens: CommonScreenBreakpoints }> | ReactNode
    title: string
    description: string
    metaTagsList?: MetaTag[]
    isHomeLocation?: boolean
    hideHomeButton?: boolean
    screenBreakpoints?: boolean
    menuButtonColor?: string
}

const PageWrapper: FC<IPageWrapperProps> = ({
                                                children,
                                                title,
                                                description,
                                                metaTagsList,
                                                isHomeLocation,
                                                hideHomeButton,
                                                screenBreakpoints,
                                                menuButtonColor
                                            }) => {
    const {breakpoints, screens} = useScreen();
    return (
        <>
            <Meta
                title={title}
                description={description}
                tagsList={metaTagsList}
            />
            <main className="h-screen w-screen bg-whiteSmoke">
                <MainMenu hideHomeButton={hideHomeButton} isHomeLocation={isHomeLocation} menuButtonColor={menuButtonColor}/>
                <div className="ml-0 lg:ml-8 2xl:ml-2.22v overflow-x-hidden">
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-ignore*/}
                    {screenBreakpoints ? children({breakpoints, screens}) : children}
                </div>
            </main>
        </>
    );
};

export default PageWrapper;