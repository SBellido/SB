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

  onChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'imagesList') {
      this.loadImages();
    } else if (selectedValue === 'imagesList2') {
      this.loadImages2();
    }
  }

  loadImages() {
    this.imagesList = [
      { src: '../assets/images/competitions/nescafe/patient/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/competitions/nescafe/patient/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/6.png', position: 6, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/7.png', position: 7, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/8.png', position: 8, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/9.png', position: 9, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/10.png', position: 10, alt: 'string', first: false, last: false },
      { src: '../assets/images/competitions/nescafe/patient/11.png', position: 11, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages2() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/v-life/professional/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/6.png', position: 6, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/7.png', position: 7, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/8.png', position: 8, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/9.png', position: 9, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/10.png', position: 10, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = this.imagesList[0].src;
  }

}