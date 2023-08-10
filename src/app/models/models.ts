// export interface GalleryImage {
//   src: string,
//   position: number,
//   alt: string,
//   first: boolean,
//   last: boolean,
// }
export interface ItemNavBar {
  id: number,
  icon: string,
  title: string,
  active: boolean,
  hover: boolean, 
  styleClass: string,
  router: string,
  hoverColor: string,
}
export interface ItemContact {
  id: number,
  icon: string,
  title: string,
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
  href: string,
  description_img: string,
  acronyms_career: string,
  year: string,
  name_career: string,
  link: string,
  description_link: string,
}
export interface ItemsSection {
  color: string,
  fill: string,
  fill_hover: string,
  title: string,
  visible: boolean,
  text: string,
  disabled: boolean,
  wordsToHighlight: string[],
  isHovered: boolean,
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
export interface HeaderSection {
  icon: string,
  area: string,
  isFlows: boolean,
  routerLink: string,
  isSubSection: boolean,
  color: string,
}
export interface OptionSelect {
  value: string,
  view_Text: string,
}