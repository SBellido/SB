import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-polaroid',
  templateUrl: './gallery-polaroid.component.html',
  styleUrls: ['./gallery-polaroid.component.scss']
})
export class GalleryPolaroidComponent implements OnInit {

  /*--------VARIABLES -------*/ 
  currentImageNumber: number = 1;
  activeNext: boolean = false;
  activeBefore: boolean = false;
  currentImageIndex: number = 0;
  
  constructor() { 
    this.updateButtonStatus();
  }
  
  @Input() imagesList: string[] = [];
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
      this.imgGallery = this.imagesList[this.currentImageIndex];
      this.updateButtonStatus();
      this.currentImageNumber = this.currentImageIndex + 1;
    }
  }
  
  beforeImg() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.imgGallery = this.imagesList[this.currentImageIndex];
      this.updateButtonStatus();
      this.currentImageNumber = this.currentImageIndex + 1;
    }
  }
}
