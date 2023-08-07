import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';

@Component({
  selector: 'app-qx',
  templateUrl: './qx.component.html',
  styleUrls: ['./qx.component.scss']
})

export class QxComponent implements OnInit {
/*--------VARIABLES -------*/  
  imgGallery = '';
  imagesList : string[] = [];
/*--------INTERFACES-------*/
information: Information[] = [
  {
    title: 'InvestigAr | Web App',
    text: 'Plataforma interactiva que permite gestionar envíos postales, dando la posibilidad de personalizarlos de acuerdo a las necesidades del usuario. Una herramienta flexible y adaptada a los servicios que ofrece la empresa. Consta de un formulario complejo, en cuanto a su implementación, que va guardando los datos cargados y plantea el flujo en una serie de pasos. Los datos a cargar varian de acuerdo a la información cargada hasta el momento. Sebastián se desempeñó como desarrollador Frontend e implementó el alta de perfiles de usuario, cambio de contraseña, login y todo el proceso de carga de datos. El trabajo fue hecho para Stormtech SL en el año 2021 bajo la supervisión del equpo técnico de la empresa. Se implementó de forma paralela con Xubox, trabajando misma lógica y diferentes estilos.',
    subtitle: 'Metodología | Tecnologías',
    tecnologies: [
      {
        href: 'https://angular.io/',
        src: '../assets/images/tecnologies/angular.png',
        title: 'Angular',
        alt: 'Logo de Angular',
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/HTML',
        src: '../assets/images/tecnologies/html.png',
        title: 'HTML5',
        alt: 'Logo de HTML5',
      },
      {
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        src: '../assets/images/tecnologies/css.png',
        title: 'CSS3',
        alt: 'Logo de CSS3',
      },
    ],
  },
];
header: HeaderSection[] = [
  {
  area: 'desarrollo/angular',
  icon: 'developer_mode',
  routerLink: '../../',
  isFlows: true,
  isSubSection: true
  }
]; 
  brands: Button[] = [
    {
      route: 'works/development/investigar',
      img: '../assets/images/dev/investigar/logo_investigar.png',
      name: 'InventigAr',
      text: 'Logo de InventigAr',
    },
    {
      route: 'works/development/xubox',
      img: '../assets/images/dev/xubox/logo/xubox_logo.png',
      name: 'Xubox',
      text: 'Logo Xubox',
    },
  ]
  
    constructor(private router: Router) {}
    ngOnInit() {
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
  loadImages() {
    this.imagesList = [ 
      '../assets/images/dev/qx/0.png',
      '../assets/images/dev/qx/1.png',
      '../assets/images/dev/qx/2.png',
      '../assets/images/dev/qx/3.png',
      '../assets/images/dev/qx/4.png',
      '../assets/images/dev/qx/5.png',
      '../assets/images/dev/qx/6.png',
      '../assets/images/dev/qx/7.png',
      '../assets/images/dev/qx/8.png',
      '../assets/images/dev/qx/9.png',
      '../assets/images/dev/qx/10.png',
      '../assets/images/dev/qx/11.png',
      '../assets/images/dev/qx/12.png',
      '../assets/images/dev/qx/13.png',
      '../assets/images/dev/qx/14.png',
      '../assets/images/dev/qx/15.png',
      '../assets/images/dev/qx/16.png',
      '../assets/images/dev/qx/17.png',
      '../assets/images/dev/qx/18.png',
      '../assets/images/dev/qx/19.png',
      '../assets/images/dev/qx/20.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  

}
