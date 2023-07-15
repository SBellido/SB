import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  visibleLabor: boolean = false;
  visibleAcademic: boolean = false;
  visiblePersonal: boolean = false;

  public area: string = 'perfil';
  public icon: string = 'fingerprint';

  constructor(private router: Router) { }

  ngOnInit(): void {  
    this.topFunction();
  }

  /*------------MÉTODOS--------------*/
  descargarPDF() {
    const url = '../../../../assets/images/biography/SebastianBellido_CV2023_ok.pdf';
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'CV_Sebastian_Bellido.pdf';
        link.click();
        URL.revokeObjectURL(blobUrl);
      });
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  showMoreLabor() {  
    this.visibleLabor ? 
      this.visibleLabor = false : 
        this.visibleLabor = true,
        this.visibleAcademic = false; 
        this.visiblePersonal = false;
  }

  showMoreAcademic() {
    this.visibleAcademic ? 
      this.visibleAcademic = false : 
        this.visibleAcademic = true,
        this.visibleLabor = false;
        this.visiblePersonal = false;
  }
  
  showMorePersonal() {
    this.visiblePersonal? 
      this.visiblePersonal = false : 
        this.visiblePersonal = true,
        this.visibleLabor = false;
        this.visibleAcademic = false; 
  }
}
