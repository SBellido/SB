import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information, OptionSelect } from 'src/app/models/models';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})

export class CompetitionsComponent implements OnInit {
/*--------VARIABLES--------*/ 
  public imagesList: string[] = [];
  public selectedOption: string = '';
  public imgGallery: string = '';
/*--------INTERFACES-------*/ 
  options: OptionSelect[] = [
    {value: 'imagesList', view_Text: 'Nescafé'},
    {value: 'imagesList1', view_Text: 'Doritos'},
    {value: 'imagesList2', view_Text: 'SweetTart'},
  ];
  information: Information[] = [
    {
      title: 'eYeka! | Concursos Internacionales',
      text: 'Participar en concursos internacionales puede ser una excelente manera de adquirir experiencia trabajando en el diseño para grandes marcas. Además, de expresar creatividad y practicar habilidades. También para obtener retroalimentación sobre el trabajo por parte de las marcas y aprender de otros participantes. eYeka es una comunidad global de creadores talentosos que aman resolver los desafíos de las marcas con ideas frescas, creativas y contenido compartible. Los creadores en eYeka compiten para resolver problemas comerciales reales de las marcas más grandes del mundo para ganar fama y fortuna, mientras se divierten.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: 'https://www.adobe.com/la/products/photoshop/free-trial-download.html',
          src: '../assets/images/tecnologies/photoshop.png',
          title: 'Photoshop',
          alt: 'Logo de Photoshop',
        },
        {
          href: 'https://www.adobe.com/es/products/illustrator/free-trial-download.html',
          src: '../assets/images/tecnologies/illustrator.png',
          title: 'Illustrator',
          alt: 'Logo de Illustrator',
        }
      ],
    },
  ];
  header: HeaderSection[] = [
    {
      area: 'diseño/ux|ui',
      icon: 'local_florist',
      routerLink: '../../',
      isFlows: true,
      isSubSection: true,
      color: '_design_color'
    }
  ];
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
  loadImages1() {
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
    loadImages2() {
      this.imagesList = [
        '../assets/images/competitions/sweetart/0.png',   
        '../assets/images/competitions/sweetart/1.png',
    ];
      this.imgGallery = this.imagesList[0];
    }

    onChange(event: any) {
      this.selectedOption = event.value;    
      switch (this.selectedOption) {
        case 'imagesList':
          this.loadImages();
          break;
        case 'imagesList1':
          this.loadImages1();
          break;
        case 'imagesList2':
          this.loadImages2();
          break;
        default:
          // Lógica para el caso por defecto (opcional)
          break;
      }
    }
  }

