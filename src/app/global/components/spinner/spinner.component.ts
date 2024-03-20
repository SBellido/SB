import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = true; // Por defecto, mostrar el spinner al principio

  constructor() { }

  ngOnInit(): void {
    // Espera máximo 2 segundos para que se complete la carga
    setTimeout(() => {
      this.isLoading = false; // Después de 2 segundos, establece isLoading a false para ocultar el spinner
    }, 1500);
    
    // Listener para verificar si la carga se completó antes de los 2 segundos
    window.addEventListener('load', () => {
      this.isLoading = false; // Después de cargar completamente la página, establece isLoading a false para ocultar el spinner
    });
  }
}
