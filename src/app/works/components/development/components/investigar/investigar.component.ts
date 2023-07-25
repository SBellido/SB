import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-investigar',
  templateUrl: './investigar.component.html',
  styleUrls: ['./investigar.component.scss']
})

export class InvestigarComponent implements OnInit {

 /*--------VARIABLES -------*/ 
 public area: string = 'desarrollo/angular';
 public icon: string = 'developer_mode';
//  public isMobile: boolean = false;

 imgGallery = '../assets/images/dev/investigar/mobile/0.png';
 imagesList : GalleryImage[] = [
   { src: '../assets/images/dev/investigar/mobile/0.png', position: 0, alt: 'string', first: true, last: false },
   { src: '../assets/images/dev/investigar/mobile/1.png', position: 1, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/2.png', position: 2, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/3.png', position: 3, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/4.png', position: 4, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/5.png', position: 5, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/6.png', position: 6, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/7.png', position: 7, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/8.png', position: 8, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/9.png', position: 9, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/10.png', position: 10, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/11.png', position: 11, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/12.png', position: 12, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/investigar/mobile/13.png', position: 13, alt: 'string', first: false, last: false },
 ] 

//  imgGallery_desktop = '../assets/images/dev/desktop/0.png';
//  images_desktop : GalleryImage[] = [
//    { src: '../assets/images/dev/desktop/0.png', position: 0, alt: 'string', first: true, last: false },
//    { src: '../assets/images/dev/desktop/1.png', position: 1, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/2.png', position: 2, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/3.png', position: 3, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/4.png', position: 4, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/5.png', position: 5, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/6.png', position: 6, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/7.png', position: 7, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/8.png', position: 8, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/9.png', position: 9, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/10.png', position: 10, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/11.png', position: 11, alt: 'string', first: false, last: false },
//    { src: '../assets/images/dev/desktop/12.png', position: 12, alt: 'string', first: false, last: false },
//  ] 

brands: Button[] = [
  {
    route: 'works/development/xubox',
    img: '../assets/images/dev/xubox/logo/xubox_logo.png',
    title: 'Xubox',
    text: 'Logo Xubox',
  },
  {
    route: 'works/development/qx',
    img: '../assets/images/dev/qx/qx_logo.png',
    title: 'Logística',
    text: 'Logo de QX Logística',
  }
]
 
  constructor(private router: Router) {}

  ngOnInit() {
    this.topFunction();
  }
   
 /* ----------- MÉTODOS ----------- */
 topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 
 routeBack() {    
   this.router.navigateByUrl('works/design/ux-ui')
 }

 

}
