import { ProjectServer } from '../types/server';
import { Project } from '../types/client';

export const projectImagesAdapter = {
  toClient(data: ProjectServer['images']): Project['images'] {
    return data.map(({ src, showOrder, projectPreview, alt, description }) => ({
      src: String(src),
      showOrder: Number(showOrder),
      projectPreview: Boolean(projectPreview),
      alt,
      description,
    }))
  }
}