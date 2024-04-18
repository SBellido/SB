import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('title') titleElement: ElementRef | undefined;
  introHeight: number = 80; // Valor inicial del height
  originalHeight: number = 80; // Guarda el valor original de la altura
  mobileMaxWidth: number = 768; // Ancho máximo para dispositivos móviles

  constructor(
    public loadingService: LoadingService,
  ) { }
  
  
  ngOnInit(): void {
    this.topFunction();
    const titleElement = this.titleElement?.nativeElement;
    window.onload = () => {
      this.loadingService.setLoadingState(false);
    }; 
  }

  onCardClicked(): void {
    if (this.shouldChangeHeight()) {
      if (this.introHeight === this.originalHeight) {
        this.introHeight = 215; // Cambia al valor deseado si es el valor original
      } else {
        this.introHeight = this.originalHeight; // Vuelve al valor original si ya está cambiado
      }
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
