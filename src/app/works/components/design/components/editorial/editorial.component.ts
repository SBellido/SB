import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information, OptionSelect } from 'src/app/models/models';
import { LoadingService } from '../../../../../services/loading.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})

export class EditorialComponent implements OnInit {
  /*--------VARIABLES--------*/
  public imagesList: string[] = [];
  public selectedOption: string = '';
  public imgGallery: string = '';

  /*--------INTERFACES-------*/
  options: OptionSelect[] = [
    { value: 'imagesList', view_Text: 'aviNews' },
    { value: 'imagesList0', view_Text: 'Libros para Colorear' },
    { value: 'imagesList1', view_Text: 'El Fénix' },
    { value: 'imagesList2', view_Text: 'Centro Cultural América Libre' },
  ];

  information: Information[] = [
    {
      title: 'Diseño editorial',
      text: 'El diseño editorial ha desempeñado un papel crucial a lo largo de la historia del diseño, consolidándose como un elemento esencial en la comunicación visual. Desde sus primeras manifestaciones hasta la actualidad, su relevancia ha sido innegable en la difusión de información, la construcción de identidades visuales y la promoción de productos y servicios. Su importancia radica en su capacidad para transmitir mensajes de manera efectiva y memorable. Mediante la combinación de elementos visuales y textuales, como tipografías, imágenes y espacios en blanco, logra captar la atención del lector y comunicar el contenido de forma clara y atractiva. Además, ha sido un vehículo fundamental para la preservación y difusión del conocimiento a lo largo de los siglos. Desde los primeros libros hasta las revistas y periódicos modernos, ha servido como un medio invaluable para compartir ideas, narrativas y descubrimientos, contribuyendo así al enriquecimiento cultural y educativo de la sociedad. No obstante, su importancia va más allá de la mera transmisión de información. También ha sido un poderoso instrumento para la expresión artística y la innovación estética. A través de portadas creativas, diseños innovadores y técnicas de impresión avanzadas, ha logrado cautivar al público y dejar una impresión duradera en la memoria colectiva.',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/indesign.png',
          title: 'Adobe InDesign',
          alt: 'Logo de InDesign',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/quarkexpress.png',
          title: 'QuarkExpress',
          alt: 'Logo de QuarkExpress',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/photoshop.png',
          title: 'Adobe Photoshop',
          alt: 'Logo de Photoshop',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/bing.png',
          title: 'Bing',
          alt: 'Logo de Bing',
        },
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

  brands: Button[] = [
    {
      route: 'works/design/brands',
      img: '../assets/images/graph/brands.png',
      name: 'Marcas',
      text: 'Logo de Marca Registrada',
      title: 'Diseño de Logo',
    },
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
  ) { }

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

  routeTo(route: string) {
    this.router.navigateByUrl(route);
  }

  loadImages() {
    // Simulación de carga de imágenes
    setTimeout(() => {
      this.imagesList = [
        '../assets/images/editorial/aviNews/0.png',
        '../assets/images/editorial/aviNews/1.png',
        '../assets/images/editorial/aviNews/2.png',
        '../assets/images/editorial/aviNews/3.png',
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false); // Cambiar estado de carga una vez que las imágenes se han cargado
    }, 1300); // Simulamos una demora de 2 segundos
  }

  loadImages0() {
    this.imagesList = [
      '../assets/images/editorial/pintar/0.png',
      '../assets/images/editorial/pintar/1.png',
      '../assets/images/editorial/pintar/2.png',
      '../assets/images/editorial/pintar/3.png',
      '../assets/images/editorial/pintar/4.png',
      '../assets/images/editorial/pintar/5.png',
      '../assets/images/editorial/pintar/6.png',
      '../assets/images/editorial/pintar/7.png',
      '../assets/images/editorial/pintar/8.png',
      '../assets/images/editorial/pintar/9.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  loadImages1() {
    this.imagesList = [
      '../assets/images/editorial/el_fenix/0.png',
      '../assets/images/editorial/el_fenix/1.png',
      '../assets/images/editorial/el_fenix/2.png',
      '../assets/images/editorial/el_fenix/3.png',
      '../assets/images/editorial/el_fenix/4.png',
      '../assets/images/editorial/el_fenix/5.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  loadImages2() {
    this.imagesList = [
      '../assets/images/editorial/cc/0.png',
      '../assets/images/editorial/cc/1.png',
      '../assets/images/editorial/cc/2.png',
      '../assets/images/editorial/cc/3.png',
      '../assets/images/editorial/cc/4.png',
    ];
    this.imgGallery = this.imagesList[0];
  }

  onChange(event: any) {
    this.selectedOption = event.value;
    switch (this.selectedOption) {
      case 'imagesList':
        this.loadImages();
        break;
      case 'imagesList0':
        this.loadImages0();
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

