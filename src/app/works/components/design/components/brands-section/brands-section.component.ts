import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/models/models';
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
  imagesList : string[] = [];

  brands : Button[] = [
    {
      route: 'works/design/competitions',
      img: '../assets/images/graph/eyeka_logo.png',
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

  loadImages() {
    this.imagesList = [
        '../assets/images/brands/0.png',
        '../assets/images/brands/1.png',
        '../assets/images/brands/2.png',
        '../assets/images/brands/3.png',
        '../assets/images/brands/4.png',
        '../assets/images/brands/5.png',
        '../assets/images/brands/6.png',
        '../assets/images/brands/7.png',
        '../assets/images/brands/8.png',
      ];
      this.imgGallery = this.imagesList[0];
    }
    onChange(event: Event) {
      const selectedValue = (event.target as HTMLSelectElement).value;
      if (selectedValue === 'imagesList') {
        this.loadImages();
      } 
    }
  }
