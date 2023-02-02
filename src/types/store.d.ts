import {ProjectDescriptionData, YearOfBuild} from "./Api/dataTypes";

export type ProjectsFilters = {
    services: string,
    assignment: string,
    yearOfBuild: YearOfBuild,
}

export type ProjectsStore = {
    projects: ProjectDescriptionData[],
    filters: ProjectsFilters,
}