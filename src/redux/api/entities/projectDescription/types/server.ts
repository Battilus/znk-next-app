export type ProjectImageServer = {
  src: string;
  showOrder: number;
  alt?: string;
  description?: string;
  projectPreview: boolean;
}

export type TagServer = {
  tagName: string;
  tagDescription: string;
}

export type BffServer = string;

export type ProjectServer = {
  id: number;
  title: string;
  location: string;
  yearOfBuild: string;
  status: string;
  service: string;
  purpose: string;
  description: string;
  mainPagePreview: boolean;
  images: ProjectImageServer[];
  tags: TagServer[];
}