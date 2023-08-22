import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information, OptionSelect } from 'src/app/models/models';

@Component({
  selector: 'app-travel-log',
  templateUrl: './travel-log.component.html',
  styleUrls: ['./travel-log.component.scss','../../../../../gallery/gallery.component.scss']
})

export class TravelLogComponent implements OnInit {
  /*--------VARIABLES--------*/ 
  imgGallery = '';
  imagesList : string[] = [] 
  /*--------INTERFACES-------*/ 
  information: Information[] = [
    {
      title: 'TravelLog | Web App',
      text: ' Web App que permite crear viajes y planes entre otras funcionalidades extra. En el año 2020 fue realizado este trabajo en el marco de la Cátedra Introducción a las Metodologías Ágiles del Software (TUDAI/FCEx/UniCen), junto a un grupo de compañeros. Sebastián fue encargado de realizar diseño de prototipos, flujos de interacción, diseño de logo, diseño UX | UI, presentación en público y se desempeñó como Scrum Master dentro del equipo. El diseño y desarrollo, incluído, Diagrama de Clases y de Entidad/Relación, se realizó a partir de un texto que simulaba ser un diálogo con el cliente. El objetivo del trabajo era captura requerimientos, trabajar aplicando la metodología ágil Scrum y diseñar una app que cumpla con las expectativas del cliente.',
      subtitle: 'Metodología | Tecnologías',
      tecnologies: [
        {
          href: 'https://www.scrum.org/resources/blog/que-es-scrum',
          src: '../assets/images/tecnologies/scrum.png',
          title: 'Scrum',
          alt: 'Logo de Scrum',
        },
        {
          href: 'https://www.atlassian.com/es/software/jira',
          src: '../assets/images/tecnologies/jira.png',
          title: 'Jira',
          alt: 'Logo de Jira',
        },
        {
          href: 'https://www.invisionapp.com/',
          src: '../assets/images/tecnologies/invision.png',
          title: 'InVision',
          alt: 'Logo de InVision',
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
      route: 'works/design/ux-ui/ypf',
      img: '../assets/images/ux_ui/ypf/YPF_logo.png',
      name: '',
      text: 'Logo de YPF',
      title: 'Gestión de Inversiones | Web App',
    },
    {
      route: 'works/design/ux-ui/v-life',
      img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
      name: '',
      text: 'Logo V-Life',
      title: 'V-LIFE | App Mobile'
    },
    {
      route: 'works/design/ux-ui/nighx',
      img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
      name: '',
      text: 'Logo de Nighx',
      title: 'Nighx | App Mobile'
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
      '../assets/images/ux_ui/travel_log/flujo_1/0.png',
      '../assets/images/ux_ui/travel_log/flujo_1/1.png',
      '../assets/images/ux_ui/travel_log/flujo_1/2.png',
      '../assets/images/ux_ui/travel_log/flujo_1/3.png',
      '../assets/images/ux_ui/travel_log/flujo_1/5.png',
      '../assets/images/ux_ui/travel_log/flujo_1/6.png',
      '../assets/images/ux_ui/travel_log/flujo_1/7.png',
      '../assets/images/ux_ui/travel_log/flujo_1/8.png',
      '../assets/images/ux_ui/travel_log/flujo_1/9.png',
      '../assets/images/ux_ui/travel_log/flujo_1/10.png',
      '../assets/images/ux_ui/travel_log/flujo_1/11.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  loadImages2() {
    this.imagesList = [
      '../assets/images/ux_ui/ypf/asignarComite/2.png',
      '../assets/images/yo.png',
    ];
    this.imgGallery = this.imagesList[0];
  }

}


