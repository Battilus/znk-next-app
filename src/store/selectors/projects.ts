import {AppState} from "..";
import {createSelector} from '@reduxjs/toolkit';

const allProjectsFromStore = (state: AppState) => state.projects.projects;
export const getAllProjectsFromStore = createSelector(
    [allProjectsFromStore],
    (projects) => projects
);
