import { QueryFunction } from '@tanstack/query-core';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import superagent from "superagent";
import * as apiRoutes from '../../endpoints';
import { Project } from './types/client';
import { projectAdapter } from './adapters/adapters';
import { ServerProject } from './types/server';
import { ApiLocale } from '../../types/locales';
import { ProjectQueryKey } from '../../constants';
import { BffTag } from '../bffTags/types/client';

type QueryParams = {
  localization: ApiLocale
}

const getPreviewProjectsListUrl = () => apiRoutes.projectsPreview();
const getProjectsListByTagUrl = (tag: string) => apiRoutes.projectsByTag({tag});
const getAllProjectsUrl = () => apiRoutes.allProjects();
const getOneProjectByIdUrl = (projectId: string) => apiRoutes.projectById({projectId});
const getOneProjectByTitleUrl = (projectTitle: string) => apiRoutes.projectByTitle({projectTitle});

export const getPreviewProjectsList: QueryFunction<Project[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getPreviewProjectsListUrl())
    .query(queryParams)
    .then((response) => response.body as ServerProject[])
    .then((serverProjects) => serverProjects.map(projectData => projectAdapter.toClient(projectData))
  );
};

export const getAllProjectsList: QueryFunction<Project[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getAllProjectsUrl())
    .query(queryParams)
    .then((response) => response.body as ServerProject[])
    .then((serverProjects) => serverProjects.map(projectData => projectAdapter.toClient(projectData))
    );
};

export const getProjectsListByTag: QueryFunction<Project[], [ string, string, QueryParams ]> = ({ queryKey }) => {
  const [, tag, queryParams] = queryKey;

  return superagent.get(getProjectsListByTagUrl(tag))
    .query(queryParams)
    .then((response) => response.body as ServerProject[])
    .then((serverProjects) => serverProjects.map(projectData => projectAdapter.toClient(projectData))
    );
};

export const getOneProjectById: QueryFunction<Project, [ string, string, QueryParams ]> = ({ queryKey }) => {
  const [, projectId, queryParams] = queryKey;

  return superagent.get(getOneProjectByIdUrl(projectId))
    .query(queryParams)
    .then((response) => response.body as ServerProject)
    .then((projectData) => projectAdapter.toClient(projectData)
    );
};

export const getOneProjectByTitle: QueryFunction<Project, [ string, string, QueryParams ]> = ({ queryKey }) => {
  const [, projectTitle, queryParams] = queryKey;

  return superagent.get(getOneProjectByTitleUrl(projectTitle))
    .query(queryParams)
    .then((response) => response.body as ServerProject)
    .then((projectData) => projectAdapter.toClient(projectData)
    );
};

export const useGetPreviewProjectsListQuery = (
  queryParams: QueryParams,
  options?: UseQueryOptions<Project[], unknown, Project[], [ string, QueryParams ]>
) => {
  return useQuery([ProjectQueryKey.Preview, queryParams], getPreviewProjectsList, options);
};

export const useGetProjectsListByTagQuery = (
  tag: BffTag,
  queryParams: QueryParams,
  options?: UseQueryOptions<Project[], unknown, Project[], [ string, string, QueryParams ]>
) => {
  return useQuery([ProjectQueryKey.List, tag, queryParams], getProjectsListByTag, options);
};

export const useGetOneProjectByIdQuery = (
  projectId: string,
  queryParams: QueryParams,
  options?: UseQueryOptions<Project, unknown, Project, [ string, string, QueryParams ]>
) => {
  return useQuery([ProjectQueryKey.One, projectId, queryParams], getOneProjectById, options);
};

export const useGetOneProjectByTitleQuery = (
  projectTitle: string,
  queryParams: QueryParams,
  options?: UseQueryOptions<Project, unknown, Project, [ string, string, QueryParams ]>
) => {
  return useQuery([ProjectQueryKey.One, projectTitle, queryParams], getOneProjectByTitle, options);
};
