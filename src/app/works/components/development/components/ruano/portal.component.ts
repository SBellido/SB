import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';
import { LoadingService } from '../../../../../services/loading.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss','../../../../../global/global.component.scss']
})

export class PortalComponent implements OnInit {
  /*--------VARIABLES -------*/  
  imgGallery = '';
  imagesList : string[] = [];
  dev_color: string = '#ffdd57';
  routerLink: string = '../';
  currentImageNumber: number = 1;

  /*--------INTERFACES-------*/
  header: HeaderSection[] = [
    {
      area: 'desarrollo/aplicaciones',
      icon: 'developer_mode',
      routerLink: '../',
      isFlows: true,
      isSubSection: true,
      color: '_dev_color'
    }
  ];

  information: Information[] = [
    {
      title: 'Portal de Despachos | Web App',
      text: 'Durante parte de 2023 y 2024, Sebastián fue parte del equipo de desarrollo de Ruano Informática, donde desempeñó el rol de Frontend, para un producto específico llamado  "Portal de Despachos". El mismo abordaba resolver problemáticas asociadas a la lógica de negocio que involucra a Gestorías de España. Fue necesario incorporar dicho modelo de negocio para resolver interfaces intuitivas y simples, llevar a cabo el análisis funcional correspondiente y documentado, prototipado de interfaces, diseño de diagrama de componentes e implementación de los mismos. Este software utiliza React y devExtreme para su implementación frontend. Al ingresar, en este proyecto existían innumerables fallas que debieron ser refactorizadas dentro de una estructura de código que imponía muchas malas prácticas. Para la implementación de nuevas secciones se crearon componentes que cambiaron el paradigma implementado hasta el momento, mejorándolo en escalabilidad y robustez.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/react.png',
          title: 'React',
          alt: '"Logo de React',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/devextreme.png',
          title: 'DevExtreme',
          alt: 'Logo de DevExtreme',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/swagger.png',
          title: 'Swagger',
          alt: 'Logo de Swagger',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/devops.png',
          title: 'Azure devops',
          alt: 'Logo de Azure devops',
        },
      ],
    },
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
      route: 'works/development/xubox',
      img: '../assets/images/dev/xubox/logo/xubox_logo.png',
      name: 'Xubox',
      text: 'Logo Xubox',
      title: 'Xubox | Web App',

    },
    {
      route: 'works/development/qx',
      img: '../assets/images/dev/qx/qx_logo.png',
      name: 'Qx Logística',
      text: 'Logo Portal de Qx Logística',
      title: 'QX Logística | Web App',
    },
  ]

  constructor(
    private router: Router, 
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.topFunction();
    this.loadImages();
    this.loadingService.setLoadingState(true);
  }
  
/* ----------- MÉTODOS ----------- */
  preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }

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
    // Simulación de carga de imágenes
    setTimeout(() => {
      this.imagesList = [ 
        '../assets/images/dev/ruano/desktop/00.png',    
        '../assets/images/dev/ruano/desktop/0.png',    
        '../assets/images/dev/ruano/desktop/1.png',
        '../assets/images/dev/ruano/desktop/2.png',
        '../assets/images/dev/ruano/desktop/3.png',
        '../assets/images/dev/ruano/desktop/4.png',
        '../assets/images/dev/ruano/desktop/5.png',
        '../assets/images/dev/ruano/desktop/6.png',
        '../assets/images/dev/ruano/desktop/7.png',
        '../assets/images/dev/ruano/desktop/8.png',
        '../assets/images/dev/ruano/desktop/9.png', 
        '../assets/images/dev/ruano/desktop/11.png', 
        '../assets/images/dev/ruano/desktop/12.png', 
        '../assets/images/dev/ruano/desktop/13.png', 
        '../assets/images/dev/ruano/desktop/14.png', 
        '../assets/images/dev/ruano/desktop/15.png', 
        '../assets/images/dev/ruano/desktop/16.png', 
        '../assets/images/dev/ruano/desktop/17.png', 
        '../assets/images/dev/ruano/desktop/18.png', 
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false);
    }, 1300);
  }

}

