import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/models/models';

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
 imagesList : string[] = [
  '../assets/images/dev/qx/0.png',
  '../assets/images/dev/qx/1.png',
  '../assets/images/dev/qx/2.png',
  '../assets/images/dev/qx/3.png',
  '../assets/images/dev/qx/4.png',
  '../assets/images/dev/qx/5.png',
  '../assets/images/dev/qx/6.png',
  '../assets/images/dev/qx/7.png',
  '../assets/images/dev/qx/8.png',
  '../assets/images/dev/qx/9.png',
  '../assets/images/dev/qx/10.png',
  '../assets/images/dev/qx/11.png',
  '../assets/images/dev/qx/12.png',
  '../assets/images/dev/qx/13.png',
  '../assets/images/dev/qx/14.png',
  '../assets/images/dev/qx/15.png',
  '../assets/images/dev/qx/16.png',
  '../assets/images/dev/qx/17.png',
  '../assets/images/dev/qx/18.png',
  '../assets/images/dev/qx/19.png',
  '../assets/images/dev/qx/20.png',
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
