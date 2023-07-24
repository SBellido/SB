import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-ypf',
  templateUrl: './ypf.component.html',
  styleUrls: ['./ypf.component.scss']
})
export class YpfComponent implements OnInit {

  currentImageNumber: number = 1;
  public list: string = 'list';
  public area: string = 'diseño/ux|ui';
  public icon: string = 'local_florist';
  selectedOption: string = '';
  imgGallery: string = '../assets/images/ux_ui/ypf/asignarComite/0.png';

  imagesList : GalleryImage[] = [  ];
  imagesList2 : GalleryImage[] = [
    // { src: '../assets/images/ux_ui/ypf/asignarComite/0.png', position: 0, alt: 'string', first: true, last: false },
    //   { src: '../assets/images/ux_ui/ypf/asignarComite/1.png', position: 1, alt: 'string', first: false, last: false },
    //   { src: '../assets/images/ux_ui/ypf/asignarComite/2.png', position: 2, alt: 'string', first: false, last: false },
    //   { src: '../assets/images/ux_ui/ypf/asignarComite/3.png', position: 3, alt: 'string', first: false, last: true }

  ];
  brands : Button[] = [
    // {
    //   route: 'works/design/ux-ui/ypf',
    //   img: '../assets/images/ux_ui/ypf/YPF_logo.png',
    //   title: 'YPF',
    //   text: 'Logo de YPF',
    // },
    {
      route: 'works/design/ux-ui/v-life',
      img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
      title: 'V-Life',
      text: 'Logo V-Life',
    },
    {
      route: 'works/design/ux-ui/nighx',
      img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
      title: 'Nighx',
      text: 'Logo de Nighx',
    },
    {
      route: 'works/design/ux-ui/travel-log',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
      title: 'TravelLog',
      text: 'Logo de TravelLog',
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.topFunction();
    // this.updateButtonStatus();
  }
  
/* ----------- MÉTODOS ----------- */

onChange(event: Event) {
  alert(this.imagesList[1]);
  const selectedValue = (event.target as HTMLSelectElement).value;
  if (selectedValue === 'imagesList') {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/asignarComite/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/asignarComite/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/asignarComite/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/asignarComite/3.png', position: 3, alt: 'string', first: false, last: true }
    ];
    this.imgGallery = '../assets/images/ux_ui/ypf/asignarComite/0.png';
    alert(this.imagesList[1]);

  } else if (selectedValue === 'imagesList2') {
    this.imagesList2 = [
      { src: '../assets/images/ux_ui/ypf/asignarComite/2.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/yo.png', position: 1, alt: 'string', first: false, last: true }
    ];
    this.imgGallery = '../assets/images/azulejo.png';
  }
}


selectOption(option: string) {
  this.selectedOption = option;
  // Realiza las acciones necesarias según la opción seleccionada
  if (option === 'option1') {
    // Cambiar la variable imgGallery y el arreglo de imágenes según la opción 1
    this.imgGallery = '../assets/images/opcion1.png';
    this.imagesList = [
      // Nuevas imágenes para la opción 1
    ];
  } else if (option === 'option2') {
    // Cambiar la variable imgGallery y el arreglo de imágenes según la opción 2
    this.imgGallery = '../assets/images/opcion2.png';
    this.imagesList = [
      // Nuevas imágenes para la opción 2
    ];
  } else if (option === 'option3') {
    // Cambiar la variable imgGallery y el arreglo de imágenes según la opción 3
    this.imgGallery = '../assets/images/opcion3.png';
    this.imagesList = [
      // Nuevas imágenes para la opción 3
    ];
  }
}

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

