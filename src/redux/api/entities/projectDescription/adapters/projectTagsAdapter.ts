import { ProjectServer } from '../types/server';
import { Project } from '../types/client';

export const projectTagsAdapter = {
  toClient(data: ProjectServer['tags']): Project['tags'] {
    return data.map(tag => ({
      tagName: tag.tagName,
      tagDescription: tag.tagDescription,
    }))
  }
}