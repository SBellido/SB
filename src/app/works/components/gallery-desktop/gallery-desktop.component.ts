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

  constructor() { 
    this.updateButtonStatus();
  }

  @Input() imagesList: string[] = [];
  @Input() imgGallery: string = '';
  @Input() totalImages: number = 0;

  ngOnInit(): void {
    console.log("Imagen actual:", this.imgGallery);

  }

  /*--------MÉTODOS -------*/ 
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imagesList']) { // Detectamos cambios en la lista de imágenes y actualizamos el contador
      this.currentImageIndex = 0; // Reiniciamos el índice para mostrar la primera imagen
      this.currentImageNumber = 1; // Reiniciamos el contador para mostrar "1 / N"
      this.updateButtonStatus(); // Actualizamos los botones de navegación
    }
  }

}