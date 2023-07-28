import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../models/models';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})

export class DesignComponent implements OnInit {

  /*--------VARIABLES -------*/ 
  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkScreenSize();
  }

  public area: string = 'diseño';
  public icon: string = 'local_florist';
  
  allCardsClosed: boolean | undefined;
  visibleUx_Ui: boolean | undefined;
  visibleGraphic: boolean | undefined;
  visibleExperimental: boolean | undefined;

  brands_ux_ui: Button[] = [
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
  brands_graph: Button[] = [
    {
      route: 'works/design/brands',
      img: '../assets/images/graph/brands.png',
      title: 'Marcas',
      text: 'Logo de Marca Registrada',
    },
    {
      route: 'works/design/competitions',
      img: '../assets/images/graph/eyeka_logo.png',
      title: 'Concursos',
      text: 'Logo de Eyeka',
    },
  ]

  constructor(private router: Router) { 
    this.checkScreenSize();
  }

  ngOnInit(): void {  
    this.topFunction();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  routeTo(route:string) {    
    this.router.navigateByUrl(route);
  }
  routingVlife() {   
    this.router.navigateByUrl("works/design/ux-ui/v-life");
  }
  OpenClose(section: string) {
    switch (section) {
      case 'ux_ui':
        this.visibleUx_Ui = !this.visibleUx_Ui;
        break;
      case 'graphic':
        this.visibleGraphic = !this.visibleGraphic;
        break;
      case 'experimental':
        this.visibleExperimental = !this.visibleExperimental;
        break;
    }
    this.allCardsClosed = !this.visibleUx_Ui && !this.visibleGraphic && !this.visibleExperimental;
    if (this.allCardsClosed) {
      this.topFunction();
    }
  }

  checkScreenSize() {
    this.visibleUx_Ui = window.innerWidth >= 1024;
    this.visibleGraphic = window.innerWidth >= 1024;
    this.visibleExperimental = window.innerWidth >= 1024;
  }

}
