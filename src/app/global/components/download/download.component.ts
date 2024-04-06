// import { Component, OnInit } from '@angular/core';
// import { DownloadModalComponent } from '../download-modal/download-modal.component'; // Ajusta la ruta
// import { MatDialog } from '@angular/material/dialog';

// @Component({
//   selector: 'app-download',
//   templateUrl: './download.component.html',
//   styleUrls: ['./download.component.scss']
// })
// export class DownloadComponent implements OnInit {

//   constructor(private dialog: MatDialog) {}

//   ngOnInit(): void {
//   } 

//   /*----------MÉTODOS-----------*/
//   downloadCV() {
//     const url = '../../../../assets/images/biography/cvSBellido2024_English.pdf';
//     fetch(url)
//       .then(response => response.blob())
//       .then(blob => {
//         const blobUrl = URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = blobUrl;
//         link.download = 'cvSBellido.pdf';
//         link.click();
//         URL.revokeObjectURL(blobUrl);

//         this.showDownloadModal(); // Llama al método para mostrar el modal
//       });
//   }

//   showDownloadModal() {
//     const dialogRef = this.dialog.open(DownloadModalComponent, {
//       disableClose: true
//     });
//     setTimeout(() => {
//       dialogRef.close();
//     }, 4000);
//   }
  
// }

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadModalComponent } from '../download-modal/download-modal.component';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  } 

  openDownloadModal() {
    const dialogRef = this.dialog.open(DownloadModalComponent, {
      disableClose: true
    });
  }
  
}
