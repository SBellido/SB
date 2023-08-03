import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';
import { GalleryComponent } from '../../../gallery/gallery.component';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})

export class CompetitionsComponent implements OnInit {
  @ViewChild('galleryComponent') galleryComponent!: GalleryComponent;

  /*--------VARIABLES -------*/ 
  public area: string = 'diseño/gráfico';
  public icon: string = 'local_florist';

  imgGallery = '';
  imagesList : GalleryImage[] = [] 

  brands : Button[] = [
    {
      route: 'works/design/brands',
      img: '../assets/images/graph/brands.png',
      name: 'Marcas',
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

  onChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'imagesList') {
      this.loadImages();
    } else if (selectedValue === 'imagesList2') {
      this.loadImages2();
    } else if (selectedValue === 'imagesList3') {
      this.loadImages3();
    }
  }

  loadImages() {
    this.imagesList = [
      { src: '../assets/images/competitions/nescafe/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/competitions/nescafe/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/6.png', position: 6, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/7.png', position: 7, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/8.png', position: 8, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/9.png', position: 9, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/10.png', position: 10, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/11.png', position: 11, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages2() {
    this.imagesList = [
      { src: '../assets/images/competitions/doritos/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/competitions/doritos/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/doritos/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/doritos/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/doritos/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/doritos/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/doritos/6.png', position: 6, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/doritos/7.png', position: 7, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/doritos/8.png', position: 8, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/doritos/9.png', position: 9, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages3() {
    this.imagesList = [
      { src: '../assets/images/competitions/sweetart/0.png', position: 0, alt: 'string', first: true, last: false },   
      { src: '../assets/images/competitions/sweetart/1.png', position: 1, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src;
  }

}