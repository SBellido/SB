import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../../../global/components/popup/popup.component';

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
    '../assets/images/dev/game/1.png',    
    '../assets/images/dev/game/2.png',    
    '../assets/images/dev/game/3.png',    
  ];

  information: Information[] = [
    {
      title: 'Zombie 404 | Game Runner',
      text: 'Video Juego desarrollado en el marco de la materia Interfaces de Usuario e Interacción de la Tecnicatura en Desarrollo de Aplicaciones Informáticas (TUDAI) de la Universidad Nacional del Centro de la Provincia de Buenos Aires (UniCen). El práctico consistió en implementar un video juego de tipo "Runner" donde se debía resolver el loop del juego, el movimiento del fondo en capas, las animaciones del personaje (salto, caminata, muerte), la aparición de obstáculos y la detección de la colisión entre los obstáculos en pantalla y el personaje que provoque su muerte. Se agregó snido y se trabajó en la estética y el diseño del juego.',
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

  constructor(private router: Router, private dialog: MatDialog) { }

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '600px', // Ajusta el ancho según tus necesidades
      data: { /* Puedes pasar datos al popup si es necesario */ }
    });

    // Puedes realizar acciones después de que el popup se cierre, si es necesario
    dialogRef.afterClosed().subscribe(result => {
      console.log('El popup se ha cerrado');
    });
  }
  
  ngOnInit(): void {
    this.topFunction();
  console.log("Imagen actual:", this.imgGallery);
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

