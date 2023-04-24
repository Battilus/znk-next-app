import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {znakApi} from "./api/queries";
import {projectsSlice} from "./reducers/projectsSlice";

const isDev = process.env.NODE_ENV === 'development';
export const makeStore = () =>
    configureStore({
        reducer: {
            [znakApi.reducerPath]: znakApi.reducer,
            [projectsSlice.name]: projectsSlice.reducer,
        },
        middleware: (gDM) => gDM().concat(znakApi.middleware),
        devTools: isDev
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: isDev });