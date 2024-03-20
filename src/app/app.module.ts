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
      MatDialogModule
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }
