import { Component, OnInit } from '@angular/core';
import { DownloadModalComponent } from '../download-modal/download-modal.component'; // Ajusta la ruta
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  } 

  /*----------MÉTODOS-----------*/
  // downloadCV() {
  //   const url = '../../../../assets/images/biography/SebastianBellido_CV2023_ok.pdf';
  //   fetch(url)
  //     .then(response => response.blob())
  //     .then(blob => {
  //       const blobUrl = URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = blobUrl;
  //       link.download = 'CV_Sebastian_Bellido.pdf';
  //       link.click();
  //       URL.revokeObjectURL(blobUrl);
  //     });
  // }
  downloadCV() {
    const url = '../../../../assets/images/biography/cvSBellido_.pdf';
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'cvSBellido_.pdf';
        link.click();
        URL.revokeObjectURL(blobUrl);

        this.showDownloadModal(); // Llama al método para mostrar el modal
      });
  }
  // showDownloadModal() {
  //   this.dialog.open(DownloadModalComponent, {
  //     width: '400px',
  //     data: {
  //       message: 'El archivo se ha descargado exitosamente.'
  //     }
  //   });
  // }
  showDownloadModal() {
    const dialogRef = this.dialog.open(DownloadModalComponent, {
      disableClose: true
    });
    setTimeout(() => {
      dialogRef.close();
    }, 4000);
  }
  
}
