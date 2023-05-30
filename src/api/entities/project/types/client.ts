import { ProjectImage } from '../../images/types/client';

type ProjectTag = {
  tagName: string;
  tagDescription: string;
}

export type Project = {
  id: string;
  title: string;
  location: string;
  yearOfBuild: string;
  status: string;
  service: string;
  purpose: string;
  description: string;
  mainPagePreview: boolean;
  images: ProjectImage[];
  tags: ProjectTag[];
}