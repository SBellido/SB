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
  public area: string = 'diseño/ux|ui';
  public icon: string = 'local_florist';
  imgGallery: string = '../assets/images/ux_ui/ypf/asignarComite/0.png';

  images : GalleryImage[] = [] 
  images2 : GalleryImage[] = []

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
  const selectedValue = (event.target as HTMLSelectElement).value;
  if (selectedValue === 'images') {
    this.images = [
      { src: '../assets/images/ux_ui/ypf/asignarComite/0.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/asignarComite/1.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/asignarComite/2.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/asignarComite/3.png', position: 3, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = '../assets/images/ux_ui/ypf/asignarComite/0.png';
  } else if (selectedValue === 'images2') {
    this.images = [
      { src: '../assets/images/ux_ui/ypf/asignarComite/4.png', position: 0, alt: 'string', first: true, last: false },
      { src: '../assets/images/ux_ui/ypf/asignarComite/5.png', position: 1, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/asignarComite/6.png', position: 2, alt: 'string', first: false, last: false },
      { src: '../assets/images/ux_ui/ypf/asignarComite/7.png', position: 3, alt: 'string', first: false, last: false },
    ];
    this.imgGallery = '../assets/images/ux_ui/ypf/asignarComite/4.png';
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

