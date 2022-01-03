import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* Primeng Modules */ 
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

/* Components */
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  exports: [
    NavbarComponent
  ],
  declarations: [ 
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule
  ]
})
export class GlobalModule { }
