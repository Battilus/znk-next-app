import {ProjectsStore} from "../../types/store";

export const initialState: ProjectsStore = {
    projects: [],
    filters: {
        services: "",
        assignment: "",
        yearOfBuild: "",
    }
}