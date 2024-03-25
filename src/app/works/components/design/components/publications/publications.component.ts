import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information, OptionSelect } from 'src/app/models/models';
import { LoadingService } from '../../../../../services/loading.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})

export class PublicationsComponent implements OnInit {
/*--------VARIABLES--------*/ 
  public imagesList: string[] = [];
  public selectedOption: string = '';
  public imgGallery: string = '';

/*--------INTERFACES-------*/ 
  options: OptionSelect[] = [
    {value: 'imagesList', view_Text: 'Jam Poética & Musical'},
    {value: 'imagesList1', view_Text: 'Neptuno | Belleza Natural'},
    {value: 'imagesList2', view_Text: 'Dejando Huella | Pienso para Mascotas'},
  ];

  information: Information[] = [
    {
      title: 'Publicaciones para Redes Sociales',
      text: 'En la era digital actual, la presencia en redes sociales es clave para promocionar productos y eventos. Sin embargo, destacarse requiere más que solo compartir información. Es vital emplear un diseño atractivo y un discurso persuasivo que conecte emocionalmente con la audiencia. El diseño atractivo captura la atención del usuario, mientras que un discurso persuasivo y emocional motiva a la acción. Apelar a las emociones genera una conexión profunda, impulsando el compromiso y la participación. Combinar un diseño atractivo con un mensaje emocionalmente persuasivo maximiza el impacto en redes sociales. Esto no solo aumenta la visibilidad, sino que también fortalece los lazos con la audiencia, esencial para el éxito a largo plazo.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/photoshop.png',
          title: 'Photoshop',
          alt: 'Logo de Photoshop',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/illustrator.png',
          title: 'Illustrator',
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
      isFlows: true,
      isSubSection: true,
      color: '_design_color'
    }
  ];

  brands : Button[] = [
    {
      route: 'works/design/brands',
      img: '../assets/images/graph/brands.png',
      name: 'Marcas',
      text: 'Logo de Marca Registrada',
      title: 'Diseño de Marca',
      
    },
    {
      route: 'works/design/competitions',
      img: '../assets/images/graph/eyeka_logo.png',
      name: 'eyeka!',
      text: 'Logo de eyeka!',
      title: 'Concursos Internacionales'
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
        '../assets/images/publications/jam/0.png',
        '../assets/images/publications/jam/1.png',
        '../assets/images/publications/jam/2.png',
        '../assets/images/publications/jam/3.png',
        '../assets/images/publications/jam/4.png',
        '../assets/images/publications/jam/5.png',
        '../assets/images/publications/jam/6.png',
        '../assets/images/publications/jam/7.png',
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false); // Cambiar estado de carga una vez que las imágenes se han cargado
    }, 1300); // Simulamos una demora de 2 segundos
  }

  loadImages1() {
    this.imagesList = [
        '../assets/images/publications/neptuno/0.png',
        '../assets/images/publications/neptuno/1.png',
        '../assets/images/publications/neptuno/2.png',
        '../assets/images/publications/neptuno/3.png',
        '../assets/images/publications/neptuno/4.png',
        '../assets/images/publications/neptuno/5.png',
        '../assets/images/publications/neptuno/6.png',
        '../assets/images/publications/neptuno/7.png',
        '../assets/images/publications/neptuno/8.png',
      ];
      this.imgGallery = this.imagesList[0];
    }

    loadImages2() {
      this.imagesList = [
        '../assets/images/publications/pienso/0.png',   
        '../assets/images/publications/pienso/1.png',
        '../assets/images/publications/pienso/2.png',
        '../assets/images/publications/pienso/3.png',
        '../assets/images/publications/pienso/5.png',
        '../assets/images/publications/pienso/5.png',
    ];
      this.imgGallery = this.imagesList[0];
    }

    onChange(event: any) {
      this.selectedOption = event.value;    
      switch (this.selectedOption) {
        case 'imagesList':
          this.loadImages();
          break;
        case 'imagesList1':
          this.loadImages1();
          break;
        case 'imagesList2':
          this.loadImages2();
          break;
        default:
          // Lógica para el caso por defecto (opcional)
          break;
      }
    }
  }

