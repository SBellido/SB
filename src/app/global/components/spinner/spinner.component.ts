import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = true; // Por defecto, mostrar el spinner al principio

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
    
  }
  @HostListener('window:load', ['$event'])
  onLoad(event: Event): void {
    if (this.isLoading) {
      this.isLoading = false;
    }
  }
}
