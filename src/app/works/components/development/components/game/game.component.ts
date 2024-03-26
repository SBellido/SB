import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '../../../../../services/loading.service';

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

  imgGallery: string = '../assets/images/dev/zombie/0.png';
  imagesList : string[] = [];

  // La acción de pasar un código de JavaScript a componentes de Angular se denomina "refactorización" o "reestructuración". Esto implica reorganizar y modificar el código existente para adaptarlo al contexto y las convenciones de Angular, como el uso de componentes, directivas, servicios y otras características propias de este framework. La refactorización puede incluir la conversión de funciones y métodos de JavaScript en métodos de componentes, la integración de enlaces de datos, el uso de decoradores para la inyección de dependencias, entre otros ajustes necesarios para aprovechar al máximo las capacidades de Angular.

  information: Information[] = [
    {
      title: 'Zombie 404 | Game Runner',
      text: 'Video Juego desarrollado en el marco de la materia Interfaces de Usuario e Interacción de la Tecnicatura en Desarrollo de Aplicaciones Informáticas (TUDAI) de la Universidad Nacional del Centro de la Provincia de Buenos Aires (UniCen). El práctico consistió en implementar un video juego de tipo "Runner" donde se debía resolver el loop del juego, el movimiento del fondo en capas, las animaciones del personaje (salto, caminata, muerte), la aparición de obstáculos y la detección de la colisión entre los obstáculos en pantalla y el personaje que provoque su muerte. Se agregó sonido y se trabajó en la estética y el diseño del juego, diseñando una identidad visual, sonora y animada (tipografías, color, sonido, botones, efectos de niebla, velocidades) acorde a la estética que proponían las imágenes elegidas desde bancos de la web, en este caso el personaje y el fondo. ',
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
    {
      route: '',
      img: '',
      name: '',
      text: '',
      title: ''
    }
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
  openGame() {
    this.router.navigateByUrl('works/development/game/proyect');
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  routeBack() {    
    this.router.navigateByUrl('works/development/experimental')
  }

  routeTo(route:string) {    
    this.router.navigateByUrl(route);
  }
  
  loadImages() {
    // Simulación de carga de imágenes
    setTimeout(() => {
      this.imagesList = [ 
        '../assets/images/dev/zombie/0.png',    
        '../assets/images/dev/zombie/1.png',    
        '../assets/images/dev/zombie/2.png',    
        '../assets/images/dev/zombie/3.png',    
        '../assets/images/dev/zombie/4.png',    
        '../assets/images/dev/zombie/5.png',    
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false);
    }, 1300);

  }

}

