import { ProjectServer } from '../types/server';
import { Project } from '../types/client';

export const projectImagesAdapter = {
  toClient(data: ProjectServer['images']): Project['images'] {
    return data.map(image => ({
      src: image.src,
      showOrder: Number(image.showOrder),
      projectPreview: image.projectPreview === 'true'
    }))
  }
}