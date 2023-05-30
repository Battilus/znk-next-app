import { ServerBffTag } from '../types/server';
import { BffTag } from '../types/client';

export const bffTagAdapter = {
  toClient(data: ServerBffTag[]): BffTag[] {
    return data.map((item) => String(item));
  }
}