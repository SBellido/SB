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
  title: string,
}
export interface ItemProfile {
  id: number,
  img: string,
  href: string,
  description_img: string,
  acronyms_career: string,
  year: string,
  name_career: string,
  link: string,
  description_link: string,
  showDetail: boolean,
}
export interface ItemsSection {
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
export interface MoreInfo {
  id: number,
  subtitle: string,
  text: string,
  subtitle_1: string,
  text_1: string,
  subtitle_2: string,
  text_2: string,
  subtitle_3: string,
  text_3: string,
  subtitle_4: string,
  text_4: string,
  subtitle_5: string,
  text_5: string,
  subtitle_6: string,
  text_6: string,
  text_info: string
}
