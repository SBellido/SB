import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/models/models';

@Component({
  selector: 'app-xubox',
  templateUrl: './xubox.component.html',
  styleUrls: ['./xubox.component.scss']
})

export class XuboxComponent implements OnInit {

 /*--------VARIABLES -------*/ 
 public area: string = 'desarrollo/angular';
 public icon: string = 'developer_mode';
//  public isMobile: boolean = false;

 imgGallery = '../assets/images/dev/xubox/mobile/0.png';
 imagesList : string[] = [
  '../assets/images/dev/xubox/mobile/0.png',     
  '../assets/images/dev/xubox/mobile/1.png',
  '../assets/images/dev/xubox/mobile/2.png',
  '../assets/images/dev/xubox/mobile/3.png',
  '../assets/images/dev/xubox/mobile/4.png',
  '../assets/images/dev/xubox/mobile/5.png',
  '../assets/images/dev/xubox/mobile/6.png',
  '../assets/images/dev/xubox/mobile/7.png',
  '../assets/images/dev/xubox/mobile/8.png',
  '../assets/images/dev/xubox/mobile/9.png',
  '../assets/images/dev/xubox/mobile/10.png',
  '../assets/images/dev/xubox/mobile/11.png',
 ];
  brands: Button[] = [
    {
      route: 'works/development/investigar',
      img: '../assets/images/dev/investigar/logo_investigar.png',
      name: 'InventigAr',
      text: 'Logo de InventigAr',
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
