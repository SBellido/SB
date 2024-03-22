/* Angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ErrorFourZeroFourComponent } from './errors/error-four-zero-four/error-four-zero-four.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorksModule } from './works/works.module';
import { GlobalModule } from "./global/global.module";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ProyectGameModule } from './works/components/development/components/game/proyect/proyect-game.module';

@NgModule({
    declarations: [
      AppComponent,
      ErrorFourZeroFourComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      WorksModule,
      GlobalModule,
      MatDialogModule,
      MatIconModule,
      ProyectGameModule
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }
