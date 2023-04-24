import { ProjectServer } from '../types/server';
import { Project } from '../types/client';
import { projectImagesAdapter } from './projectImagesAdapter';
import { projectTagsAdapter } from './projectTagsAdapter';

export const projectToClient = (data: ProjectServer): Project => {
  return (
    {
      id: Number(data.id),
      title: data.title,
      location: data.location,
      yearOfBuild: data.yearOfBuild,
      status: data.status,
      service: data.service,
      purpose: data.purpose,
      description: data.description,
      mainPagePreview: Boolean(data.mainPagePreview),
      images: projectImagesAdapter.toClient(data.images),
      tags: projectTagsAdapter.toClient(data.tags),
    }
  );
}