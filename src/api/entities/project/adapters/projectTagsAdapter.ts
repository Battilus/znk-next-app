import { ServerProject } from '../types/server';
import { Project } from '../types/client';

export const projectTagsAdapter = {
  toClient(data: ServerProject['tags']): Project['tags'] {
    return data.map(tag => ({
      tagName: tag.tagName,
      tagDescription: tag.tagDescription,
    }))
  }
}