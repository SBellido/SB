import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss','../../../../../global/global.component.scss']
})

export class GameComponent implements OnInit {
  dev_color: string = '#ffdd57';
  routerLink: string = '../';
  currentImageNumber: number = 1;
  header: HeaderSection[] = [
    {
      area: 'desarrollo/experimental',
      icon: 'developer_mode',
      routerLink: '../',
      isFlows: true,
      isSubSection: true,
      color: '_dev_color'
    }
  ];

  imgGallery: string = '../assets/images/dev/game/0.png';
  imagesList : string[] = [
    '../assets/images/dev/game/0.png',    
  ];
  information: Information[] = [
    {
      title: 'Zombie 404 | Game Runner',
      text: '  Durante los años 2020, 2021 y 2022, Sebastián integra el equipo de desarrollo de Stormtech SL. Participó en varios proyectos como Desarrollador Frontend y Diseñador UX/UI. Una de las tareas asignadas fue rediseñar el sitio oficial de la compañia. Se definieron tecnologías como Bootstrap y JavaScript por la simplicidad del proyecto, la velocidad con la que se lo necesitaba activo y por no ser un producto que requiera gran escalabilidad. Es una Landing Page mobile first, simple y ordenada que muestra los servicios que ofrece la compañía, los clientes con los que ha trabajado, las tecnologías que utilizan en sus desarrollos y un formulario de contacto.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/bootstrap.png',
          title: 'Bootstrap',
          alt: '"Logo de Boostrap',
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
        {
          href: '',
          src: '../assets/images/tecnologies/github.png',
          title: 'GitHub',
          alt: 'Logo de GitHub',
        },
      ],
    },
  ];

  brands : Button[] = [
    // {
    //   route: 'works/development/hunt',
    //   img: '../assets/images/dev/hunt/hunt_logo.png',
    //   name: 'Hunt',
    //   text: 'Logo de Hunt',
    //   title: ''
    // }
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

