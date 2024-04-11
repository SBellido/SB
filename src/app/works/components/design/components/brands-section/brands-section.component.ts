import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information } from 'src/app/models/models';
import { LoadingService } from '../../../../../services/loading.service';

@Component({
  selector: 'app-brands-section',
  templateUrl: './brands-section.component.html',
  styleUrls: ['./brands-section.component.scss', '../../../gallery-polaroid/gallery-polaroid.component.scss']
})

export class BrandsSectionComponent implements OnInit {
/*--------VARIABLES--------*/ 
  public imagesList: string[] = [];
  public selectedOption: string = '';
  public imgGallery: string = '';

/*--------INTERFACES-------*/ 
  information: Information[] = [
    {
      title: 'Diseño de Logo',
      text: 'El diseño del logotipo para una marca desempeña un papel fundamental en la creación de identidad y confianza para cualquier negocio o empresa. Desde la perspectiva del diseño gráfico y la comunicación visual, este proceso va más allá de simplemente crear un logotipo atractivo. Se trata de construir una imagen que comunique los valores, la personalidad y la esencia de la marca de manera coherente y sólida. Una marca bien diseñada establece una conexión emocional con su audiencia, permitiéndoles identificarse con ella y recordarla fácilmente en un mercado competitivo. Un logotipo único y memorable, acompañado de una paleta de colores y tipografía cuidadosamente seleccionadas, se convierte en el rostro de la marca, transmitiendo su propósito y propuesta de valor. La consistencia en el diseño refuerza la identidad de la marca en todos los puntos de contacto con el público, ya sea en su sitio web, redes sociales, material impreso o productos. Esta cohesión visual genera una sensación de profesionalismo y confianza, lo que es fundamental para establecer relaciones duraderas con los clientes. En un mundo cada vez más visual, la comunicación efectiva a través del diseño es clave para destacar entre la multitud y crear una impresión duradera en la mente del consumidor. Una marca sólida y bien diseñada no solo atrae a nuevos clientes, sino que también fomenta la lealtad y el reconocimiento de marca a largo plazo.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/photoshop.png',
          title: 'Adobe Photoshop',
          alt: 'Logo de Photoshop',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/illustrator.png',
          title: 'Adobe Illustrator',
          alt: 'Logo de Illustrator',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/procreate.png',
          title: 'Procreate',
          alt: 'Logo de Procreate',
        }
      ],
    },
  ];

  header: HeaderSection[] = [
    {
      area: 'diseño/gráfico',
      icon: 'local_florist',
      routerLink: '../../',
      isFlows: false,
      isSubSection: true,
      color: '_design_color'
    }
  ];

  brands : Button[] = [
    {
      route: 'works/design/competitions',
      img: '../assets/images/graph/eyeka_logo.png',
      name: 'eyeka!',
      text: 'Logo de eyeka!',
      title: 'Concursos Internacionales'
    },
    {
      route: 'works/design/publications',
      img: '../assets/images/graph/publications.png',
      name: 'Redes',
      text: 'Ícono de altavoz',
      title: 'Diseño de Publicaciones',
      
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

  loadImages() {
    // Simulación de carga de imágenes
    setTimeout(() => {
      this.imagesList = [ 
        '../assets/images/brands/-2.png',
        '../assets/images/brands/-1.png',
        '../assets/images/brands/0.png',
        '../assets/images/brands/1.png',
        '../assets/images/brands/2.png',
        '../assets/images/brands/3.png',
        '../assets/images/brands/4.png',
        '../assets/images/brands/5.png',
        '../assets/images/brands/6.png',
        '../assets/images/brands/7.png',
        '../assets/images/brands/8.png',
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false);
    }, 1300);
  }
  
}
