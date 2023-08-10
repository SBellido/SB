import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';

@Component({
  selector: 'app-stormtech',
  templateUrl: './stormtech.component.html',
  styleUrls: ['./stormtech.component.scss','../../../../../global/global.component.scss']
})

export class StormtechComponent implements OnInit {
  dev_color: string = '#ffdd57';
  routerLink: string = '../';
  currentImageNumber: number = 1;
  header: HeaderSection[] = [
    {
      area: 'desarrollo/bootstrap',
      icon: 'developer_mode',
      routerLink: '../',
      isFlows: true,
      isSubSection: true,
      color: '_dev_color'
    }
  ];
  options: { value: string, label: string }[] = [
    { value: 'imagesList1', label: 'flujo 1' },
    { value: 'imagesList2', label: 'flujo 2' },
    { value: 'imagesList3', label: 'flujo 3' },
    { value: 'imagesList4', label: 'flujo 4' },
    { value: 'imagesList5', label: 'flujo 5' },
    { value: 'imagesList6', label: 'flujo 6' },
  ];
  imgGallery: string = '../assets/images/dev/stormtech/desktop/0.png';
  imagesList : string[] = [
    '../assets/images/dev/stormtech/desktop/0.png',    
    '../assets/images/dev/stormtech/desktop/1.png',
    '../assets/images/dev/stormtech/desktop/2.png',
    '../assets/images/dev/stormtech/desktop/3.png',
    '../assets/images/dev/stormtech/desktop/4.png',
    '../assets/images/dev/stormtech/desktop/5.png',
    '../assets/images/dev/stormtech/desktop/6.png',
    '../assets/images/dev/stormtech/desktop/8.png',
    '../assets/images/dev/stormtech/desktop/7.png',
    '../assets/images/dev/stormtech/desktop/9.png', 
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
  ];

  brands : Button[] = [
    {
      route: 'works/development/hunt',
      img: '../assets/images/dev/hunt/hunt_logo.png',
      name: 'Hunt',
      text: 'Logo de Hunt',
    }
  ]

  constructor(private router: Router) {}

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

