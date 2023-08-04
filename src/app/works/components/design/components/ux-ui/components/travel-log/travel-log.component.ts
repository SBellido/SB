import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-travel-log',
  templateUrl: './travel-log.component.html',
  styleUrls: ['./travel-log.component.scss','../../../../../gallery/gallery.component.scss']
})

export class TravelLogComponent implements OnInit {
     
  /*--------VARIABLES -------*/ 
  public area: string = 'diseño/ux|ui';
  public icon: string = 'local_florist';

  imgGallery = '';
  imagesList : GalleryImage[] = [] 

  brands : Button[] = [
    {
      route: 'works/design/ux-ui/ypf',
      img: '../assets/images/ux_ui/ypf/YPF_logo.png',
      name: '',
      text: 'Logo de YPF',
    },
    {
      route: 'works/design/ux-ui/v-life',
      img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
      name: '',
      text: 'Logo V-Life',
    },
    {
      route: 'works/design/ux-ui/nighx',
      img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
      name: '',
      text: 'Logo de Nighx',
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.topFunction();
    this.loadImages(); 
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

  onChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'imagesList') {
      this.loadImages();
    } else if (selectedValue === 'imagesList2') {
      this.loadImages2();
    }
  }

  loadImages() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/travel_log/flujo_1/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/5.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/6.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/7.png', position: 6, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/8.png', position: 7, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/9.png', position: 8, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/10.png', position: 9, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/travel_log/flujo_1/11.png', position: 10, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages2() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/asignarComite/2.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/yo.png', position: 1, alt: 'string', first: false, last: true }
    ];
    this.imgGallery = this.imagesList[0].src;
  }

}


