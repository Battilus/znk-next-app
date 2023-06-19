import { QueryFunction } from '@tanstack/query-core';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import superagent from "superagent";
import * as apiRoutes from '../../endpoints';
import { Project } from './types/client';
import { projectAdapter } from './adapters/adapters';
import { ServerProject } from './types/server';
import { ApiLocale } from '../../types/locales';
import { BffTagsQueryKey, ProjectQueryKey } from '../../constants';
import { BffTag } from '../bffTags/types/client';

type QueryParams = {
  localization: ApiLocale;
  [BffTagsQueryKey.Status]?: BffTag;
  [BffTagsQueryKey.Services]?: BffTag;
  [BffTagsQueryKey.Purposes]?: BffTag;
  [BffTagsQueryKey.BuildYears]?: BffTag;
}

const getPreviewProjectsListUrl = () => apiRoutes.projectsPreview();
const getProjectsListByTagUrl = (tag: string) => apiRoutes.projectsByTag({tag});
const getProjectsListUrl = () => apiRoutes.projectsList();
const getProjectsListByFilterUrl = () => apiRoutes.projectsListFilter();
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

export const getProjectsList: QueryFunction<Project[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getProjectsListUrl())
    .query(queryParams)
    .then((response) => response.body as ServerProject[])
    .then((serverProjects) => serverProjects.map(projectData => projectAdapter.toClient(projectData))
    );
};

export const getProjectsListByFilter: QueryFunction<Project[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getProjectsListByFilterUrl())
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

export const useGetProjectsListQuery = (
  queryParams: QueryParams,
  options?: UseQueryOptions<Project[], unknown, Project[], [ string, QueryParams ]>
) => {
  return useQuery([ProjectQueryKey.List, queryParams], getProjectsList, options);
};

export const useGetProjectsListByFilterQuery = (
  queryParams: QueryParams,
  options?: UseQueryOptions<Project[], unknown, Project[], [ string, QueryParams ]>
) => {
  return useQuery([ProjectQueryKey.List, queryParams], getProjectsListByFilter, options);
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
