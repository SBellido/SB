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

// <div class="container_modal">
//   <div class="_header_modal">
//     <div class="_container_icon">
//       <mat-icon class="_icon_download">cloud_download</mat-icon>
//     </div>
//     <h4 class="_title_modal">
//       Descargar CV
//     </h4>
//     <div class="_container_close_btn" (click)="closeModal()" title="Cerrar">
//       <mat-icon>close</mat-icon>
//     </div>
//   </div>
//   <div class="_container_info">
//     <mat-icon class="_icon_check">check_circle_outline</mat-icon>
//     <p class="_text_modal">El CV de Sebastián fue desgargado con éxito.</p>
//    <span class="_text_modal">Muchas gracias por tu interés.</span>
//   </div>
// </div>