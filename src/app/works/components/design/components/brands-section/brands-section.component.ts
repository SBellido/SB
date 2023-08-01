import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';
import { GalleryComponent } from '../../../gallery/gallery.component';

@Component({
  selector: 'app-brands-section',
  templateUrl: './brands-section.component.html',
  styleUrls: ['./brands-section.component.scss', '../../../gallery-polaroid/gallery-polaroid.component.scss']
})

export class BrandsSectionComponent implements OnInit {

  @ViewChild('galleryComponent') galleryComponent!: GalleryComponent;

  /*--------VARIABLES -------*/ 
  public area: string = 'diseño/gráfico';
  public icon: string = 'local_florist';

  imgGallery = '../assets/images/brands/0.png';
  imagesList : GalleryImage[] = [];

  brands : Button[] = [
    {
      route: 'works/design/competitions',
      img: '../assets/images/graph/eyeka_logo.png',
      title: 'Marcas',
      text: 'Logo de Marca Registrada',
    },
  ]
 
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.topFunction();
    this.loadImages(); 
  }
  
/* ----------- MÉTODOS ----------- */
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  routeBack() {    
    this.router.navigateByUrl('works/design/ux-ui')
  }
  routeTo(route:string) {    
    this.router.navigateByUrl(route);
  }

  loadImages() {
    this.imagesList = [
      { src: '../assets/images/brands/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/brands/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/brands/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/brands/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/brands/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/brands/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/brands/6.png', position: 6, alt: 'string', first: false, last: false },
      { src: '../assets/images/brands/7.png', position: 7, alt: 'string', first: false, last: false },
      { src: '../assets/images/brands/8.png', position: 8, alt: 'string', first: false, last: true }
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  
  onChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'imagesList') {
      this.loadImages();
    } 
  }

}