import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';
import { LoadingService } from '../../../../../services/loading.service';

@Component({
  selector: 'app-hunt',
  templateUrl: './hunt.component.html',
  styleUrls: ['./hunt.component.scss']
})

export class HuntComponent implements OnInit {
/*--------VARIABLES -------*/  
  imgGallery = '';
  imagesList : string[] = [];

/*--------INTERFACES-------*/ 
  information: Information[] = [
    {
      title: 'Hunt | Landing Page',
      text: 'Sitio web desarrollado en 2021 por Sebastián utilizando Bootstrap y JavaScript Hunt es un producto desarrollado en Angular, del cual también formó parte como Desarrollador Frontend, pero no hay registro visual de ello. En este producto se encargó de trabajar el concepto de marca, crear la nomenclatura del producto, diseñar logotipo, imagen corporativa y desarrollo de Landing Page first mobile, con animaciones CSS3 en todas las imágenes del home. Es un sitio estático que muestra los servicios que ofrece, la posibilidad de contactar al proveedor y solicitar una demo a partir del uso de un formulario. Fue diseñado y desarrollado para Stormtech SL.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/bootstrap.png',
          title: 'Bootstrap',
          alt: 'Logo de Bootstrap',
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
        },
      ],
    },
  ];

  header: HeaderSection[] = [
    {
    area: 'desarrollo/webs',
    icon: 'developer_mode',
    routerLink: '../../',
    isFlows: true,
    isSubSection: true,
    color: '_dev_color'
    }
  ];

  brands: Button[] = [
    {
      route: 'works/development/stormtech',
      img: '../assets/images/dev/stormtech/stormtech_logo.png',
      name: 'Stormtech',
      text: 'Logo de Stormtech',
      title: 'Stormtech SL'
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
        '../assets/images/dev/hunt/mobile/0.png',
        '../assets/images/dev/hunt/mobile/1.png',
        '../assets/images/dev/hunt/mobile/2.png',
        '../assets/images/dev/hunt/mobile/3.png',
        '../assets/images/dev/hunt/mobile/4.png',
        '../assets/images/dev/hunt/mobile/5.png',
        '../assets/images/dev/hunt/mobile/6.png',
        '../assets/images/dev/hunt/mobile/7.png',
        '../assets/images/dev/hunt/mobile/8.png',
        '../assets/images/dev/hunt/mobile/9.png',
        '../assets/images/dev/hunt/mobile/10.png',
        '../assets/images/dev/hunt/mobile/11.png',
        '../assets/images/dev/hunt/mobile/12.png',
        '../assets/images/dev/hunt/mobile/13.png',
        '../assets/images/dev/hunt/mobile/14.png',
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false);
    }, 1300);

  }

}


