import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

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
 private intervalId: any;
 private autoChangeActive: boolean = true; // Flag to control auto change

 constructor() { }

 @Input() imagesList: string[] = [];
 @Input() imgGallery: string = '';
 @Input() totalImages: number = 0;

 ngOnInit(): void {
   this.startAutoChange();
 }

 /*--------MÉTODOS -------*/ 
 startAutoChange() {
   this.intervalId = setInterval(() => {
     if (this.autoChangeActive) { // Compruebe si el cambio automático está activo
       this.nextImg();
     }
   }, 5000); // Cambia imagen cada 5 segundos
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
   this.currentImageNumber = this.currentImageIndex + 1;
 }

 previousImg() {
   if (this.currentImageIndex > 0) {
     this.currentImageIndex--;
   } else {
     this.currentImageIndex = this.imagesList.length - 1;
   }
   this.imgGallery = this.imagesList[this.currentImageIndex];
   this.currentImageNumber = this.currentImageIndex + 1;
 }

 //  Método para controlar la interacción del usuario con la galería
 onGalleryInteraction() {
   this.autoChangeActive = false; // Desactivar el cambio automático
   this.stopAutoChange(); // Detener el cambio automático
 }

 //  Método para reanudar el cambio automático después de la interacción del usuario
 resumeAutoChange() {
   this.autoChangeActive = true; // Habilitar el cambio automático
   this.startAutoChange(); // Iniciar el cambio automático
 }

 onClickImage() {
   this.onGalleryInteraction(); // Llame al método para controlar la interacción de la galería
 }
}