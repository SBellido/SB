import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarBottomComponent } from './components/navbar-bottom/navbar-bottom.component'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [
    NavbarComponent,
    NavbarBottomComponent
  ],
  declarations: [ 
    NavbarComponent, 
    NavbarBottomComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class GlobalModule { }
