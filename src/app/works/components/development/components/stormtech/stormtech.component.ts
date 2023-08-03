import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage, HeaderSection, Information } from 'src/app/models/models';

@Component({
  selector: 'app-stormtech',
  templateUrl: './stormtech.component.html',
  styleUrls: ['./stormtech.component.scss']
})

export class StormtechComponent implements OnInit {

  currentImageNumber: number = 1;
  header: HeaderSection[] = [
    {
     area: 'desarrollo/bootstrap',
     icon: 'developer_mode'
    }
  ];
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
      title: 'Stormtech | Landing Page',
      text: '  Durante los años 2020, 2021 y 2022, Sebastián integra el equipo de desarrollo de Stormtech SL. Participó en varios proyectos como Desarrollador Frontend y Diseñador UX/UI. Una de las tareas asignadas fue rediseñar el sitio oficial de la compañia. Se definieron tecnologías como Bootstrap y JavaScript por la simplicidad del proyecto, la velocidad con la que se lo necesitaba activo y por no ser un producto que requiera gran escalabilidad. Es una Landing Page mobile first, simple y ordenada que muestra los servicios que ofrece la compañía, los clientes con los que ha trabajado, las tecnologías que utilizan en sus desarrollos y un formulario de contacto.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: 'https://getbootstrap.com/',
          src: '../assets/images/tecnologies/bootstrap.png',
          title: 'Bootstrap',
          alt: '"Logo de Boostrap',
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
        {
          href: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
          src: '../assets/images/tecnologies/js.png',
          title: 'JavaScript',
          alt: 'Logo de JavaScript',
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

