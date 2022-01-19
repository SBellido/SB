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
import { AcademicComponent } from './components/biography/components/academic/academic.component';
import { LaborComponent } from './components/biography/components/labor/labor.component';
import { PersonalComponent } from './components/biography/components/personal/personal.component';
import { PrivateComponent } from './components/intervention/components/private/private.component';
import { PublicComponent } from './components/intervention/components/public/public.component';


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
    IllustrationSketchComponent,
    AcademicComponent,
    LaborComponent,
    PersonalComponent,
    PrivateComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    WorksRoutingModule,
  ]
})
export class WorksModule { }
