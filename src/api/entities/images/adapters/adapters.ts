import { ServerProjectImage } from '../types/server';
import { ProjectImage } from '../types/client';

export const projectImagesAdapter = {
  toClient(data: ServerProjectImage[]): ProjectImage[] {
    return data.map(({ src, showOrder, projectPreview, alt, description }) => ({
      src: String(src),
      showOrder: Number(showOrder),
      projectPreview: Boolean(projectPreview),
      alt,
      description,
    }))
  }
}