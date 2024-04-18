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
