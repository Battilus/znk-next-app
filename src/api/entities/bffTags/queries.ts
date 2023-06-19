import { QueryFunction } from '@tanstack/query-core';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import superagent from "superagent";
import * as apiRoutes from '../../endpoints';
import { ApiLocale } from '../../types/locales';
import { bffTagAdapter } from './adapters/adapters';
import { BffTag } from './types/client';
import { ServerBffTag } from './types/server';
import { BffTagsQueryKey } from '../../constants';

type QueryParams = {
  localization: ApiLocale
}

const getBffServicesUrl = () => apiRoutes.bffServices();
const getBffPurposesUrl = () => apiRoutes.bffPurposes();
const getBffBuildYearsUrl = () => apiRoutes.bffBuildYears();

export const getBffServicesList: QueryFunction<BffTag[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getBffServicesUrl())
    .query(queryParams)
    .then((response) => response.body as ServerBffTag[])
    .then((bffData) => bffTagAdapter.toClient(bffData)
    );
};

export const getBffPurposesList: QueryFunction<BffTag[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getBffPurposesUrl())
    .query(queryParams)
    .then((response) => response.body as ServerBffTag[])
    .then((bffData) => bffTagAdapter.toClient(bffData)
    );
};

export const getBffBuildYearsList: QueryFunction<BffTag[], [ string, QueryParams ]> = ({ queryKey }) => {
  const [, queryParams] = queryKey;

  return superagent.get(getBffBuildYearsUrl())
    .query(queryParams)
    .then((response) => response.body as ServerBffTag[])
    .then((bffData) => bffTagAdapter.toClient(bffData)
    );
};

export const useGetBffServicesListQuery = (
  queryParams: QueryParams,
  options?: UseQueryOptions<BffTag[], unknown, BffTag[], [ string, QueryParams ]>
) => {
  return useQuery([BffTagsQueryKey.Services, queryParams], getBffServicesList, options);
};

export const useGetBffPurposesListQuery = (
  queryParams: QueryParams,
  options?: UseQueryOptions<BffTag[], unknown, BffTag[], [ string, QueryParams ]>
) => {
  return useQuery([BffTagsQueryKey.Purposes, queryParams], getBffPurposesList, options);
};

export const useGetBffBuildYearsListQuery = (
  queryParams: QueryParams,
  options?: UseQueryOptions<BffTag[], unknown, BffTag[], [ string, QueryParams ]>
) => {
  return useQuery([BffTagsQueryKey.BuildYears, queryParams], getBffBuildYearsList, options);
};