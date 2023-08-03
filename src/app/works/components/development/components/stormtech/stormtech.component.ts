import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage, Information } from 'src/app/models/models';

@Component({
  selector: 'app-stormtech',
  templateUrl: './stormtech.component.html',
  styleUrls: ['./stormtech.component.scss']
})
export class StormtechComponent implements OnInit {

  currentImageNumber: number = 1;
  public area: string = 'desarrollo/bootstrap';
  public icon: string = 'developer_mode';
  imgGallery: string = '../assets/images/dev/stormtech/desktop/0.png';

  imagesList : GalleryImage[] = [
    { src: '../assets/images/dev/stormtech/desktop/0.png', position: 0, alt: 'string', first: true, last: false },
    { src: '../assets/images/dev/stormtech/desktop/1.png', position: 1, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/2.png', position: 2, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/3.png', position: 3, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/4.png', position: 4, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/5.png', position: 5, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/6.png', position: 6, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/8.png', position: 7, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/7.png', position: 8, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/9.png', position: 9, alt: 'string', first: false, last: true }
  ];
  
  information: Information[] = [
    {
      title: 'angular',
      text: 'Framework de ingeniería de software de código abierto que se utiliza para crear aplicaciones web de una sola página. Los desarrolladores también lo utilizan para crear menús animados para páginas web HTML. El framework es una creación de los ingenieros de Google, Misko Hevery y Adam Abrons. Google lanzó oficialmente la primera versión, AngularJS, en 2012 y la ha mantenido desde entonces.',
      subtitle: 'false',
      tecnologies: [
        {
          href: 'works/development/investigar',
          src: '../assets/images/dev/investigar/logo_investigar.png',
          title: 'InventigAr',
          alt: 'Logo de InventigAr',
        },
        {
          href: 'works/development/xubox',
          src: '../assets/images/dev/xubox/logo/xubox_logo.png',
          title: 'Logística',
          alt: 'Logo de Xubox',
        },
        {
          href: 'works/development/qx',
          src: '../assets/images/dev/qx/qx_logo.png',
          title: 'Logística',
          alt: 'Logo de QX Logística',
        }
      ],
    },
    // {
    //   title: 'bootstrap',
    //   text: 'Bootstrap es un framework front-end que se adapta a la pantalla del dispositivo utilizado por el usuario. Ofrece una gran cantidad de componentes para mejorar la comunicación con el usuario. Diferentes tipos de alerta, carrusel de diapositivas para facilitar la visualización de imágenes, barra de navegación, botones, selectores, menús de navegación, barras de progreso, paginadores entre otros. ',
    //   subtitle: 'false',
    //   tecnologies: [
    //     {
    //       href: 'works/development/stormtech',
    //       src: '../assets/images/dev/stormtech/stormtech_logo.png',
    //       title: 'Stormtech',
    //       alt: 'Logo de Stormtech',
    //     },
    //     {
    //       href: 'works/development/hunt',
    //       src: '../assets/images/dev/hunt/hunt_logo.png',
    //       title: 'Hunt',
    //       alt: 'Logo de Hunt',
    //     }
    //   ]
    // }
  ];

  brands : Button[] = [
    {
      route: 'works/development/hunt',
      img: '../assets/images/dev/hunt/hunt_logo.png',
      name: 'Hunt',
      text: 'Logo de Hunt',
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.topFunction();
    // this.updateButtonStatus();
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
  

}

