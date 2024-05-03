import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('title') titleElement: ElementRef | undefined;
  introHeight: number = 70; // Valor inicial del height
  originalHeight: number = 70; // Guarda el valor original de la altura
  mobileMaxWidth: number = 768; // Ancho máximo para dispositivos móviles
  desktopMinWidth: number = 1920; // Ancho mínimo para escritorio

  constructor(public loadingService: LoadingService) { }
  
  ngOnInit(): void {
    this.topFunction();
    const titleElement = this.titleElement?.nativeElement;
    window.onload = () => {
      this.loadingService.setLoadingState(false);
    };

    // Preguntar en el ngOnInit si la pantalla mide más de 1920 para inicializar introHeight
    if (window.innerWidth > this.desktopMinWidth) {
      
      this.introHeight = 50;
    }
  }

  onCardClicked(): void {
    if (this.shouldChangeHeight()) {
      if (this.introHeight === this.originalHeight) {
        this.introHeight = 215; // Cambia al valor deseado si es el valor original
      } else if (window.innerWidth == 2560) {
        console.log("window.innerWidth: ", window.innerWidth);
        
        // Si la pantalla está entre 1920px y 2560px de ancho, establece introHeight en 20
        this.introHeight = 20;
      }
      } else {
        this.introHeight = this.originalHeight; // Vuelve al valor original si ya está cambiado
    }
  }

  shouldChangeHeight(): boolean {
    return window.innerWidth < this.mobileMaxWidth; // Verifica si el ancho de la pantalla es menor que el ancho máximo para dispositivos móviles
  }
  
  preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
}
