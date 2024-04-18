import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.scss']
})
export class DownloadModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DownloadModalComponent>,
    private snackBar: MatSnackBar // Inyectar MatSnackBar en el constructor
  ) { }

  ngOnInit(): void { }

  downloadCV(language: string) {
    let fileName: string;
    let url: string;

    if (language === 'english') {
      fileName = 'cvSBellido_English.pdf';
      url = '../../../../assets/images/biography/cvSBellido2024_English.pdf';
    } else {
      fileName = 'cvSBellido_Spanish.pdf';
      url = '../../../../assets/images/biography/cvSBellido2024_Spanish.pdf';
    }

    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(blobUrl);

        this.showDownloadConfirmation();
      });

    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  showDownloadConfirmation() {
    this.snackBar.open('CV descargado con éxito. Gracias por tu interés.', 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
