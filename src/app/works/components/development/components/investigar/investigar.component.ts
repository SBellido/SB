import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';
import { LoadingService } from '../../../../../services/loading.service';

@Component({
  selector: 'app-investigar',
  templateUrl: './investigar.component.html',
  styleUrls: ['./investigar.component.scss']
})

export class InvestigarComponent implements OnInit {
/*--------VARIABLES -------*/  
  imgGallery = '';
  imagesList : string[] = [];

/*--------INTERFACES-------*/ 
  information: Information[] = [
    {
      title: 'InvestigAr | Web App',
      text: 'Plataforma interactiva de investigación multidisciplinaria que tiene como principal objetivo evaluar distintos procesos cognitivos dentro de la sociedad. La finalidad principal es generar estrategias para mejorar la calidad de vida de las personas basadas en evidencias científicas. Lanzada en 2020 en Argentina. Sebastián se encargó de realizar tareas tales como análisis y comprensión del problema, captura de requerimientos, definición de objetivos y estimación de tiempos. Una vez tomadas las decisiones correspondientes, se encargó del diseño del sistema, identidad gráfica e institucional, flujos de interacción y prototipos. Posteriormente, utilizando Angular 10, Firebase, HTML5, CSS3 y JavaScript se llevó a cabo desarrollo, implementación y presentación con el cliente. El proyecto tuvo un seguimiento de más de un año posterior a su despliegue.',
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
          src: '../assets/images/tecnologies/firebase.png',
          title: 'Firebase',
          alt: 'Logo de Firebase',
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
      route: 'works/development/xubox',
      img: '../assets/images/dev/xubox/logo/xubox_logo.png',
      name: 'Xubox',
      text: 'Logo Xubox',
      title: 'Xubox | Web App',
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
  loadImages() {
    // Simulación de carga de imágenes
    setTimeout(() => {
      this.imagesList = [ 
        '../assets/images/dev/investigar/mobile/0.png',
        '../assets/images/dev/investigar/mobile/1.png',
        '../assets/images/dev/investigar/mobile/2.png',
        '../assets/images/dev/investigar/mobile/3.png',
        '../assets/images/dev/investigar/mobile/4.png',
        '../assets/images/dev/investigar/mobile/5.png', 
        '../assets/images/dev/investigar/mobile/6.png', 
        '../assets/images/dev/investigar/mobile/7.png', 
        '../assets/images/dev/investigar/mobile/8.png', 
        '../assets/images/dev/investigar/mobile/9.png',
        '../assets/images/dev/investigar/mobile/10.png',
        '../assets/images/dev/investigar/mobile/11.png',
        '../assets/images/dev/investigar/mobile/12.png',
        '../assets/images/dev/investigar/mobile/13.png',
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false); 
    }, 1300);

  }

  loadImages1() {
    this.imagesList = [ 
      '../assets/images/dev/desktop/0.png',
      '../assets/images/dev/desktop/1.png',
      '../assets/images/dev/desktop/2.png',
      '../assets/images/dev/desktop/3.png',
      '../assets/images/dev/desktop/4.png',
      '../assets/images/dev/desktop/5.png',
      '../assets/images/dev/desktop/6.png',
      '../assets/images/dev/desktop/7.png',
      '../assets/images/dev/desktop/8.png',
      '../assets/images/dev/desktop/9.png',
      '../assets/images/dev/desktop/10.png',
      '../assets/images/dev/desktop/11.png',
      '../assets/images/dev/desktop/12.png',
    ];
    this.imgGallery = this.imagesList[0];
  }

}
