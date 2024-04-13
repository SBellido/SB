import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gallery-editorial',
  templateUrl: './gallery-editorial.component.html',
  styleUrls: ['./gallery-editorial.component.scss']
})

export class GalleryEditorialComponent implements OnInit {
  
 /*--------VARIABLES -------*/ 
 currentImageNumber: number = 1;
 activeNext: boolean = false;
 activeBefore: boolean = false;
 currentImageIndex: number = 0;
 private intervalId: any;
 private autoChangeActive: boolean = true; // Flag to control auto change

 constructor() { 
   this.updateButtonStatus();
 }

 @Input() imagesList: string[] = [];
 @Input() imgGallery: string = '';
 @Input() totalImages: number = 0;

 ngOnInit(): void {
   this.startAutoChange();
 }

 /*--------MÉTODOS -------*/ 
 startAutoChange() {
   this.intervalId = setInterval(() => {
     if (this.autoChangeActive) { // Check if auto change is active
       this.nextImg();
     }
   }, 5000); // Change image every 5 seconds
 }
 
 stopAutoChange() {
   clearInterval(this.intervalId);
 }

 nextImg() {
   if (this.currentImageIndex < this.imagesList.length - 1) {
     this.currentImageIndex++;
   } else {
     this.currentImageIndex = 0;
   }
   this.imgGallery = this.imagesList[this.currentImageIndex];
 }

 previousImg() {
   if (this.currentImageIndex > 0) {
     this.currentImageIndex--;
   } else {
     this.currentImageIndex = this.imagesList.length - 1;
   }
   this.imgGallery = this.imagesList[this.currentImageIndex];
 }

 // Method to handle user interaction with the gallery
 onGalleryInteraction() {
   this.autoChangeActive = false; // Disable auto change
   this.stopAutoChange(); // Stop auto change
 }

 // Method to resume auto change after user interaction
 resumeAutoChange() {
   this.autoChangeActive = true; // Enable auto change
   this.startAutoChange(); // Start auto change
 }

 updateButtonStatus() {
   this.activeNext = this.currentImageIndex < this.imagesList.length - 1;
   this.activeBefore = this.currentImageIndex > 0;
 }

 beforeImg() {
   if (this.currentImageIndex > 0) {
     this.currentImageIndex--;
     this.imgGallery = this.imagesList[this.currentImageIndex];
     this.updateButtonStatus();
     this.currentImageNumber = this.currentImageIndex + 1;
   }
 }

 ngOnChanges(changes: SimpleChanges) {
   if (changes['imagesList']) { 
     this.currentImageIndex = 0; 
     this.currentImageNumber = 1; 
     this.updateButtonStatus(); 
   }
 }

 onClickImage() {
   this.onGalleryInteraction(); // Call the method to handle gallery interaction
 }
}