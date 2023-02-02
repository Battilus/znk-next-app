import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { axiosBaseQuery } from "../../features/api/axiosBaseQuery";

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
        // getPokemonByName: builder.query<
        //     { species: { name: string }; sprites: { front_shiny: string } },
        //     string
        // >({
        //     query: (name) => ({
        //         url: `pokemon/${name}`,
        //         method: "GET"
        //     }),
        // }),
        // getPokemonList: builder.query<{ results: Array<{ name: string }> }, void>({
        //     query: () => ({
        //         url: `pokemon/`,
        //         method: "GET"
        //     }),
        // }),
    }),
});

export const {
    // useGetPokemonByNameQuery,
    // useGetPokemonListQuery,
    util: { getRunningQueriesThunk },
} = znakApi;

// export const {
//     getPokemonByName,
//     getPokemonList
// } = znakApi.endpoints;