import { Component, OnInit, Input } from '@angular/core';
import { GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  
  /*--------VARIABLES -------*/ 
  currentImageNumber: number = 1;
  activeNext: boolean = false;
  activeBefore: boolean = false;
  currentImageIndex: number = 0;
  
  constructor() { 
    this.updateButtonStatus();
  }
  
  @Input() imagesList: GalleryImage[] = [];
  @Input() imgGallery: string = '';

  ngOnInit(): void {
  }

  activeGallery() {
    this.imgGallery='';
  }
  updateButtonStatus() {
    this.activeNext = this.currentImageIndex < this.imagesList.length - 1;
    this.activeBefore = this.currentImageIndex > 0;
  }
  
  nextImg() {
    if (this.currentImageIndex < this.imagesList.length - 1) {
      this.currentImageIndex++;
      this.imgGallery = this.imagesList[this.currentImageIndex].src;
      this.updateButtonStatus();
      this.currentImageNumber = this.currentImageIndex + 1;
    }
  }
  
  beforeImg() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.imgGallery = this.imagesList[this.currentImageIndex].src;
      this.updateButtonStatus();
      this.currentImageNumber = this.currentImageIndex + 1;
    }
  }
}
