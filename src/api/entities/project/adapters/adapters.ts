import { ServerProject } from '../types/server';
import { Project } from '../types/client';
import { projectImagesAdapter } from '../../images/adapters/adapters';
import { projectTagsAdapter } from './projectTagsAdapter';

export const projectAdapter = {
  toClient: (data: ServerProject): Project => {
    return (
      {
        id: data.id,
        title: data.title,
        location: data.location,
        yearOfBuild: String(data.yearOfBuild),
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
}