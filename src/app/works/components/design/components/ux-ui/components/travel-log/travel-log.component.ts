import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GalleryImage } from 'src/app/models/models';
@Component({
  selector: 'app-travel-log',
  templateUrl: './travel-log.component.html',
  styleUrls: ['./travel-log.component.scss']
})
export class TravelLogComponent implements OnInit {

     
  /*--------VARIABLES -------*/ 
  currentImageNumber: number = 1;
  public area: string = 'diseño';
  public icon: string = 'local_florist';
  imgGallery: string = '../assets/images/ux_ui/travel_log/flujo_1/0.png';
  activeNext: boolean = false;
  activeBefore: boolean = false;
  currentImageIndex: number = 0;
  images : GalleryImage[] = [
    { src: '../assets/images/ux_ui/travel_log/flujo_1/0.png', position: 0, alt: 'string', first: true, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/1.png', position: 1, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/2.png', position: 2, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/3.png', position: 3, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/5.png', position: 4, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/6.png', position: 5, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/7.png', position: 6, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/8.png', position: 7, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/9.png', position: 8, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/10.png', position: 9, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/travel_log/flujo_1/11.png', position: 10, alt: 'string', first: false, last: false },
  ] 

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.updateButtonStatus();
  }

  
/* ----------- MÉTODOS ----------- */
  activeGallery() {
    this.imgGallery='';
  }
  updateButtonStatus() {
    this.activeNext = this.currentImageIndex < this.images.length - 1;
    this.activeBefore = this.currentImageIndex > 0;
  }
  
  nextImg() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
      this.imgGallery = this.images[this.currentImageIndex].src;
      this.updateButtonStatus();
      this.currentImageNumber = this.currentImageIndex + 1;
    }
  }
  
  beforeImg() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.imgGallery = this.images[this.currentImageIndex].src;
      this.updateButtonStatus();
      this.currentImageNumber = this.currentImageIndex + 1;
    }
  }
  
  routeBack() {    
    this.router.navigateByUrl('works/design/ux-ui')
  }
  

}
