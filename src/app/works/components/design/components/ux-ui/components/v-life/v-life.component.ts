import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-v-life',
  templateUrl: './v-life.component.html',
  styleUrls: ['./v-life.component.scss','../../../../../gallery/gallery.component.scss']
})

export class VLifeComponent implements OnInit {
  
  /*--------VARIABLES -------*/ 
  public area: string = 'diseño/ux|ui';
  public icon: string = 'local_florist';

  imgGallery: string = '../assets/images/ux_ui/ypf/asignarComite/0.png';
  
  currentImageIndex: number = 0;
  imagesCount: number = 0;
  imagesList : GalleryImage[] = [];

  brands : Button[] = [
    {
      route: 'works/design/ux-ui/ypf',
      img: '../assets/images/ux_ui/ypf/YPF_logo.png',
      name: '',
      text: 'Logo de YPF',
    },
    {
      route: 'works/design/ux-ui/nighx',
      img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
      name: '',
      text: 'Logo de Nighx',
    },
    {
      route: 'works/design/ux-ui/travel-log',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
      name: '',
      text: 'Logo de TravelLog',
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
      { src: '../assets/images/ux_ui/v-life/patient/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/6.png', position: 6, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/7.png', position: 7, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/8.png', position: 8, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/8_.png', position: 9, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/9.png', position: 10, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/10.png', position: 11, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/12.png', position: 12, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/14.png', position: 13, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/13.png', position: 14, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/15.png', position: 15, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/16.png', position: 16, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/13.png', position: 17, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/17.png', position: 18, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/18.png', position: 19, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/19.png', position: 20, alt: 'string', first: false, last: true },
      { src: '../assets/images/ux_ui/v-life/patient/13.png', position: 21, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/20.png', position: 22, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/21.png', position: 23, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/22.png', position: 24, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/23.png', position: 25, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/24.png', position: 26, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/25.png', position: 27, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/26.png', position: 28, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/20.png', position: 29, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/27.png', position: 30, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/28.png', position: 31, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/29.png', position: 32,  alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/30.png', position: 33, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/patient/31.png', position: 34, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages2() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/v-life/professional/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/6.png', position: 6, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/7.png', position: 7, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/8.png', position: 8, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/9.png', position: 9, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/v-life/professional/10.png', position: 10, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = this.imagesList[0].src;
  }

}


