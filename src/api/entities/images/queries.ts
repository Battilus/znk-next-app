import { QueryFunction } from '@tanstack/query-core';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import superagent from "superagent";
import * as apiRoutes from '../../endpoints';
import { ProjectImage } from './types/client';
import { ApiLocale } from '../../types/locales';
import { projectImagesAdapter } from './adapters/adapters';

type QueryParams = {
  localization: ApiLocale
}

const getImagesByProjectIdUrl = (projectId: string) => apiRoutes.imagesByProjectId({projectId});
const getPreviewImagesByProjectIdUrl = (projectId: string) => apiRoutes.previewImagesByProjectId({projectId});

export const getImagesByProjectId: QueryFunction<ProjectImage[], [ string, string, QueryParams ]> = ({ queryKey }) => {
  const [, projectId, queryParams] = queryKey;

  return superagent.get(getImagesByProjectIdUrl(projectId))
    .query(queryParams)
    .then((response) => response.body as ProjectImage[])
    .then((imagesData) => projectImagesAdapter.toClient(imagesData)
    );
};

export const getPreviewImagesByProjectId: QueryFunction<ProjectImage[], [ string, string, QueryParams ]> = ({ queryKey }) => {
  const [, projectId, queryParams] = queryKey;

  return superagent.get(getPreviewImagesByProjectIdUrl(projectId))
    .query(queryParams)
    .then((response) => response.body as ProjectImage[])
    .then((imagesData) => projectImagesAdapter.toClient(imagesData)
    );
};

export const useGetProjectImagesQuery = (
  projectId: string,
  queryParams: QueryParams,
  options?: UseQueryOptions<ProjectImage[], unknown, ProjectImage[], [ string, string, QueryParams ]>
) => {
  return useQuery(['projectImages', projectId, queryParams], getImagesByProjectId, options);
};

export const useGetPreviewProjectImagesQuery = (
  projectId: string,
  queryParams: QueryParams,
  options?: UseQueryOptions<ProjectImage[], unknown, ProjectImage[], [ string, string, QueryParams ]>
) => {
  return useQuery(['previewProjectImages', projectId, queryParams], getPreviewImagesByProjectId, options);
};