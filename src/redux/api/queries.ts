import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { axiosBaseQuery } from '../../features/api/axiosBaseQuery';
import { BffFilterParam, ProjectDescriptionData, ProjectImage } from '../../types/Api/dataTypes';
import { Bff, Project } from './entities/projectDescription/types/client';
import { projectToClient } from './entities/projectDescription/adapters/adapters';
import { BffServer, ProjectImageServer, ProjectServer } from './entities/projectDescription/types/server';
import { QueryMethod } from './entities/types';
import { BaseQueryMeta } from '@reduxjs/toolkit/src/query/baseQueryTypes';
import { Locale } from '../../types/locales';
import { images } from 'next/dist/build/webpack/config/blocks/images';
import { projectImagesAdapter } from './entities/projectDescription/adapters/projectImagesAdapter';
import { bffAdapter } from './entities/projectDescription/adapters/bffAdapter';
import { setBffFromServer } from '../reducers/projectsSlice';

type QueryParams = {
  localization: Locale;
}

type QueryArgs = {
  tag?: string;
  projectId?: string;
  projectTitle?: string;
  queryParams: QueryParams;
}

type ProjectsData = {
  data: Project[];
  meta: BaseQueryMeta<any>;
}

type ProjectItemData = {
  data: Project;
  meta: BaseQueryMeta<any>;
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
    getAllProjects: builder.query<ProjectsData, QueryParams>({
      query: ({ localization }) => ({
        url: `projects/`,
        params: {
          localization: localization.toUpperCase(),
        },
        method: QueryMethod.GET,
      }),
      transformResponse(response: ProjectServer[], meta): Promise<ProjectsData> | ProjectsData {
        return {
          data: response.map(project => projectToClient(project)),
          meta,
        };
      },
    }),
    getProjectsPreview: builder.query<ProjectsData, QueryParams>({
      query: ({ localization }) => ({
        url: `projects/preview/`,
        params: {
          localization: localization.toUpperCase(),
        },
        method: QueryMethod.GET,
      }),
      transformResponse(response: ProjectServer[], meta): Promise<ProjectsData> | ProjectsData {
        return {
          data: response.map(project => projectToClient(project)),
          meta,
        };
      },
    }),
    getProjectsWithSpecifiedTag: builder.query<ProjectsData, QueryArgs>({
      query: ({ tag, queryParams: { localization } }) => ({
        url: `projects/${tag}/`,
        params: {
          localization: localization.toUpperCase(),
        },
        method: QueryMethod.GET,
      }),
      transformResponse(response: ProjectServer[], meta): Promise<ProjectsData> | ProjectsData {
        return {
          data: response.map(project => projectToClient(project)),
          meta,
        };
      },
    }),
    getOneProjectById: builder.query<ProjectItemData, QueryArgs>({
      query: ({ projectId, queryParams: { localization } }) => ({
        url: `project/${projectId}/`,
        params: {
          localization: localization.toUpperCase(),
        },
        method: QueryMethod.GET,
      }),
      transformResponse(response: ProjectServer, meta): Promise<ProjectItemData> | ProjectItemData {
        return {
          data: projectToClient(response),
          meta,
        };
      },
    }),
    getOneProjectByTitle: builder.query<ProjectItemData, QueryArgs>({
      query: ({ projectTitle, queryParams: { localization } }) => ({
        url: `project/title/${projectTitle}/`,
        params: {
          localization: localization.toUpperCase(),
        },
        method: QueryMethod.GET,
      }),
      transformResponse(response: ProjectServer, meta): Promise<ProjectItemData> | ProjectItemData {
        return {
          data: projectToClient(response),
          meta,
        };
      },
    }),
    getImageByProjectId: builder.query<ProjectImage[], QueryArgs>({
      query: ({ projectId }) => ({
        url: `project_image/project_id/${projectId}`,
        method: QueryMethod.GET,
      }),
      transformResponse(response: ProjectImageServer[]): Promise<ProjectImage[]> | ProjectImage[] {
        return projectImagesAdapter.toClient(response);
      },
    }),
    getPreviewImageByProjectId: builder.query<ProjectImage[], QueryArgs>({
      query: ({ projectId }) => ({
        url: `project_image/preview/${projectId}`,
        method: QueryMethod.GET,
      }),
      transformResponse(response: ProjectImageServer[]): Promise<ProjectImage[]> | ProjectImage[] {
        return projectImagesAdapter.toClient(response);
      },
    }),
    getBffServices: builder.query<Bff[], QueryParams>({
      query: ({ localization }) => ({
        url: `bff/services/`,
        params: {
          localization: localization.toUpperCase(),
        },
        method: QueryMethod.GET,
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBffFromServer({ services: data }));
        } catch (err) {
          console.error(err);
        }
      },
      transformResponse(response: BffServer[]): Promise<Bff[]> | Bff[] {
        return bffAdapter.toClient(response);
      },
    }),
    getBffAssignments: builder.query<Bff[], QueryParams>({
      query: ({ localization }) => ({
        url: `bff/assignments/`,
        params: {
          localization: localization.toUpperCase(),
        },
        method: QueryMethod.GET,
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBffFromServer({ assignments: data }));
        } catch (err) {
          console.error(err);
        }
      },
      transformResponse(response: BffServer[]): Promise<Bff[]> | Bff[] {
        return bffAdapter.toClient(response);
      },
    }),
    getBffYearsOfBuilds: builder.query<Bff[], QueryParams>({
      query: ({ localization }) => ({
        url: `bff/build_years/`,
        params: {
          localization: localization.toUpperCase(),
        },
        method: QueryMethod.GET,
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setBffFromServer({ buildYears: data }));
        } catch (err) {
          console.error(err);
        }
      },
      transformResponse(response: BffServer[]): Promise<Bff[]> | Bff[] {
        return bffAdapter.toClient(response);
      },
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  util: { getRunningQueriesThunk },
} = znakApi;

// export const {
//     getAllProjects,
// } = znakApi.endpoints;