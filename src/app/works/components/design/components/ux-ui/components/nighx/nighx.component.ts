import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information, OptionSelect } from 'src/app/models/models';

@Component({
  selector: 'app-nighx',
  templateUrl: './nighx.component.html',
  styleUrls: ['./nighx.component.scss','../../../../../gallery/gallery.component.scss'],
})

export class NighxComponent implements OnInit {
  /*--------VARIABLES--------*/ 
  public imagesList: string[] = [];
  public selectedOption: string = '';
  public imgGallery: string = '';
  /*--------INTERFACES-------*/ 
  options: OptionSelect[] = [
    {value: 'imagesList1', view_Text: 'Página de inicio'},
    {value: 'imagesList2', view_Text: 'Inicio de Sesión'}
  ];
  information: Information[] = [
    {
      title: 'V-LIFE | App Mobile',
      text: 'App mobile que conecta pacientes con profesionales de la salud. En el año 2019, Sebastián fue encargado de realizar rediseño de marca, diseño UX | UI, flujo de interacciónen baja definición, test con usuarios y armado de prototiposen alta definición, utilizando Adobe Xdy componentes UI Ionic.El trabajo fue realizado para Trenda Software ocupando el rol de UX Design Lead. La app fue lanzada en 2020en Argentina.',
      subtitle: 'Metodología | Tecnologías',
      tecnologies: [
        {
          href: 'https://www.scrum.org/resources/blog/que-es-scrum',
          src: '../assets/images/tecnologies/scrum.png',
          title: 'Scrum',
          alt: 'Logo de Scrum',
        },
        {
          href: 'https://helpx.adobe.com/es/xd/help/adobe-xd-overview.html',
          src: '../assets/images/tecnologies/azure.png',
          title: 'Azure',
          alt: 'Logo de Azure',
        },
        {
          href: 'https://helpx.adobe.com/es/xd/help/adobe-xd-overview.html',
          src: '../assets/images/tecnologies/xd.png',
          title: 'Adobe Xd',
          alt: 'Logo de Adobe Xd',
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
    isSubSection: true
    }
  ];
  brands : Button[] = [
    {
      route: 'works/design/ux-ui/ypf',
      img: '../assets/images/ux_ui/ypf/YPF_logo.png',
      name: '',
      text: 'Logo de YPF',
    },
    {
      route: 'works/design/ux-ui/v-life',
      img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
      name: '',
      text: 'Logo V-Life',
    },
    {
      route: 'works/design/ux-ui/travel-log',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
      name: '',
      text: 'Logo de TravelLog',
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
       '../assets/images/ux_ui/nighx/inicio/0.png',
       '../assets/images/ux_ui/nighx/inicio/1.png',
       '../assets/images/ux_ui/nighx/inicio/2.png',
       '../assets/images/ux_ui/nighx/inicio/3.png',
       '../assets/images/ux_ui/nighx/inicio/4.png',
       '../assets/images/ux_ui/nighx/inicio/5.png',
       '../assets/images/ux_ui/nighx/inicio/6.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  loadImages2() {
    this.imagesList = [
       '../assets/images/ux_ui/nighx/inicio_sesion/0.png',
       '../assets/images/ux_ui/nighx/inicio_sesion/1.png',
       '../assets/images/ux_ui/nighx/inicio_sesion/2.png',
       '../assets/images/ux_ui/nighx/inicio_sesion/3.png',
       '../assets/images/ux_ui/nighx/inicio_sesion/4.png',
       '../assets/images/ux_ui/nighx/inicio_sesion/5.png',
       '../assets/images/ux_ui/nighx/inicio_sesion/6.png',
       '../assets/images/ux_ui/nighx/inicio_sesion/8.png',
       '../assets/images/ux_ui/nighx/inicio_sesion/9.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  onChange(event: any) {
    this.selectedOption = event.value;    
    switch (this.selectedOption) {
      case 'imagesList1':
        this.loadImages();
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


