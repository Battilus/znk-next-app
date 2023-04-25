import { ProjectDescriptionData } from './Api/dataTypes';

export type BffParams = {
  services: string[];
  assignments: string[];
  buildYears: string[];
}

export type ProjectsStore = {
  projects: ProjectDescriptionData[];
  projectsFilter: string;
  bff: BffParams;
}