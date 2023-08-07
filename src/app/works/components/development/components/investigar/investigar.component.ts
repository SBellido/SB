import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/models/models';

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
 imagesList : string[] = [
  '../assets/images/dev/investigar/mobile/0.png',
  '../assets/images/dev/investigar/mobile/1.png',
  '../assets/images/dev/investigar/mobile/2.png',
  '../assets/images/dev/investigar/mobile/3.png',
  '../assets/images/dev/investigar/mobile/4.png',
  '../assets/images/dev/investigar/mobile/5.png', 
  '../assets/images/dev/investigar/mobile/6.png', 
  '../assets/images/dev/investigar/mobile/7.png', 
  '../assets/images/dev/investigar/mobile/8.png', 
  '../assets/images/dev/investigar/mobile/9.png',
  '../assets/images/dev/investigar/mobile/10.png',
  '../assets/images/dev/investigar/mobile/11.png',
  '../assets/images/dev/investigar/mobile/12.png',
  '../assets/images/dev/investigar/mobile/13.png',
 ]
//  imgGallery_desktop = '../assets/images/dev/desktop/0.png';
//  images_desktop : GalleryImage[] = [
//      '../assets/images/dev/desktop/0.png',
//      '../assets/images/dev/desktop/1.png',
//      '../assets/images/dev/desktop/2.png',
//      '../assets/images/dev/desktop/3.png',
//      '../assets/images/dev/desktop/4.png',
//      '../assets/images/dev/desktop/5.png',
//      '../assets/images/dev/desktop/6.png',
//      '../assets/images/dev/desktop/7.png',
//      '../assets/images/dev/desktop/8.png',
//      '../assets/images/dev/desktop/9.png',
//      '../assets/images/dev/desktop/10.png',
//      '../assets/images/dev/desktop/11.png',
//      '../assets/images/dev/desktop/12.png',
//  ] 

brands: Button[] = [
  {
    route: 'works/development/xubox',
    img: '../assets/images/dev/xubox/logo/xubox_logo.png',
    name: 'Xubox',
    text: 'Logo Xubox',
  },
  {
    route: 'works/development/qx',
    img: '../assets/images/dev/qx/qx_logo.png',
    name: 'Logística',
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
