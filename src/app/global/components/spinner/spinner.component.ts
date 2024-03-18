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
    window.addEventListener('load', () => {
      this.isLoading = false; // Después de cargar completamente la página, establece isLoading a false para ocultar el spinner
    });
  }
}
