import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information, OptionSelect } from 'src/app/models/models';
import { LoadingService } from '../../../../../../../services/loading.service';

@Component({
  selector: 'app-ypf',
  templateUrl: './ypf.component.html',
  styleUrls: ['./ypf.component.scss']
})

export class YpfComponent implements OnInit {
  /*--------VARIABLES--------*/ 
  public imagesList: string[] = [];
  public selectedOption: string = '';
  public imgGallery: string = '';
  
  /*--------INTERFACES-------*/ 
  options: OptionSelect[] = [
    {value: 'imagesList1', view_Text: 'Nuevo Caso | OPESSA'},
    {value: 'imagesList2', view_Text: 'Crear Caso'},
    {value: 'imagesList3', view_Text: 'Asignar Comité'},
    {value: 'imagesList4', view_Text: 'Cortar Cadena'},
    {value: 'imagesList5', view_Text: 'Administrar Parámetros'},
    {value: 'imagesList6', view_Text: 'Administrar Personal'},
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

  information: Information[] = [
    {
      title: 'Gestión de Inversiones | Web App',
      text: 'Este diseño corresponde a una Web App desktop de alta complejidad, con numerosos roles de usuarios y funcionalidades. Diseñada como herramienta para que YPF gestione sus inversiones de negocio de manera ordenada y coherente. En el año 2022, Sebastián fue encargado de realizar entrevistas con usuarios, análisis de problema, diseño UX | UI, flujo de interacción, diseño de prototipos y presentaciones al cliente. El trabajo fue realizado para Tsoft ocupando el rol de UX/UI Sr. Participó durante un año en el proyecto, diseñó la aplicación y llegó a ocupar el rol de Analista Funcional y Product Owner, por el conocimiento adquirido de la lógica del negocio. El diseño de la app se entregó completo y el proyecto aún se encuentra en etapa de desarrollo.',
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
          src: '../assets/images/tecnologies/azure.png',
          title: 'Azure DevOps',
          alt: 'Logo de Azure',
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

  brands : Button[] = [
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
    {
      route: 'works/design/ux-ui/travel-log',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
      name: '',
      text: 'Logo de TravelLog',
      title: 'TravelLog | Web App'
    },
  ]

  constructor(
    private router: Router, 
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.topFunction();
    this.loadImages0();
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

  routeTo(route:string) {    
    this.router.navigateByUrl(route);
  }

  loadImages0() {
    // Simulación de carga de imágenes
    setTimeout(() => {
      this.imagesList = [ 
        '../assets/images/ux_ui/ypf/0/0.png', 
        '../assets/images/ux_ui/ypf/0/1.png', 
        '../assets/images/ux_ui/ypf/0/2.png', 
        '../assets/images/ux_ui/ypf/0/3.png',      
        '../assets/images/ux_ui/ypf/0/4.png',      
        '../assets/images/ux_ui/ypf/0/5.png',      
        '../assets/images/ux_ui/ypf/0/6.png',      
        '../assets/images/ux_ui/ypf/0/7.png',      
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false);
    }, 1300);
  }

  loadImages1() {
    this.imagesList = [
      '../assets/images/ux_ui/ypf/1/0.png',
      '../assets/images/ux_ui/ypf/1/1.png', 
      '../assets/images/ux_ui/ypf/1/2.png', 
    ];
    this.imgGallery = this.imagesList[0];
  }

  loadImages2() {
    this.imagesList = [
      '../assets/images/ux_ui/ypf/2/0.png',
      '../assets/images/ux_ui/ypf/2/1.png',
      '../assets/images/ux_ui/ypf/2/2.png',
      '../assets/images/ux_ui/ypf/2/3.png',
      '../assets/images/ux_ui/ypf/2/4.png',
      '../assets/images/ux_ui/ypf/2/5.png',
      '../assets/images/ux_ui/ypf/2/6.png',
    ]
    this.imgGallery = this.imagesList[0]; 
  }
  loadImages3() {
    this.imagesList = [
      '../assets/images/ux_ui/ypf/3/0.png',
      '../assets/images/ux_ui/ypf/3/1.png',
      '../assets/images/ux_ui/ypf/3/2.png',
      '../assets/images/ux_ui/ypf/3/3.png',
      '../assets/images/ux_ui/ypf/3/4.png',
      '../assets/images/ux_ui/ypf/3/5.png',
    ];
    this.imgGallery = this.imagesList[0];
  }

  loadImages4() {
    this.imagesList = [
      '../assets/images/ux_ui/ypf/4/0.png',
      '../assets/images/ux_ui/ypf/4/1.png',
      '../assets/images/ux_ui/ypf/4/2.png',
      '../assets/images/ux_ui/ypf/4/3.png',
      '../assets/images/ux_ui/ypf/4/4.png',
      '../assets/images/ux_ui/ypf/4/5.png',
      '../assets/images/ux_ui/ypf/4/6.png',
      '../assets/images/ux_ui/ypf/4/7.png',
    ];
    this.imgGallery = this.imagesList[0];
  }

  loadImages5() {
    this.imagesList = [
      '../assets/images/ux_ui/ypf/5/0.png',
      '../assets/images/ux_ui/ypf/5/1.png',
      '../assets/images/ux_ui/ypf/5/2.png',
      '../assets/images/ux_ui/ypf/5/3.png',
      '../assets/images/ux_ui/ypf/5/4.png',
      '../assets/images/ux_ui/ypf/5/5.png',
      '../assets/images/ux_ui/ypf/5/6.png',
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
      case 'imagesList3':
        this.loadImages2();
        break;
      case 'imagesList4':
        this.loadImages3();
        break;
      case 'imagesList5':
        this.loadImages4();
        break;
      case 'imagesList6':
        this.loadImages5();
        break;
      default:
        // Lógica para el caso por defecto (opcional)
        break;
    }
  }

}

