import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, HeaderSection } from 'src/app/models/models';

@Component({
  selector: 'app-hunt',
  templateUrl: './hunt.component.html',
  styleUrls: ['./hunt.component.scss']
})
export class HuntComponent implements OnInit {

/*--------VARIABLES -------*/ 
  header: HeaderSection[] = [
    {
    area: 'desarrollo/bootstrap',
    icon: 'developer_mode',
    routerLink: '../../',
    isFlows: true,
    isSubSection: true
    }
  ];
  imgGallery = '../assets/images/dev/hunt/mobile/0.png';
  imagesList : string[] = [
      '../assets/images/dev/hunt/mobile/0.png',
      '../assets/images/dev/hunt/mobile/1.png',
      '../assets/images/dev/hunt/mobile/2.png',
      '../assets/images/dev/hunt/mobile/3.png',
      '../assets/images/dev/hunt/mobile/4.png',
      '../assets/images/dev/hunt/mobile/5.png',
      '../assets/images/dev/hunt/mobile/6.png',
      '../assets/images/dev/hunt/mobile/7.png',
      '../assets/images/dev/hunt/mobile/8.png',
      '../assets/images/dev/hunt/mobile/9.png',
      '../assets/images/dev/hunt/mobile/10.png',
      '../assets/images/dev/hunt/mobile/11.png',
      '../assets/images/dev/hunt/mobile/12.png',
      '../assets/images/dev/hunt/mobile/13.png',
      '../assets/images/dev/hunt/mobile/14.png',
  ];
  brands: Button[] = [
    {
      route: 'works/development/stormtech',
      img: '../assets/images/dev/stormtech/stormtech_logo.png',
      name: 'Stormtech',
      text: 'Logo de Stormtech',
    },
  ]
  
    constructor(private router: Router) {}

    ngOnInit() {
      this.topFunction();
    }
    
  /* ----------- MÉTODOS ----------- */
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  routeBack() {    
    this.router.navigateByUrl('works/design/ux-ui')
  }

 

}


