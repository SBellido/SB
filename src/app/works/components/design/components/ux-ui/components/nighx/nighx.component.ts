import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';
import { GalleryComponent } from 'src/app/works/components/gallery/gallery.component';

@Component({
  selector: 'app-nighx',
  templateUrl: './nighx.component.html',
  styleUrls: ['./nighx.component.scss','../../../../../gallery/gallery.component.scss'],
})

export class NighxComponent implements OnInit {
  @ViewChild('galleryComponent') galleryComponent!: GalleryComponent;

  /*--------VARIABLES -------*/ 
  public area: string = 'diseño/ux|ui';
  public icon: string = 'local_florist';

  imgGallery = '';
  imagesList : GalleryImage[] = [] 

  brands : Button[] = [
    {
      route: 'works/design/ux-ui/ypf',
      img: '../assets/images/ux_ui/ypf/YPF_logo.png',
      title: 'YPF',
      text: 'Logo de YPF',
    },
    {
      route: 'works/design/ux-ui/v-life',
      img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
      title: 'V-Life',
      text: 'Logo V-Life',
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
    }
  }

  loadImages() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/nighx/inicio/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio/6.png', position: 6, alt: 'string', first: false, last: false }
    ];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages2() {
    this.imagesList = [
      { src: '../assets/images/ux_ui/nighx/inicio_sesion/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio_sesion/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio_sesion/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio_sesion/3.png', position: 3, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio_sesion/4.png', position: 4, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio_sesion/5.png', position: 5, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio_sesion/6.png', position: 6, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio_sesion/8.png', position: 7, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/nighx/inicio_sesion/9.png', position: 8, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = this.imagesList[0].src;
  }

}


