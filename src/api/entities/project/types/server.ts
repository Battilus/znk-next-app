import { ServerProjectImage } from '../../images/types/server';

export type ServerTag = {
  tagName: string;
  tagDescription: string;
}

export type ServerProject = {
  id: string;
  title: string;
  url_slug: string;
  location: string;
  yearOfBuild: string;
  status: string;
  service: string;
  purpose: string;
  description: string;
  mainPagePreview: boolean;
  images: ServerProjectImage[];
  tags: ServerTag[];
}