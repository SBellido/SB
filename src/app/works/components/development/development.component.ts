import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderSection, ItemsSection } from '../../../models/models';
 
@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss', '../section/section.component.scss']
})

export class DevelopmentComponent implements OnInit {

/*--------VARIABLES -------*/ 
  header: HeaderSection[] = [
    {
    area: 'desarrollo',
    icon: 'developer_mode',
    routerLink: '',
    isFlows: false,
    isSubSection: false
    }
  ];

  sections: ItemsSection[] = [
    {
      title: 'angular',
      visible: false,
      text: 'Framework de ingeniería de software de código abierto que se utiliza para crear aplicaciones web de una sola página. Los desarrolladores también lo utilizan para crear menús animados para páginas web HTML. El framework es una creación de los ingenieros de Google, Misko Hevery y Adam Abrons. Google lanzó oficialmente la primera versión, AngularJS, en 2012 y la ha mantenido desde entonces.',
      disabled: false,
      wordsToHighlight: ['Framework', 'de código abierto', 'para crear aplicaciones web'],
      brandsData: [
        {
          route: 'works/development/investigar',
          img: '../assets/images/dev/investigar/logo_investigar.png',
          name: 'InventigAr',
          text: 'Logo de InventigAr',
        },
        {
          route: 'works/development/xubox',
          img: '../assets/images/dev/xubox/logo/xubox_logo.png',
          name: 'Logística',
          text: 'Logo de Xubox',
        },
        {
          route: 'works/development/qx',
          img: '../assets/images/dev/qx/qx_logo.png',
          name: 'Logística',
          text: 'Logo de QX Logística',
        }
      ],
    },
    {
      title: 'bootstrap',
      visible: false,
      text: 'Bootstrap es un framework front-end que se adapta a la pantalla del dispositivo utilizado por el usuario. Ofrece una gran cantidad de componentes para mejorar la comunicación con el usuario. Diferentes tipos de alerta, carrusel de diapositivas para facilitar la visualización de imágenes, barra de navegación, botones, selectores, menús de navegación, barras de progreso, paginadores entre otros. ',
      disabled: false,
      wordsToHighlight: ['Lorem ipsum dolor', 'adipisicing elit', 'asperiores'],
      brandsData: [
        {
          route: 'works/development/stormtech',
          img: '../assets/images/dev/stormtech/stormtech_logo.png',
          name: 'Stormtech',
          text: 'Logo de Stormtech',
        },
        {
          route: 'works/development/hunt',
          img: '../assets/images/dev/hunt/hunt_logo.png',
          name: 'Hunt',
          text: 'Logo de Hunt',
        }
      ]
    },
    {
      title: 'javascript',
      visible: false,
      text: '',
      disabled: true,
      wordsToHighlight: [],
      brandsData: [],
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {  
    this.topFunction();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  routeTo(route:string) {    
    this.router.navigateByUrl(route);
  }

}

