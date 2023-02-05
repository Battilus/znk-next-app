import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { axiosBaseQuery } from "../../features/api/axiosBaseQuery";
import {BffFilterParam, ProjectDescriptionData, ProjectImage} from "../../types/Api/dataTypes";

export const znakApi = createApi({
    reducerPath: 'znakApi',
    baseQuery: axiosBaseQuery({
        baseUrl: process.env.ZNAK_API_URL,
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getAllProjects: builder.query<ProjectDescriptionData[], string>({
            query: () => ({
                url: `projects/`,
                method: "GET"
            }),
        }),
        getProjectsPreview: builder.query<ProjectDescriptionData[], string>({
            query: () => ({
                url: `projects/preview/`,
                method: "GET"
            }),
        }),
        getProjectsWithSpecifiedTag: builder.query<ProjectDescriptionData[], string>({
            query: (tag) => ({
                url: `projects/${tag}`,
                method: "GET"
            }),
        }),
        getOneProjectById: builder.query<ProjectDescriptionData, string>({
            query: (projectId) => ({
                url: `project/${projectId}`,
                method: "GET"
            }),
        }),
        getOneProjectByTitle: builder.query<ProjectDescriptionData, string>({
            query: (projectTitle) => ({
                url: `project/title/${projectTitle}`,
                method: "GET"
            }),
        }),
        getImageByProjectId: builder.query<ProjectImage, string>({
            query: (projectId) => ({
                url: `project_image/project_id/${projectId}`,
                method: "GET"
            }),
        }),
        getPreviewImageByProjectId: builder.query<ProjectImage, string>({
            query: (projectId) => ({
                url: `project_image/preview/${projectId}`,
                method: "GET"
            }),
        }),
        getBffServices: builder.query<BffFilterParam[], string>({
            query: () => ({
                url: `bff/services/`,
                method: "GET"
            }),
        }),
        getBffAssignments: builder.query<BffFilterParam[], string>({
            query: () => ({
                url: `bff/assignments/`,
                method: "GET"
            }),
        }),
        getBffYearsOfBuilds: builder.query<BffFilterParam[], string>({
            query: () => ({
                url: `bff/build_years/`,
                method: "GET"
            }),
        }),
    }),
});

export const {
    // useGetAllProjectsQuery,
    util: { getRunningQueriesThunk },
} = znakApi;

// export const {
//     getAllProjects,
// } = znakApi.endpoints;