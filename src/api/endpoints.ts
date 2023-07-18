const api = (endpoint: string) => {
  return `${process.env.ZNAK_API_URL}/${endpoint}`;
}

export const projects = () => 'projects';
export const projectsList = () => api(`${projects()}`);
export const projectsListFilter = () => api(`${projects()}/filter/`);
export const projectsPreview = () => api(`${projects()}/preview`);
export const projectsByTag = ({ tag }: { tag: string }) => api(`${projects()}/${tag}`);
export const project = () => 'project';
export const projectById = ({ projectId }: { projectId: string }) => api(`${project()}/${projectId}`);
export const projectByTitle = ({ projectTitle }: { projectTitle: string }) => api(`${project()}/title/${projectTitle}`);
export const projectImage = () => 'project_image';
export const imagesByProjectId = ({ projectId }: { projectId: string }) => api(`${projectImage()}/project_id/${projectId}`);
export const previewImagesByProjectId = ({ projectId }: { projectId: string }) => api(`${projectImage()}/preview/${projectId}`);
export const bffServices = () => api('bff/services');
export const bffPurposes = () => api('bff/project_purposes');
export const bffBuildYears = () => api('bff/build_years');