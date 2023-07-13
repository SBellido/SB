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
 public area: string = 'desarrollo';
 public icon: string = 'developer_mode';

 imgGallery = '../assets/images/dev/mobile/0.png';
 images : GalleryImage[] = [
   { src: '../assets/images/dev/mobile/0.png', position: 0, alt: 'string', first: true, last: false },
   { src: '../assets/images/dev/mobile/1.png', position: 1, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/2.png', position: 2, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/3.png', position: 3, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/4.png', position: 4, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/5.png', position: 5, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/6.png', position: 6, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/7.png', position: 7, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/8.png', position: 8, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/9.png', position: 9, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/10.png', position: 10, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/11.png', position: 11, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/12.png', position: 12, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/mobile/13.png', position: 13, alt: 'string', first: false, last: false },
 ] 

 brands : Button[] = [
   {
    route: 'works/development/investigar',
    img: '../assets/images/dev/investigar/logo_investigar.png',
    title: 'InventigAr',
    text: 'Logo de InventigAr',
   },
   {
     route: 'works/design/ux-ui/v-life',
     img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
     title: 'V-Life',
     text: 'Logo V-Life',
   },
   {
     route: 'works/design/ux-ui/nighx',
     img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
     title: 'Nighx',
     text: 'Logo de Nighx',
   },
   {
     route: 'works/design/ux-ui/travel-log',
     img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
     title: 'TravelLog',
     text: 'Logo de TravelLog',
   },
 ]

 constructor(private router: Router) {
 }

 ngOnInit(): void {
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
