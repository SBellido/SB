import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';
import { LoadingService } from '../../../../../services/loading.service';

@Component({
  selector: 'app-platzi-react',
  templateUrl: './platzi-react.component.html',
  styleUrls: ['./platzi-react.component.scss']
})

export class PlatziReact implements OnInit {
/*--------VARIABLES -------*/  
  imgGallery = '';
  imagesList : string[] = [];

/*--------INTERFACES-------*/ 
  information: Information[] = [
    {
      title: 'TO-DO Machine | Curso Platzi',
      text: 'Dictado por el instructor Juan DC, desde la plataforma de formación Platzi. Durante este curso, Sebastián exploró los fundamentos y las técnicas avanzadas de React.js, aprendiendo a crear componentes reutilizables, gestionar el estado de la aplicación y construir interfaces de usuario dinámicas. El curso proporcionó una sólida base en el desarrollo web utilizando React.js, incorporando las habilidades necesarias para enfrentar proyectos desafiantes en este campo. La aplicación TO-DO Machine esta desplegada en GitHub pages y se puede visitar haciendo click en el botón "probar app".',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/react.png',
          title: 'React',
          alt: 'Logo de React',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/css.png',
          title: 'CSS3',
          alt: 'Logo de CSS3',
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

  header: HeaderSection[] = [
    {
    area: 'desarrollo/prácticas',
    icon: 'developer_mode',
    routerLink: '../../',
    isFlows: true,
    isSubSection: true,
    color: '_dev_color'
    }
  ];

  brands: Button[] = [
    {
      route: 'works/development/game',
      img: '../assets/images/dev/zombie/zombie_logo.png',
      name: 'Zombie 404',
      text: 'Logo de Zombie 404',
      title: 'Game Runner'
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
  
  openApp() {
    window.open('https://sbellido.github.io/todo-machine/', '_blank');
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
        '../assets/images/dev/platzi-react/0.png',
        '../assets/images/dev/platzi-react/1.png',
        '../assets/images/dev/platzi-react/2.png',
        '../assets/images/dev/platzi-react/3.png',
        '../assets/images/dev/platzi-react/4.png',
        '../assets/images/dev/platzi-react/5.png',
        '../assets/images/dev/platzi-react/6.png',
        '../assets/images/dev/platzi-react/7.png',
        '../assets/images/dev/platzi-react/8.png',
        '../assets/images/dev/platzi-react/9.png',
        '../assets/images/dev/platzi-react/10.png',
        '../assets/images/dev/platzi-react/11.png',
        '../assets/images/dev/platzi-react/12.png',
        '../assets/images/dev/platzi-react/13.png',
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false);
    }, 1300);

  }

}


