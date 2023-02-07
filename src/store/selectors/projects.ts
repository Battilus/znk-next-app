import {AppState} from "..";
import {createSelector} from '@reduxjs/toolkit';

const allProjectsFromStore = (state: AppState) => state.projects.projects;
const projectsFilterParam = (state: AppState) => state.projects.projectsFilter;
export const getAllProjectsFromStore = createSelector(
    [allProjectsFromStore],
    (projects) => projects
);

export const getProjectsFilterParam = createSelector(
    [projectsFilterParam],
    (filterParam) => filterParam
);
