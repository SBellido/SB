// import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-gallery-desktop',
//   templateUrl: './gallery-desktop.component.html',
//   styleUrls: ['./gallery-desktop.component.scss']
// })

// export class GalleryDesktopComponent implements OnInit {

// /*--------VARIABLES -------*/ 
//   currentImageNumber: number = 1;
//   activeNext: boolean = false;
//   activeBefore: boolean = false;
//   currentImageIndex: number = 0;
//   private intervalId: any;

//   constructor() { 
//     this.updateButtonStatus();
//   }

//   @Input() imagesList: string[] = [];
//   @Input() imgGallery: string = '';
//   @Input() totalImages: number = 0;

//   ngOnInit(): void {
//     this.startAutoChange();
//   }

//   /*--------MÉTODOS -------*/ 
//    // Método para iniciar el cambio automático de imágenes
//    startAutoChange() {
//     this.intervalId = setInterval(() => {
//       if (this.currentImageIndex < this.imagesList.length - 1) {
//         this.currentImageIndex++;
//       } else {
//         this.currentImageIndex = 0;
//       }
//       this.imgGallery = this.imagesList[this.currentImageIndex];
//       this.currentImageNumber = this.currentImageIndex + 1;
//       this.updateButtonStatus();
//     }, 5000); // Cambia la imagen cada 10 segundos
//   }

//   // Método para detener el cambio automático de imágenes
//   stopAutoChange() {
//     clearInterval(this.intervalId);
//   }

//   activeGallery() {
//     this.imgGallery='';
//   }

//   updateButtonStatus() {
//     this.activeNext = this.currentImageIndex < this.imagesList.length - 1;
//     this.activeBefore = this.currentImageIndex > 0;
//   }

//   nextImg() {
//     if (this.currentImageIndex < this.imagesList.length - 1) {
//       this.currentImageIndex++;
//       this.imgGallery = this.imagesList[this.currentImageIndex];
//       this.updateButtonStatus();
//       this.currentImageNumber = this.currentImageIndex + 1;
//     }
//   }

//   beforeImg() {
//     if (this.currentImageIndex > 0) {
//       this.currentImageIndex--;
//       this.imgGallery = this.imagesList[this.currentImageIndex];
//       this.updateButtonStatus();
//       this.currentImageNumber = this.currentImageIndex + 1;
//     }
//   }

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes['imagesList']) { // Detectamos cambios en la lista de imágenes y actualizamos el contador
//       this.currentImageIndex = 0; // Reiniciamos el índice para mostrar la primera imagen
//       this.currentImageNumber = 1; // Reiniciamos el contador para mostrar "1 / N"
//       this.updateButtonStatus(); // Actualizamos los botones de navegación
//     }
//   }

// }

import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gallery-desktop',
  templateUrl: './gallery-desktop.component.html',
  styleUrls: ['./gallery-desktop.component.scss']
})

export class GalleryDesktopComponent implements OnInit {

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