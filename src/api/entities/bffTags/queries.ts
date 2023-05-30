import { QueryFunction } from '@tanstack/query-core';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import superagent from "superagent";
import * as apiRoutes from '../../endpoints';
import { ApiLocale } from '../../types/locales';
import { bffTagAdapter } from './adapters/adapters';
import { BffTag } from './types/client';
import { ServerBffTag } from './types/server';

type QueryParams = {
  localization: ApiLocale
}

const getBffServicesUrl = () => apiRoutes.bffServices();
const getBffAssignmentsUrl = () => apiRoutes.bffAssignments();
const getBffYearsOfBuildsUrl = () => apiRoutes.bffYearsOfBuilds();

export const getBffServicesList: QueryFunction<BffTag[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getBffServicesUrl())
    .query(queryParams)
    .then((response) => response.body as ServerBffTag[])
    .then((bffData) => bffTagAdapter.toClient(bffData)
    );
};

export const getBffAssignmentsList: QueryFunction<BffTag[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getBffAssignmentsUrl())
    .query(queryParams)
    .then((response) => response.body as ServerBffTag[])
    .then((bffData) => bffTagAdapter.toClient(bffData)
    );
};

export const getBffYearsOfBuildsList: QueryFunction<BffTag[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getBffYearsOfBuildsUrl())
    .query(queryParams)
    .then((response) => response.body as ServerBffTag[])
    .then((bffData) => bffTagAdapter.toClient(bffData)
    );
};

export const useGetBffServicesListQuery = (
  queryParams: QueryParams,
  options?: UseQueryOptions<BffTag[], unknown, BffTag[], [ string, QueryParams ]>
) => {
  return useQuery(['bffServices', queryParams], getBffServicesList, options);
};

export const useGetBffAssignmentsListQuery = (
  queryParams: QueryParams,
  options?: UseQueryOptions<BffTag[], unknown, BffTag[], [ string, QueryParams ]>
) => {
  return useQuery(['bffAssignments', queryParams], getBffAssignmentsList, options);
};

export const useGetBffYearsOfBuildsListQuery = (
  queryParams: QueryParams,
  options?: UseQueryOptions<BffTag[], unknown, BffTag[], [ string, QueryParams ]>
) => {
  return useQuery(['bffYearsOfBuilds', queryParams], getBffYearsOfBuildsList, options);
};