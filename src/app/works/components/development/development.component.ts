import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../models/models';
@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class
 DevelopmentComponent implements OnInit {

  
  brands: Button[] = [
    {
      route: 'works/development/investigar',
      img: '../assets/images/dev/investigar/logo_investigar.png',
      title: 'InventigAr',
      text: 'Logo de InventigAr',
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
  brands_line1: Button[] = [
    {
      route: '',
      img: '../assets/images/graph/sweetart_logo.png',
      title: 'SweetTart',
      text: 'Logo de SweetTart',
    },
    {
      route: '',
      img: '../assets/images/graph/nescafe.png',
      title: 'Nescafé',
      text: 'Logo de ïcono campaña Nescafé',
    },
    {
      route: '',
      img: '../assets/images/graph/doritos.png',
      title: 'Doritos',
      text: 'Logo de Doritos Trío',
    },
    {
      route: '',
      img: '../assets/images/graph/barista.png',
      title: 'Barista',
      text: 'Logo de Barista Bros',
    },    
  ]

  brands_line2: Button[] = [
    {
      route: '',
      img: '../assets/images/graph/branca_logo.png',
      title: 'Branca',
      text: 'Logo de Fernet Branca',
    },
    {
      route: '',
      img: '../assets/images/graph/OCB_logo.png',
      title: 'OCB',
      text: 'Logo de OCB',
    },
    {
      route: '',
      img: '../assets/images/graph/convertiko_logo.png',
      title: 'Convertiko',
      text: 'Logo Convertiko',
    },
    {
      route: '',
      img: '../assets/images/graph/muy_logo.png',
      title: 'Muy!',
      text: 'Logo de Muy',
    },
  ]

  brands_line3: Button[] = [
    {
      route: '',
      img: '../assets/images/graph/estancias_logo.png',
      title: 'Estancias',
      text: 'Logo de Estancias Integradas',
    },
    {
      route: '',
      img: '../assets/images/graph/norita_logo.png',
      title: 'Norita',
      text: 'Logo de Norita',
    },
    {
      route: '',
      img: '../assets/images/graph/nudel_logo.png',
      title: 'Nudel',
      text: 'Logo de Nudel',
    },
    {
      route: '',
      img: '../assets/images/graph/deLaYaya_logo.png',
      title: 'La Yaya',
      text: 'Logo de De La Yaya',
    },
  ]
  brands_line4: Button[] = [
    {
      route: '',
      img: '../assets/images/graph/mdq_logo.png',
      title: 'Garage',
      text: 'Logo Garage MDQ',
    },
    {
      route: '',
      img: '../assets/images/graph/odonto_logo.png',
      title: 'Odontología',
      text: 'Logo de Odontología Integral',
     },
  ]
  

  public area: string = 'desarrollo';
  public icon: string = 'developer_mode';
  
  visibleUxUi: boolean = false;
  visibleGraph: boolean = false;
  visibleIllustration: boolean = false;
  visibleDesigns: boolean = false;

  constructor(private router: Router) { }

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
  showMoreUxUi() {  
    this.visibleUxUi ? 
      this.visibleUxUi = false : 
        this.visibleUxUi = true, 
        this.visibleGraph = false,
        this.visibleIllustration = false;     
  }
  showMoreGraph() {
    this.visibleGraph ? 
      this.visibleGraph = false : 
        this.visibleGraph = true,
        this.visibleUxUi = false,
        this.visibleIllustration = false;  
  }
  showMoreIllustration() {
    this.visibleIllustration ? 
      this.visibleIllustration = false : 
        this.visibleIllustration = true,
        this.visibleUxUi = false,
        this.visibleGraph = false;    
  }
  showMoreDesigns() {
    this.visibleDesigns ? 
      this.visibleDesigns = false : 
        this.visibleDesigns = true;
  }

}

