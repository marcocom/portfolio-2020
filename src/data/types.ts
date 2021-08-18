
export type TClientLogo = {
  [key: string]: SVGElement;
}
export type ClientListData = {
  meta: string;
  id: string;
  image: SVGElement;
}

type ProjectAssetsImages = string[];
type ProjectAssetsVideos = string[];
type ProjectAssetsData = {
  hero: string;
  images: ProjectAssetsImages;
  videos: ProjectAssetsVideos;
}
export type ProjectAssets = {
  [key: string]: ProjectAssetsData;
}
type ProjectData = {
  title: string;
  year: number;
  subtitle: string;
  link: string;
  role: string;
  hero: string;
  images: ProjectAssetsImages;
  videos: ProjectAssetsVideos;
  githubLink: string;
  hostedLink: string;
  devDesc: string[];
}
export type ProjectsList = {
  [key: string]: ProjectData;
} | never[];
