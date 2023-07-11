import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GalleryImage } from 'src/app/models/models';
import { GalleryService } from 'src/app/services/gallery.services';

@Component({
  selector: 'app-v-life',
  templateUrl: './v-life.component.html',
  styleUrls: ['./v-life.component.scss']
})
export class VLifeComponent implements OnInit {

  imgGallery:string = '../assets/images/ux_ui/v-life/patient/login_pass_input.png';
  activeNext:boolean = false;
  activeBefore:boolean = false;
  
  currentImageIndex: number = 0;

  images : GalleryImage[] = [
    {  
      src: '../assets/images/ux_ui/v-life/patient/aditional_info_end.png',
      position: 0,
      alt: 'string',
      first: true,
      last: false,
    
    },
    {  
      src: '../assets/images/ux_ui/v-life/patient/login_pass_input.png',
      position: 1,
      alt: 'string',
      first: false,
      last: true,
    
    }

  ] 
  constructor(
    private router: Router,
    private galleryService: GalleryService) {
  }

  ngOnInit(): void {
  }

  activeGallery() {
    this.imgGallery='';
  }
  nextImg() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
      this.imgGallery = this.images[this.currentImageIndex].src;
    }
  }
  
  beforeImg() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.imgGallery = this.images[this.currentImageIndex].src;
    }
  }
  
  routeBack() {    
    this.router.navigateByUrl('works/design/ux-ui')
  }
  

}
