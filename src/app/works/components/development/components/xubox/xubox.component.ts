import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-xubox',
  templateUrl: './xubox.component.html',
  styleUrls: ['./xubox.component.scss']
})
export class XuboxComponent implements OnInit {


 /*--------VARIABLES -------*/ 
 public area: string = 'desarrollo';
 public icon: string = 'developer_mode';
//  public isMobile: boolean = false;

 imgGallery = '../assets/images/dev/xubox/mobile/0.png';
 images : GalleryImage[] = [
   { src: '../assets/images/dev/xubox/mobile/0.png', position: 0, alt: 'string', first: true, last: false },
   { src: '../assets/images/dev/xubox/mobile/1.png', position: 1, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/2.png', position: 2, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/3.png', position: 3, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/4.png', position: 4, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/5.png', position: 5, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/6.png', position: 6, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/7.png', position: 7, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/8.png', position: 8, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/9.png', position: 9, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/10.png', position: 10, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/xubox/mobile/11.png', position: 11, alt: 'string', first: false, last: true },
 ] 

brands: Button[] = [
  {
    route: 'works/development/investigar',
    img: '../assets/images/dev/investigar/logo_investigar.png',
    title: 'InventigAr',
    text: 'Logo de InventigAr',
  },
  // {
  //   route: 'works/development/xubox',
  //   img: '../assets/images/dev/xubox/logo/xubox_logo.png',
  //   title: 'Xubox',
  //   text: 'Logo Xubox',
  // },
  {
    route: 'works/development/mabell',
    img: '../assets/images/dev/mabell/mabell_logo.png',
    title: 'Mabell',
    text: 'Logo de Mabell Studio',
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
