import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

export class LoaderComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.isLoading().subscribe((isLoading: boolean) => {
      setTimeout(() => {
        this.isLoading = isLoading;
      }, 0); // Retraso mínimo para permitir que se complete el ciclo de detección de cambios
    });
  }
}
