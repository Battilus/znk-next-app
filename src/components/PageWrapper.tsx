import React, { FC, ReactNode } from 'react';
import Meta, { MetaTag } from './utility/Meta';
import MainMenu from './shared/SideBars/mainMenu';
import { CommonScreenBreakpoints, ScreenBreakpoints, useScreen } from '../features/hooks/useScreen';
import { PageMeta } from '../types';
import ZnakLoadingScreen from './shared/Loader/ZnakLoadingScreen';

interface IPageWrapperProps {
  children: FC<{ breakpoints: ScreenBreakpoints, screens: CommonScreenBreakpoints }> | ReactNode;
  meta: PageMeta;
  metaTagsList?: MetaTag[];
  isHomeLocation?: boolean;
  hideHomeButton?: boolean;
  screenBreakpoints?: boolean;
  menuButtonColor?: string;
  isLoading?: boolean;
}

const PageWrapper: FC<IPageWrapperProps> = (
  {
    children,
    meta,
    metaTagsList,
    isHomeLocation,
    hideHomeButton,
    screenBreakpoints,
    menuButtonColor,
    isLoading,
  }) => {
  const { breakpoints, screens } = useScreen({});

  const renderMain = () => {
    return (
      <>
        <MainMenu hideHomeButton={hideHomeButton} isHomeLocation={isHomeLocation} menuButtonColor={menuButtonColor}/>
        <div className="ml-0 lg:ml-8 iPadPro:ml-8 2xl:ml-2.22v overflow-x-hidden">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          {screenBreakpoints ? children({ breakpoints, screens }) : children}
        </div>
      </>
    )
  }

  return (
    <>
      <Meta
        title={meta.title}
        description={meta.description}
        tagsList={metaTagsList}
      />
      <main className="h-dvh w-screen bg-whiteSmoke">
        {renderMain()}
        <ZnakLoadingScreen disablePageFallback={isLoading}/>
      </main>
    </>
  );
};

export default PageWrapper;