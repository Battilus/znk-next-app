import { initialState } from '../initialState/projects';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { BffParams } from '../../types/store';


export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setBffFromServer(state, action: PayloadAction<Partial<BffParams>>) {
      if (action.payload.services) {
        state.bff.services = action.payload.services;
      }

      if (action.payload.assignments) {
        state.bff.assignments = action.payload.assignments;
      }

      if (action.payload.buildYears) {
        state.bff.buildYears = action.payload.buildYears;
      }
    },
    setFilterParam(state, action: PayloadAction<string>) {
      state.projectsFilter = action.payload;
    },
    extraReducers: {
      // @ts-ignore
      [HYDRATE]: (state, action) => ({
        ...state,
        ...action.payload,
      }),
    },
  },
});

export const {
  setFilterParam,
  setBffFromServer,
} = projectsSlice.actions;
export default projectsSlice.reducer;