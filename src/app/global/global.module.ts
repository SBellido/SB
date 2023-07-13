/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

/* Modules */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [
    NavbarComponent,
    FooterComponent,
  ],
  declarations: [ 
    NavbarComponent, 
    FooterComponent, 
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatGridListModule,
    MatDividerModule
  ]
})

export class GlobalModule { }
