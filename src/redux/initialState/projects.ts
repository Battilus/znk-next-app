import { ProjectsStore } from '../../types/store';

export const initialState: ProjectsStore = {
  projects: [],
  projectsFilter: '',
  bff: {
    services: [],
    assignments: [],
    buildYears: [],
  },
};