import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';
import { GalleryDesptopComponent } from '../../../../../gallery-desptop/gallery-desptop.component';

@Component({
  selector: 'app-ypf',
  templateUrl: './ypf.component.html',
  styleUrls: ['./ypf.component.scss']
})
export class YpfComponent implements OnInit {
  
  public list: string = 'list';
  public area: string = 'diseño/ux|ui';
  public icon: string = 'local_florist';

  imgGallery: string = '';
  
  currentImageIndex: number = 0;
  imagesCount: number = 0;
  imagesList : GalleryImage[] = [];

  brands : Button[] = [
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
    } else if (selectedValue === 'imagesList3') {
      this.loadImages3();
    }
  }

  loadImages() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/0/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/0/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/0/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/0/3.png', position: 3, alt: 'string', first: false, last: true }
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages2() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/1/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/1/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/1/2.png', position: 2, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages3() {
    this.imagesList = [
      { src: '../assets/images/firma_sb.svg', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/logo_eye.svg', position: 1, alt: 'string', first: false, last: true }
    ];
    this.imgGallery = this.imagesList[0].src; // Asigna la primera imagen del arreglo
  }

}

