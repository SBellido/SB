export interface GalleryImage {
  src: string;
  position: number;
  alt: string;
  first: boolean;
  last: boolean;
}

export interface ItemNavBar {
  id: number;
  icon: string;
  tittle: string;
  active: boolean;
  router: string;
}

export interface ItemContact {
  id: number;
  icon: string;
  tittle: string;
  active: boolean;
}

export interface Button {
  route: string;
  img: string;
  title: string;
  text: string;
}

export interface ButtonList {
  buttons: Button[],
}

export interface ItemProfile {
  img: string,
  description_img: string,
  acronyms_career: string,
  year: string,
  name_career: string,
  link: string,
  description_link: string
}

export interface ItemSection {
  id: number,
  title: string,
  active: boolean,
  value: string
}

export interface Section {
  items: ItemSection [],
  allClosed: boolean
}