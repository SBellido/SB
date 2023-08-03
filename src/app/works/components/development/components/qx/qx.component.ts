import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-qx',
  templateUrl: './qx.component.html',
  styleUrls: ['./qx.component.scss']
})

export class QxComponent implements OnInit {

 /*--------VARIABLES -------*/ 
 public area: string = 'desarrollo/angular';
 public icon: string = 'developer_mode';
//  public isMobile: boolean = false;

 imgGallery = '../assets/images/dev/qx/0.png';
 imagesList : GalleryImage[] = [
   { src: '../assets/images/dev/qx/0.png', position: 0, alt: 'string', first: true, last: false },
   { src: '../assets/images/dev/qx/1.png', position: 1, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/2.png', position: 2, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/3.png', position: 3, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/4.png', position: 4, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/5.png', position: 5, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/6.png', position: 6, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/7.png', position: 7, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/8.png', position: 8, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/9.png', position: 9, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/10.png', position: 10, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/qx/11.png', position: 11, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/qx/12.png', position: 12, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/qx/13.png', position: 13, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/qx/14.png', position: 14, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/qx/15.png', position: 15, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/qx/16.png', position: 16, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/qx/17.png', position: 17, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/qx/18.png', position: 18, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/qx/19.png', position: 19, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/qx/20.png', position: 20, alt: 'string', first: false, last: true },
 ] 

brands: Button[] = [
  {
    route: 'works/development/investigar',
    img: '../assets/images/dev/investigar/logo_investigar.png',
    name: 'InventigAr',
    text: 'Logo de InventigAr',
  },
  {
    route: 'works/development/xubox',
    img: '../assets/images/dev/xubox/logo/xubox_logo.png',
    name: 'Xubox',
    text: 'Logo Xubox',
  },
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
