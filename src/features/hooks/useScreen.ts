import {useWindowSize} from "./useWindowSize";
import {useEffect, useState} from "react";

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

type UseScreenHookType = (
    sm?: string | number,
    md?: string | number,
    lg?: string | number,
    xl?: string | number,
    xxl?: string | number
) => {
    breakpoints: ScreenBreakpoints,
    screens: CommonScreenBreakpoints,
    breakpointHandler: (breakpointName: string, value: boolean) => void
}

export const useScreen: UseScreenHookType = (sm = 640, md = 768, lg = 1024, xl = 1280, xxl = 1536) => {
    const [breakpoints, setBreakpoints] = useState<ScreenBreakpoints>({
        mobileSm: false,
        mobileMd: false,
        tabletLg: false,
        screenXl: false,
        screenXxl: false,
        screenWide: false,
    });

    const {width: screenWidth} = useWindowSize();

    const breakpointHandler = (breakpointName: string, value: boolean) => {
        setBreakpoints({...breakpoints, [breakpointName]: value});
    }

    useEffect(() => {
        setBreakpoints({
            mobileSm: screenWidth! <= sm,
            mobileMd: screenWidth! > sm && screenWidth! <= md,
            tabletLg: screenWidth! > md && screenWidth! <= lg,
            screenXl: screenWidth! > lg && screenWidth! <= xl,
            screenXxl: screenWidth! > xl && screenWidth! <= xxl,
            screenWide: screenWidth! > xxl,
        })
    }, [screenWidth])

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
