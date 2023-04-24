type ProjectImage = {
  src: string;
  showOrder: number;
  projectPreview: boolean;
}

type ProjectTag = {
  tagName: string;
  tagDescription: string;
}

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