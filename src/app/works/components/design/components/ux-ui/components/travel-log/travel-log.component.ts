import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, OptionSelect } from 'src/app/models/models';

@Component({
  selector: 'app-travel-log',
  templateUrl: './travel-log.component.html',
  styleUrls: ['./travel-log.component.scss','../../../../../gallery/gallery.component.scss']
})

export class TravelLogComponent implements OnInit {
  // options: OptionSelect[] = [
  //   {value: 'imagesList1', view_Text: 'Paciente'},
  //   {value: 'imagesList2', view_Text: 'Prof. de Salud'},
  // ];
  /*--------VARIABLES -------*/ 
  public area: string = 'diseño/ux|ui';
  public icon: string = 'local_florist';

  imgGallery = '';
  imagesList : string[] = [] 

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
      '../assets/images/ux_ui/travel_log/flujo_1/0.png',
      '../assets/images/ux_ui/travel_log/flujo_1/1.png',
      '../assets/images/ux_ui/travel_log/flujo_1/2.png',
      '../assets/images/ux_ui/travel_log/flujo_1/3.png',
      '../assets/images/ux_ui/travel_log/flujo_1/5.png',
      '../assets/images/ux_ui/travel_log/flujo_1/6.png',
      '../assets/images/ux_ui/travel_log/flujo_1/7.png',
      '../assets/images/ux_ui/travel_log/flujo_1/8.png',
      '../assets/images/ux_ui/travel_log/flujo_1/9.png',
      '../assets/images/ux_ui/travel_log/flujo_1/10.png',
      '../assets/images/ux_ui/travel_log/flujo_1/11.png',
    ];
    this.imgGallery = this.imagesList[0];
  }
  loadImages2() {
    this.imagesList = [
      '../assets/images/ux_ui/ypf/asignarComite/2.png',
      '../assets/images/yo.png',
    ];
    this.imgGallery = this.imagesList[0];
  }

}


