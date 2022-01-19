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
import { GraphPublicityComponent } from './components/design/components/graph-publicity/graph-publicity.component';
import { UxUiComponent } from './components/design/components/ux-ui/ux-ui.component';
import { IllustrationSketchComponent } from './components/design/components/illustration-sketch/illustration-sketch.component';


@NgModule({
  declarations: [
    WorksComponent,
    HomeComponent,
    DesignComponent,
    DevelopmentComponent,
    InterventionComponent,
    BiographyComponent,
    GraphPublicityComponent,
    UxUiComponent,
    IllustrationSketchComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    WorksRoutingModule,
  ]
})
export class WorksModule { }
