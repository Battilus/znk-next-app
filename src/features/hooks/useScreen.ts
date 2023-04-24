import { useWindowSize } from './useWindowSize';
import { useEffect, useState } from 'react';

export type ScreenBreakpoints = {
  mobileSm: boolean,
  mobileMd: boolean,
  tabletLg: boolean,
  screenXl: boolean,
  screenXxl: boolean,
  screenWide: boolean,
}

export type CommonScreenBreakpoints = {
  mobile: boolean,
  tablet: boolean,
  desktop: boolean,
}

export const useScreen = ({ sm = 640, md = 768, lg = 1024, xl = 1280, xxl = 1536 }: {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}): {
  breakpoints: ScreenBreakpoints,
  screens: CommonScreenBreakpoints,
  breakpointHandler: (breakpointName: string, value: boolean) => void
} => {
  const [ breakpoints, setBreakpoints ] = useState<ScreenBreakpoints>({
    mobileSm: false,
    mobileMd: false,
    tabletLg: false,
    screenXl: false,
    screenXxl: false,
    screenWide: false,
  });

  const { width: screenWidth } = useWindowSize();

  const breakpointHandler = (breakpointName: string, value: boolean) => {
    setBreakpoints({ ...breakpoints, [breakpointName]: value });
  };

  useEffect(() => {
    if (screenWidth) {
      setBreakpoints({
        mobileSm: screenWidth <= sm,
        mobileMd: screenWidth > sm && screenWidth <= md,
        tabletLg: screenWidth > md && screenWidth <= lg,
        screenXl: screenWidth > lg && screenWidth <= xl,
        screenXxl: screenWidth > xl && screenWidth <= xxl,
        screenWide: screenWidth > xxl,
      });
    }
  }, [ lg, md, screenWidth, sm, xl, xxl ]);

  return {
    breakpoints,
    screens: {
      mobile: breakpoints.mobileSm || breakpoints.mobileMd,
      tablet: breakpoints.mobileSm || breakpoints.mobileMd || breakpoints.tabletLg,
      desktop: breakpoints.screenXl || breakpoints.screenXxl || breakpoints.screenWide,
    },
    breakpointHandler,
  };
};
