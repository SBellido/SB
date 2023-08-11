import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.scss']
})
export class DownloadModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DownloadModalComponent>) { }
  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }
}
