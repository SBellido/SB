export interface GalleryImage {
  src: string,
  position: number,
  alt: string,
  first: boolean,
  last: boolean,
}
export interface ItemNavBar {
  id: number,
  icon: string,
  tittle: string,
  active: boolean,
  router: string,
}
export interface ItemContact {
  id: number,
  icon: string,
  tittle: string,
  active: boolean,
}
export interface Button {
  route: string,
  img: string,
  name: string,
  text: string,
}
export interface ItemProfile {
  img: string,
  description_img: string,
  acronyms_career: string,
  year: string,
  name_career: string,
  link: string,
  description_link: string,
}
export interface ItemsSection {
  title: string,
  visible: boolean,
  text: string,
  disabled: boolean,
  wordsToHighlight: string[],
  brandsData: Button[],
}
export interface Information {
  title: string,
  text: string,
  subtitle: string,
  tecnologies: Tecnologies[],
}
export interface Tecnologies {
  href: string,
  src: string,
  title: string
  alt: string,
}