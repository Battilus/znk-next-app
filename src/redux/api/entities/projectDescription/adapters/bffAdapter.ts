import { BffServer } from '../types/server';
import { Bff } from '../types/client';

export const bffAdapter = {
  toClient(data: BffServer[]): Bff[] {
    return data.map((item) => String(item));
  }
}