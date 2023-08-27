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
      title: 'Nighx | App Mobile',
      text: 'Nighx es un servicio de streaming que ofrece ver series y películas en un dispositivo con conexión a internet. En el año 2019, Sebastián fue encargado de realizar diseño de marca y prototipos, flujos de interacción, aplicación de patrones de diseño, diseño UX | UI y presentación en público. Trabajo realizado en el marco de la Cátedra Interfaces de Usuario e Interacción (TUDAI/FCEx/UniCen), junto a Germán Wivaux y Pablo Santa María. Durante 2020 y 2021, tras ser convocado y ganar concurso, se desempeñó como ayudante alumno en dicha Cátedra.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/xd.png',
          title: 'Adobe Xd',
          alt: 'Logo de Adobe Xd',
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
          src: '../assets/images/tecnologies/js.png',
          title: 'JavaScript',
          alt: 'Logo de JavaScript',
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
      route: 'works/design/ux-ui/v-life',
      img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
      name: '',
      text: 'Logo V-Life',
      title: 'V-LIFE | App Mobile'
    },
    {
      route: 'works/design/ux-ui/travel-log',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
      name: '',
      text: 'Logo de TravelLog',
      title: 'TravelLog | Web App'
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


