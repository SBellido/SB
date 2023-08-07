import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button, OptionSelect } from 'src/app/models/models';
import { GalleryComponent } from '../../../gallery/gallery.component';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})

export class CompetitionsComponent implements OnInit {
  @ViewChild('galleryComponent') galleryComponent!: GalleryComponent;
  options: OptionSelect[] = [
    {value: 'imagesList1', view_Text: 'Paciente'},
    {value: 'imagesList2', view_Text: 'Prof. de Salud'},
  ];
  /*--------VARIABLES -------*/ 
  public area: string = 'diseño/gráfico';
  public icon: string = 'local_florist';

  imgGallery = '';
  imagesList : string[] = [] 

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
      '../assets/images/competitions/nescafe/0.png',
      '../assets/images/competitions/nescafe/1.png',
      '../assets/images/competitions/nescafe/2.png',
      '../assets/images/competitions/nescafe/3.png',
      '../assets/images/competitions/nescafe/4.png',
      '../assets/images/competitions/nescafe/5.png',
      '../assets/images/competitions/nescafe/6.png',
      '../assets/images/competitions/nescafe/7.png',
      '../assets/images/competitions/nescafe/8.png',
      '../assets/images/competitions/nescafe/9.png',
      '../assets/images/competitions/nescafe/10.png',
      '../assets/images/competitions/nescafe/11.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  loadImages2() {
    this.imagesList = [
        '../assets/images/competitions/doritos/0.png',
        '../assets/images/competitions/doritos/1.png',
        '../assets/images/competitions/doritos/2.png',
        '../assets/images/competitions/doritos/3.png',
        '../assets/images/competitions/doritos/4.png',
        '../assets/images/competitions/doritos/5.png',
        '../assets/images/competitions/doritos/6.png',
        '../assets/images/competitions/doritos/7.png',
        '../assets/images/competitions/doritos/8.png',
        '../assets/images/competitions/doritos/9.png', 
      ];
      this.imgGallery = this.imagesList[0];
    }
    loadImages3() {
      this.imagesList = [
        '../assets/images/competitions/sweetart/0.png',   
        '../assets/images/competitions/sweetart/1.png',
    ];
      this.imgGallery = this.imagesList[0];
    }
  }

