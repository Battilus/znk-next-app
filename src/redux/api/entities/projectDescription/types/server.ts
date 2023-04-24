type ProjectImageServer = {
  src: string;
  showOrder: number;
  projectPreview: string;
}

type TagServer = {
  tagName: string;
  tagDescription: string;
}

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