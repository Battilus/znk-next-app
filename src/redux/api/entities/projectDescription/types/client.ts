export type ProjectImage = {
  src: string;
  showOrder: number;
  alt?: string;
  description?: string;
  projectPreview: boolean;
}

type ProjectTag = {
  tagName: string;
  tagDescription: string;
}

export type Bff = string;

export type Project = {
  id: number;
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