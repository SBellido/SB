/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { GlobalModule }  from '../global/global.module';
import { WorksRoutingModule } from './works-routing.module';

/* Components */
import { WorksComponent } from './works.component';
import { HomeComponent } from './components/home/home.component';
import { DesignComponent } from './components/design/design.component';
import { DevelopmentComponent } from './components/development/development.component';
import { InterventionComponent } from './components/intervention/intervention.component';
import { BiographyComponent } from './components/biography/biography.component';


@NgModule({
  declarations: [
    WorksComponent,
    HomeComponent,
    DesignComponent,
    DevelopmentComponent,
    InterventionComponent,
    BiographyComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    WorksRoutingModule,
  ]
})
export class WorksModule { }
