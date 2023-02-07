import {ProjectDescriptionData} from "./Api/dataTypes";

export type ProjectsStore = {
    projects: ProjectDescriptionData[],
    projectsFilter: "",
}