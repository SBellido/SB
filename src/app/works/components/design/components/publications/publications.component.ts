import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

 
 /*--------VARIABLES -------*/ 
 public area: string = 'diseño/marcas';
 public icon: string = 'local_florist';
//  public isMobile: boolean = false;

 imgGallery = '../assets/images/brands/muy/0.png';
 images : GalleryImage[] = [
   { src: '../assets/images/brands/muy/0.png', position: 0, alt: 'string', first: true, last: false },
   { src: '../assets/images/brands/muy/1.png', position: 1, alt: 'string', first: false, last: false },
   { src: '../assets/images/brands/muy/2.png', position: 2, alt: 'string', first: false, last: false },
   { src: '../assets/images/brands/mdq/0.png', position: 3, alt: 'string', first: false, last: true },
 ] 

brands: Button[] = [
  {
    route: 'works/design/competitions',
    img: '../assets/images/graph/eyeka_logo.png',
    title: 'Stormtech',
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


