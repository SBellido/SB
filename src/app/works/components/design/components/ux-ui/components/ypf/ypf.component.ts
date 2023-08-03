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
      name: 'V-Life',
      text: 'Logo V-Life',
    },
    {
      route: 'works/design/ux-ui/nighx',
      img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
      name: 'Nighx',
      text: 'Logo de Nighx',
    },
    {
      route: 'works/design/ux-ui/travel-log',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
      name: 'TravelLog',
      text: 'Logo de TravelLog',
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.topFunction();
    this.loadImages0(); 
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
    if (selectedValue === 'imagesList1') {
      this.loadImages0();
    } else if (selectedValue === 'imagesList2') {
      this.loadImages1();
    } else if (selectedValue === 'imagesList3') {
      this.loadImages2();
    } else if (selectedValue === 'imagesList4') {
      this.loadImages3();
    } else if (selectedValue === 'imagesList5') {
      this.loadImages4();
    } else if (selectedValue === 'imagesList6') {
      this.loadImages5();
    }
  }

  loadImages0() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/0/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/0/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/0/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/0/3.png', position: 3, alt: 'string', first: false, last: true }
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages1() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/1/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/1/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/1/2.png', position: 2, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages2() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/2/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/2/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/2/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/2/3.png', position: 3, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src; // Asigna la primera imagen del arreglo
  }
  loadImages3() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/3/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/3/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/3/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/3/3.png', position: 3, alt: 'string', first: false, last: true },
      { src: '../assets/images/ux_ui/ypf/3/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/3/5.png', position: 5, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src; // Asigna la primera imagen del arreglo
  }
  loadImages4() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/4/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/4/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/4/6.png', position: 6, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src; // Asigna la primera imagen del arreglo
  }
  loadImages5() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/ypf/5/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/5/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/5/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/5/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/5/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/5/5.png', position: 5, alt: 'string', first: false, last: true },
    ];
    this.imgGallery = this.imagesList[0].src; // Asigna la primera imagen del arreglo
  }

}

