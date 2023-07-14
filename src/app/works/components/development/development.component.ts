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
      title: 'Xubox',
      text: 'Logo de Xubox',
    },
    {
      route: 'works/development/mabell',
      img: '../assets/images/dev/mabell/mabell_logo.png',
      title: 'Mabell',
      text: 'Logo de Mabell Studio',
    }
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

