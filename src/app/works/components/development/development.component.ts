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

/*--------VARIABLES -------*/ 
  public area: string = 'desarrollo';
  public icon: string = 'developer_mode';

  visibleAngular: boolean = false;
  visibleBootstrap: boolean = false;
  visibleJavaScript: boolean = false;

  brands_angular: Button[] = [
    {
      route: 'works/development/investigar',
      img: '../assets/images/dev/investigar/logo_investigar.png',
      title: 'InventigAr',
      text: 'Logo de InventigAr',
    },
    {
      route: 'works/development/xubox',
      img: '../assets/images/dev/xubox/logo/xubox_logo.png',
      title: 'Logística',
      text: 'Logo de Xubox',
    },
    {
      route: 'works/development/qx',
      img: '../assets/images/dev/qx/qx_logo.png',
      title: 'Logística',
      text: 'Logo de QX Logística',
    }
    // {
    //   route: 'works/development/mabell',
    //   img: '../assets/images/dev/mabell/mabell_logo.png',
    //   title: 'Mabell',
    //   text: 'Logo de Mabell Studio',
    // }
  ]

  brands_botstrap: Button[] = [
    {
      route: 'works/development/stormtech',
      img: '../assets/images/dev/stormtech/stormtech_logo.png',
      title: 'Stormtech',
      text: 'Logo de Stormtech',
    },
    {
      route: 'works/development/hunt',
      img: '../assets/images/dev/hunt/hunt_logo.png',
      title: 'Hunt',
      text: 'Logo de Hunt',
    }
  ]

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

  OpenClose(section: string) {
    switch (section) {
      case 'angular':
        this.visibleAngular = !this.visibleAngular;
        break;
      case 'bootstrap':
        this.visibleBootstrap = !this.visibleBootstrap;
        break;
      case 'javascript':
        this.visibleJavaScript = !this.visibleJavaScript;
        break;
    }
    this.topFunction();
  }

}

