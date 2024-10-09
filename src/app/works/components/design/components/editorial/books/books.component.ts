import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection, Information, OptionSelect } from 'src/app/models/models';
import { LoadingService } from '../..//../../../../services/loading.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
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
      title: 'Libros para colorear',
      text: '¡Bienvenido a mi rincón de venta de libros! Te presento mis libros para colorear, diseñados para brindar horas de diversión y relajación. Cada libro contiene 50 dibujos únicos que te invitarán a explorar tu imaginación y expresarte a través del arte y el color. Algo súper interesante es que puedes personalizar tu libro según tus preferencias. Elige entre diversas temáticas, como deportes, dinosaurios, animales, fantasía, mandalas, letras, o combina las que mas te gusten. Además, podés personalizar el nombre y el personaje de la portada, haciendo que tu regalo sea verdaderamente único, dándole el toque personal que lo hace perfecto para vos o para sorprender a alguien especial. Podés hacer tu pedido, o consultar precios en el botón de abajo. Encantado de ayudarte a crear un libro que se adapte a tus deseos. ¡No esperes más, podés comenzar tu aventura de color hoy mismo!. Espero tu mensaje',
      subtitle: 'Tecnologías utilizadas',
      tecnologies: [
        {
          href: '',
          src: '../assets/images/tecnologies/illustrator.png',
          title: 'Adobe Illustrator',
          alt: 'Logo de Illustrator',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/photoshop.png',
          title: 'Adobe Photoshop',
          alt: 'Logo de Photoshop',
        },
        {
          href: '',
          src: '../assets/images/tecnologies/indesign.png',
          title: 'Adobe InDesign',
          alt: 'Logo de InDesign',
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
    {
      route: 'works/design/editorial',
      img: '../assets/images/graph/editorial.png',
      name: '',
      text: 'Ícono de editorial',
      title: 'Editorial',
    },
  ];

  /* ----------- EVENTOS ----------- */
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
    // Si la ruta contiene "wa.me", abre el enlace en una nueva pestaña
    if (route.includes('wa.me')) {
      window.open(route, '_blank'); // Abre en una nueva pestaña
    } else {
      this.router.navigateByUrl(route); // Navega normalmente
    }
  }

  loadImages() {
    // Simulación de carga de imágenes
    setTimeout(() => {
      this.imagesList = [
        '../assets/images/editorial/pintar/infantil_nena/0.jpg',
        '../assets/images/editorial/pintar/infantil_nena/00.jpg',
        '../assets/images/editorial/pintar/infantil_nena/000.jpg',
        '../assets/images/editorial/pintar/infantil_nena/0000.jpg',
        '../assets/images/editorial/pintar/infantil_nena/1.jpg',
        '../assets/images/editorial/pintar/infantil_nena/2.jpg',
        '../assets/images/editorial/pintar/infantil_nena/3.jpg',
        '../assets/images/editorial/pintar/infantil_nena/4.jpg',
        '../assets/images/editorial/pintar/infantil_nena/1_.jpg',
        '../assets/images/editorial/pintar/infantil_nena/5.jpg',
        '../assets/images/editorial/pintar/infantil_nena/2_.jpg',
        '../assets/images/editorial/pintar/infantil_nena/6.jpg',
        '../assets/images/editorial/pintar/infantil_nena/3_.jpg',
        '../assets/images/editorial/pintar/infantil_nena/7.jpg',
        '../assets/images/editorial/pintar/infantil_nena/4_.jpg',
        '../assets/images/editorial/pintar/infantil_nena/8.jpg',
        '../assets/images/editorial/pintar/infantil_nena/5_.jpg',
        '../assets/images/editorial/pintar/infantil_nena/9.jpg',
        '../assets/images/editorial/pintar/mandala/0.jpg',
        '../assets/images/editorial/pintar/mandala/00.jpg',
        '../assets/images/editorial/pintar/mandala/1.jpg',
        '../assets/images/editorial/pintar/mandala/1.jpg',
        '../assets/images/editorial/pintar/mandala/2.jpg',
        '../assets/images/editorial/pintar/mandala/3.jpg',
        '../assets/images/editorial/pintar/mandala/4.jpg',
        '../assets/images/editorial/pintar/mandala/5.jpg',
        '../assets/images/editorial/pintar/mandala/6.jpg',
        '../assets/images/editorial/pintar/mandala/7.jpg',
        '../assets/images/editorial/pintar/mandala/8.jpg',
        '../assets/images/editorial/pintar/mandala/10.jpg',
      ];
      this.imgGallery = this.imagesList[0];
      this.loadingService.setLoadingState(false); // Cambiar estado de carga una vez que las imágenes se han cargado
    }, 1300); // Simulamos una demora de 2 segundos
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
      // case 'imagesList0':
      //   this.loadImages0();
      //   break;
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

