import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { axiosBaseQuery } from '../../features/api/axiosBaseQuery';
import { BffFilterParam, ProjectDescriptionData, ProjectImage } from '../../types/Api/dataTypes';
import { Project } from './entities/projectDescription/types/client';
import { projectToClient } from './entities/projectDescription/adapters/adapters';
import { ProjectServer } from './entities/projectDescription/types/server';
import { QueryMethod } from './entities/types';
import { BaseQueryMeta } from '@reduxjs/toolkit/src/query/baseQueryTypes';

type ResponseProjectData = {
  data: Project[];
  meta: BaseQueryMeta<any>
}

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
    getAllProjects: builder.query<ResponseProjectData, string>({
      query: () => ({
        url: `projects/`,
        method: QueryMethod.GET,
      }),
      transformResponse(response: ProjectServer[], meta): Promise<ResponseProjectData> | ResponseProjectData {
        console.log(response, meta);

        return {
          data: response.map(project => projectToClient(project)),
          meta,
        };
      },
    }),
    getProjectsPreview: builder.query<ProjectDescriptionData[], string>({
      query: () => ({
        url: `projects/preview/`,
        method: QueryMethod.GET,
      }),
    }),
    getProjectsWithSpecifiedTag: builder.query<ProjectDescriptionData[], string>({
      query: (tag) => ({
        url: `projects/${tag}`,
        method: QueryMethod.GET,
      }),
    }),
    getOneProjectById: builder.query<ProjectDescriptionData, string>({
      query: (projectId) => ({
        url: `project/${projectId}`,
        method: QueryMethod.GET,
      }),
    }),
    getOneProjectByTitle: builder.query<ProjectDescriptionData, string>({
      query: (projectTitle) => ({
        url: `project/title/${projectTitle}`,
        method: QueryMethod.GET,
      }),
    }),
    getImageByProjectId: builder.query<ProjectImage, string>({
      query: (projectId) => ({
        url: `project_image/project_id/${projectId}`,
        method: QueryMethod.GET,
      }),
    }),
    getPreviewImageByProjectId: builder.query<ProjectImage, string>({
      query: (projectId) => ({
        url: `project_image/preview/${projectId}`,
        method: QueryMethod.GET,
      }),
    }),
    getBffServices: builder.query<BffFilterParam[], string>({
      query: () => ({
        url: `bff/services/`,
        method: QueryMethod.GET,
      }),
    }),
    getBffAssignments: builder.query<BffFilterParam[], string>({
      query: () => ({
        url: `bff/assignments/`,
        method: QueryMethod.GET,
      }),
    }),
    getBffYearsOfBuilds: builder.query<BffFilterParam[], string>({
      query: () => ({
        url: `bff/build_years/`,
        method: QueryMethod.GET,
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