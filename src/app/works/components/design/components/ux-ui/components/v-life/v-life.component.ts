import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information, OptionSelect } from 'src/app/models/models';

@Component({
  selector: 'app-v-life',
  templateUrl: './v-life.component.html',
  styleUrls: ['./v-life.component.scss','../../../../../gallery/gallery.component.scss']
})

export class VLifeComponent implements OnInit {
  /*--------VARIABLES--------*/ 
  public imagesList: string[] = [];
  public selectedOption: string = '';
  public imgGallery: string = '';
  /*--------INTERFACES-------*/ 
  options: OptionSelect[] = [
    {value: 'imagesList1', view_Text: 'Usuario Paciente'},
    {value: 'imagesList2', view_Text: 'Usuario Médico'}
  ];
  information: Information[] = [
    {
      title: 'V-LIFE | App Mobile',
      text: 'App mobile que conecta pacientes con profesionales de la salud. En el año 2019, Sebastián fue encargado de realizar rediseño de marca, diseño UX | UI, flujo de interacción en baja definición, test con usuarios y armado de prototipos interactivos en alta definición, utilizando Adobe Xd y componentes UI Ionic bajo metodología ágil Scrum. El trabajo fue realizado para Trenda Software ocupando el rol de UX Design Lead. La app fue lanzada en 2020 en Argentina.',
      subtitle: 'Metodología | Tecnologías',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/scrum.png',
          title: 'Scrum',
          alt: 'Logo de Scrum',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/asana.png',
          title: 'Asana',
          alt: 'Logo de Asana',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/ionic.png',
          title: 'UI Ionic',
          alt: 'Logo de Ionic',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/xd.png',
          title: 'Adobe Xd',
          alt: 'Logo de Adobe Xd',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/zeplin.png',
          title: 'Zeplin',
          alt: 'Logo de Zeplin',
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
      route: 'works/design/ux-ui/ypf',
      img: '../assets/images/ux_ui/ypf/YPF_logo.png',
      name: '',
      text: 'Logo de YPF',
      title: 'Gestión de Inversiones | Web App',
    },
    {
      route: 'works/design/ux-ui/nighx',
      img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
      name: '',
      text: 'Logo de Nighx',
      title: 'Nighx | App Mobile'
    },
    {
      route: 'works/design/ux-ui/travel-log',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
      name: '',
      text: 'Logo de TravelLog',
      title: 'TravelLog | Web App'
    },
  ];

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.topFunction();
    this.loadImages0(); 
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
  loadImages0() {
    this.imagesList = [
      '../assets/images/ux_ui/v-life/patient/0.png',
      '../assets/images/ux_ui/v-life/patient/1.png',
      '../assets/images/ux_ui/v-life/patient/2.png',
      '../assets/images/ux_ui/v-life/patient/3.png',
      '../assets/images/ux_ui/v-life/patient/4.png',
      '../assets/images/ux_ui/v-life/patient/5.png',
      '../assets/images/ux_ui/v-life/patient/6.png',
      '../assets/images/ux_ui/v-life/patient/7.png',
      '../assets/images/ux_ui/v-life/patient/8.png',
      '../assets/images/ux_ui/v-life/patient/8_.png',
      '../assets/images/ux_ui/v-life/patient/9.png',
      '../assets/images/ux_ui/v-life/patient/10.png',
      '../assets/images/ux_ui/v-life/patient/12.png',
      '../assets/images/ux_ui/v-life/patient/14.png',
      '../assets/images/ux_ui/v-life/patient/13.png',
      '../assets/images/ux_ui/v-life/patient/15.png',
      '../assets/images/ux_ui/v-life/patient/16.png',
      '../assets/images/ux_ui/v-life/patient/13.png',
      '../assets/images/ux_ui/v-life/patient/17.png',
      '../assets/images/ux_ui/v-life/patient/18.png',
      '../assets/images/ux_ui/v-life/patient/19.png',
      '../assets/images/ux_ui/v-life/patient/13.png',
      '../assets/images/ux_ui/v-life/patient/20.png', 
      '../assets/images/ux_ui/v-life/patient/21.png',
      '../assets/images/ux_ui/v-life/patient/22.png',
      '../assets/images/ux_ui/v-life/patient/23.png', 
      '../assets/images/ux_ui/v-life/patient/24.png',
      '../assets/images/ux_ui/v-life/patient/25.png', 
      '../assets/images/ux_ui/v-life/patient/26.png',
      '../assets/images/ux_ui/v-life/patient/20.png',
      '../assets/images/ux_ui/v-life/patient/27.png',
      '../assets/images/ux_ui/v-life/patient/28.png',
      '../assets/images/ux_ui/v-life/patient/29.png',
      '../assets/images/ux_ui/v-life/patient/30.png',
      '../assets/images/ux_ui/v-life/patient/31.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  loadImages1() {
    this.imagesList = [
       '../assets/images/ux_ui/v-life/professional/0.png',
       '../assets/images/ux_ui/v-life/professional/1.png',
       '../assets/images/ux_ui/v-life/professional/2.png',
       '../assets/images/ux_ui/v-life/professional/3.png',
       '../assets/images/ux_ui/v-life/professional/4.png',
       '../assets/images/ux_ui/v-life/professional/5.png',
       '../assets/images/ux_ui/v-life/professional/6.png',
       '../assets/images/ux_ui/v-life/professional/7.png',
       '../assets/images/ux_ui/v-life/professional/8.png',
       '../assets/images/ux_ui/v-life/professional/9.png',
       '../assets/images/ux_ui/v-life/professional/10.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  onChange(event: any) {
    this.selectedOption = event.value;    
    switch (this.selectedOption) {
      case 'imagesList1':
        this.loadImages0();
        break;
      case 'imagesList2':
        this.loadImages1();
        break;
      default:
        // Lógica para el caso por defecto (opcional)
        break;
    }
  }
}

