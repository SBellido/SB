import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsSection } from '../../../models/models';
 
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})

export class DesignComponent implements OnInit {

  /*--------VARIABLES -------*/ 
  // @HostListener('window:resize', ['$event'])
  //   onResize(event: any) {
  //     this.checkScreenSize();
  // }

  public area: string = 'diseño';
  public icon: string = 'local_florist';

  sections: ItemsSection[] = [
    {
      title: 'ux | ui',
      visible: false,
      text: 'UX, se enfoca en la relación humano/máquina. Evolución de la ergonomía, el diseño juega un papel protagónico buscando la satisfacción de quienes interactúan con un sistema, producto o entorno. Garantiza interacciones intuitivas, eficientes y gratificantes. UI, define la forma, función, utilidad, ergonomía, imagen de marca y otros aspectos que impactan la apariencia de interfaces en sistemas. Crea interfaces atractivas, funcionales y coherentes, facilitando la interacción del usuario con el producto o servicio. Combina con UX para una experiencia completa y satisfactoria.',
      disabled: false,
      wordsToHighlight: ['Framework', 'de código abierto', 'para crear aplicaciones web'],
      brandsData: [
        {
          route: 'works/design/ux-ui/ypf',
          img: '../assets/images/ux_ui/ypf/YPF_logo.png',
          title: 'YPF',
          text: 'Logo de YPF',
        },
        {
          route: 'works/design/ux-ui/v-life',
          img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
          title: 'V-Life',
          text: 'Logo V-Life',
        },
        {
          route: 'works/design/ux-ui/nighx',
          img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
          title: 'Nighx',
          text: 'Logo de Nighx',
        },
        {
          route: 'works/design/ux-ui/travel-log',
          img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
          title: 'TravelLog',
          text: 'Logo de TravelLog',
        },
      ],
    },
    {
      title: 'gráfico',
      visible: false,
      text: 'Profesión que proyecta comunicación visual para transmitir mensajes específicos a grupos sociales con objetivos determinados. Genera identidad visual en productos o servicios, creando un discurso de marca homogéneo. Desde logos y branding hasta diseño editorial y publicitario, el diseño gráfico es esencial para establecer conexiones emocionales y destacar en un mercado competitivo. Utiliza la creatividad y estética para contar historias, comunicar ideas y construir la imagen de una marca. Abarca áreas empresariales, artísticas y culturales.',
      disabled: false,
      wordsToHighlight: ['Lorem ipsum dolor', 'adipisicing elit', 'asperiores'],
      brandsData: [
        {
          route: 'works/design/brands',
          img: '../assets/images/graph/brands.png',
          title: 'Marcas',
          text: 'Logo de Marca Registrada',
        },
        {
          route: 'works/design/competitions',
          img: '../assets/images/graph/eyeka_logo.png',
          title: 'Concursos',
          text: 'Logo de Eyeka',
        },
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

  // checkScreenSize() {
  //   this.visibleUx_Ui = window.innerWidth >= 1024;
  //   this.visibleGraphic = window.innerWidth >= 1024;
  //   // this.visibleExperimental = window.innerWidth >= 1024;
  // }


