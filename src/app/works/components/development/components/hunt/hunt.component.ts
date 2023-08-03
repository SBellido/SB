import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-hunt',
  templateUrl: './hunt.component.html',
  styleUrls: ['./hunt.component.scss']
})
export class HuntComponent implements OnInit {

 /*--------VARIABLES -------*/ 
 public area: string = 'desarrollo/bootstrap';
 public icon: string = 'developer_mode';
//  public isMobile: boolean = false;

 imgGallery = '../assets/images/dev/hunt/mobile/0.png';
 imagesList : GalleryImage[] = [
   { src: '../assets/images/dev/hunt/mobile/0.png', position: 0, alt: 'string', first: true, last: false },
   { src: '../assets/images/dev/hunt/mobile/1.png', position: 1, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/2.png', position: 2, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/3.png', position: 3, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/4.png', position: 4, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/5.png', position: 5, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/6.png', position: 6, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/7.png', position: 7, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/8.png', position: 8, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/9.png', position: 9, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/10.png', position: 10, alt: 'string', first: false, last: false },
   { src: '../assets/images/dev/hunt/mobile/11.png', position: 11, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/hunt/mobile/12.png', position: 12, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/hunt/mobile/13.png', position: 13, alt: 'string', first: false, last: true },
   { src: '../assets/images/dev/hunt/mobile/14.png', position: 14, alt: 'string', first: false, last: true },
 ] 

brands: Button[] = [
  {
    route: 'works/development/stormtech',
    img: '../assets/images/dev/stormtech/stormtech_logo.png',
    name: 'Stormtech',
    text: 'Logo de Stormtech',
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


