import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-stormtech',
  templateUrl: './stormtech.component.html',
  styleUrls: ['./stormtech.component.scss']
})
export class StormtechComponent implements OnInit {

 
  currentImageNumber: number = 1;
  public area: string = 'desarrollo/bootstrap';
  public icon: string = 'developer_mode';
  imgGallery: string = '../assets/images/dev/stormtech/desktop/0.png';

  imagesList : GalleryImage[] = [
    { src: '../assets/images/dev/stormtech/desktop/0.png', position: 0, alt: 'string', first: true, last: false },
    { src: '../assets/images/dev/stormtech/desktop/1.png', position: 1, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/2.png', position: 2, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/3.png', position: 3, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/4.png', position: 4, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/5.png', position: 5, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/6.png', position: 6, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/8.png', position: 7, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/7.png', position: 8, alt: 'string', first: false, last: false },
    { src: '../assets/images/dev/stormtech/desktop/9.png', position: 9, alt: 'string', first: false, last: true }
  ];
  
  brands : Button[] = [
    {
      route: 'works/development/hunt',
      img: '../assets/images/dev/hunt/hunt_logo.png',
      name: 'Hunt',
      text: 'Logo de Hunt',
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.topFunction();
    // this.updateButtonStatus();
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
  

}

