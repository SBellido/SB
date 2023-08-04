import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage, HeaderSection, Information } from 'src/app/models/models';

@Component({
  selector: 'app-ypf',
  templateUrl: './ypf.component.html',
  styleUrls: ['./ypf.component.scss']
})

export class YpfComponent implements OnInit {

  routerLink: string = '../../';
  imagesList : GalleryImage[] = [
    { src: '../assets/images/ux_ui/ypf/0/0.png', position: 0, alt: 'string', first: true, last: false },
    { src: '../assets/images/ux_ui/ypf/0/1.png', position: 1, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/ypf/0/2.png', position: 2, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/ypf/0/3.png', position: 3, alt: 'string', first: false, last: true }
  ];
  imgGallery: string = '';
  isImagesListEmpty: boolean = false;
  header: HeaderSection[] = [
    {
     area: 'diseño/ux|ui',
     icon: 'local_florist',
    }
  ];
  information: Information[] = [
    {
      title: 'Gestión de Inversiones | Web App',
      text: 'Web App desktop de alta complejidad, con numerosos roles de usuarios y funcionalidades. <span>Diseñada como herramienta para que YPF gestione sus inversiones de negocio de manera ordenada y coherente. En el año 2022, Sebastián fue encargado de realizar entrevistas con usuarios, análisis de problema, diseño UX | UI, flujo de interacción, diseño de prototipos y presentaciones al cliente. El trabajo fue realizado para Tsoft ocupando el rol de UX/UI Sr. Participó durante un año en el proyecto, diseñó la aplicación y llegó a ocupar el rol de Analista Funcional y Product Owner, por el conocimiento adquirido de la lógica del negocio. El diseño de la app se entregó completo y el proyecto aún se encuenta en etapa de desarrollo.',
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
  brands : Button[] = [
    {
      route: 'works/design/ux-ui/v-life',
      img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
      name: '',
      text: 'Logo V-Life',
    },
    {
      route: 'works/design/ux-ui/nighx',
      img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
      name: '',
      text: 'Logo de Nighx',
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
    this.loadImages0(); 
    this.imgGallery = this.imagesList[0].src;
    this.isImagesListEmpty = this.imagesList.length === 0;
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
      { src: '../assets/images/ux_ui/ypf/0/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/0/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/0/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/0/3.png', position: 3, alt: 'string', first: false, last: true }
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages1() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/1/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/1/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/1/2.png', position: 2, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages2() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/2/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/2/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/2/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/2/3.png', position: 3, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src; // Asigna la primera imagen del arreglo
  }
  loadImages3() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/3/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/3/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/3/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/3/3.png', position: 3, alt: 'string', first: false, last: true },
      { src: '../assets/images/ux_ui/ypf/3/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/3/5.png', position: 5, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src; // Asigna la primera imagen del arreglo
  }
  loadImages4() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/4/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/4/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/6.png', position: 6, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src; // Asigna la primera imagen del arreglo
  }
  loadImages5() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/5/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/5/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/5/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/5/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/5/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/5/5.png', position: 5, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src; // Asigna la primera imagen del arreglo
  }

}

