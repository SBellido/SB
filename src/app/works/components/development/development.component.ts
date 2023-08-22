import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderSection, ItemsSection } from '../../../models/models';
 
@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss', '../section/section.component.scss']
})

export class DevelopmentComponent implements OnInit {
  parentColor: string = 'linear-gradient(0deg, #ffdc51 33%, #fff7d8 100%)'; 
  parentColorHover: string = 'linear-gradient(0deg, #fbe9a2 33%, #fff7d8 100%)'; 
  /*--------VARIABLES -------*/ 

header: HeaderSection[] = [
    {
      area: 'desarrollo',
      icon: 'developer_mode',
      routerLink: '',
      isFlows: false,
      isSubSection: false,
      color: '_dev_color'
    }
  ];

  sections: ItemsSection[] = [
    {
      title: 'angular',
      visible: false,
      text: 'Angular es un framework de desarrollo front-end ampliamente utilizado que permite crear aplicaciones web dinámicas y de una sola página de manera eficiente. Basado en TypeScript, ofrece una estructura robusta y modular para construir interfaces interactivas y escalables. Angular simplifica la gestión de estados, la manipulación del DOM y la creación de componentes reutilizables. Además, facilita la interacción con servicios web y APIs, permitiendo la construcción de aplicaciones en tiempo real. Su enfoque en la arquitectura MVC (Modelo-Vista-Controlador) y la programación reactiva brindan una base sólida para desarrollar experiencias web modernas y altamente funcionales.',
      disabled: false,
      wordsToHighlight: ['Framework', 'de código abierto', 'para crear aplicaciones web'],
      isHovered: false,
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
      text: 'Bootstrap es un framework front-end de código abierto que simplifica el proceso de diseño y desarrollo de sitios web y aplicaciones. Proporciona un conjunto de herramientas preestablecidas, componentes y estilos de diseño responsivo que permiten a los desarrolladores crear interfaces visuales atractivas y adaptables de manera eficiente. Al aprovechar las clases CSS y los componentes reutilizables, Bootstrap agiliza la creación de diseños consistentes y funcionales, optimizados para distintos dispositivos y tamaños de pantalla. Su enfoque en la estructura modular y la adaptabilidad lo convierte en una herramienta esencial para construir interfaces modernas y atractivas en el mundo de la programación web.',
      disabled: false,
      isHovered: false,
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
      isHovered: false,
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

