import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  /*----------MÉTODOS-----------*/
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

}
