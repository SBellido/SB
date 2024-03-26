import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';
import { LoadingService } from '../../../../../services/loading.service';

@Component({
  selector: 'app-xubox',
  templateUrl: './xubox.component.html',
  styleUrls: ['./xubox.component.scss']
})

export class XuboxComponent implements OnInit {
/*--------VARIABLES -------*/  
  imgGallery = '';
  imagesList : string[] = [];

/*--------INTERFACES-------*/
  information: Information[] = [
    {
      title: 'Xubox | Web App',
      text: 'Plataforma interactiva que permite gestionar envíos postales, dando la posibilidad de personalizarlos de acuerdo a las necesidades del usuario. Una herramienta flexible y adaptada a los servicios que ofrece la empresa. Consta de un formulario complejo, en cuanto a su implementación, que va guardando los datos cargados y plantea el flujo en una serie de pasos. Los datos a cargar varian de acuerdo a la información cargada hasta el momento. Sebastián se desempeñó como desarrollador Frontend e implementó el alta de perfiles de usuario, cambio de contraseña, login y todo el proceso de carga de datos. El trabajo fue hecho para Stormtech SL en el año 2021 bajo la supervisión del equpo técnico de la empresa. Se implementó utilizando Angular 13, Swagger, HTML5 y CSS3. Fue desarrollado de forma paralela con Xubox, trabajando misma lógica y diferentes estilos.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/angular.png',
          title: 'Angular',
          alt: 'Logo de Angular',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/swagger.png',
          title: 'Swagger',
          alt: 'Logo de Swagger',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/html.png',
          title: 'HTML5',
          alt: 'Logo de HTML5',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/css.png',
          title: 'CSS3',
          alt: 'Logo de CSS3',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/bitbucket.png',
          title: 'Bitbucket',
          alt: 'Logo de Bitbucket',
        },
      ],
    },
  ];
  header: HeaderSection[] = [
    {
      area: 'desarrollo/aplicaciones',
      icon: 'developer_mode',
      routerLink: '../../',
      isFlows: true,
      isSubSection: true,
      color: '_dev_color'
    }
  ]; 
  brands: Button[] = [
    {
      route: 'works/development/investigar',
      img: '../assets/images/dev/investigar/logo_investigar.png',
      name: 'InventigAr',
      text: 'Logo de InventigAr',
      title: 'InvestigAr | Web App',
    },
    {
      route: 'works/development/qx',
      img: '../assets/images/dev/qx/qx_logo.png',
      name: 'Logística',
      text: 'Logo de QX Logística',
      title: 'QX Logística | Web App',
    },
    {
      route: 'works/development/portal',
      img: '../assets/images/dev/ruano/portal_logo.png',
      name: 'Gestorías',
      text: 'Logo de Portal de Despachos',
      title: 'Portal de Despachos | Web App',
    },
  ]
 
  constructor(
    private router: Router, 
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.topFunction();
    this.loadImages();
    this.loadingService.setLoadingState(true);
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
    // Simulación de carga de imágenes
    setTimeout(() => {
      this.imagesList = [ 
        '../assets/images/dev/xubox/mobile/0.png',     
        '../assets/images/dev/xubox/mobile/1.png',
        '../assets/images/dev/xubox/mobile/2.png',
        '../assets/images/dev/xubox/mobile/3.png',
        '../assets/images/dev/xubox/mobile/4.png',
        '../assets/images/dev/xubox/mobile/5.png',
        '../assets/images/dev/xubox/mobile/6.png',
        '../assets/images/dev/xubox/mobile/7.png',
        '../assets/images/dev/xubox/mobile/8.png',
        '../assets/images/dev/xubox/mobile/9.png',
        '../assets/images/dev/xubox/mobile/10.png',
        '../assets/images/dev/xubox/mobile/11.png',
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false);
    }, 1300);
  }

}
