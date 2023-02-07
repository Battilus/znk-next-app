import {initialState} from "../initialState/projects";
import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";


export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setFilterParam(state, action) {
            state.projectsFilter = action.payload;
        },
        extraReducers: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            [HYDRATE]: (state, action) => ({
                ...state,
                ...action.payload.projects
            }),
        },
    },
});

export const {
    setFilterParam
} = projectsSlice.actions;
export default projectsSlice.reducer;