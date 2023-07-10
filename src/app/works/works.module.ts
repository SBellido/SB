/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { GlobalModule }  from '../global/global.module';
import { WorksRoutingModule } from './works-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

/* Components */
import { WorksComponent } from './works.component';
import { HomeComponent } from './components/home/home.component';
import { DesignComponent } from './components/design/design.component';
import { DevelopmentComponent } from './components/development/development.component';
import { BiographyComponent } from './components/biography/biography.component';
import { GraphicComponent } from './components/design/components/graphic/graphic.component';
import { UxUiComponent } from './components/design/components/ux-ui/ux-ui.component';
import { ExperimentalComponent } from './components/design/components/experimental/experimental';
import { AcademicComponent } from './components/biography/components/academic/academic.component';
import { LaborComponent } from './components/biography/components/labor/labor.component';
import { PersonalComponent } from './components/biography/components/personal/personal.component';
import { VLifeComponent } from './components/design/components/ux-ui/components/v-life/v-life.component';
import { TravelLogComponent } from './components/design/components/ux-ui/components/travel-log/travel-log.component';
import { NightComponent } from './components/design/components/ux-ui/components/night/night.component';
import { HuntComponent } from './components/design/components/ux-ui/components/hunt/hunt.component';

@NgModule({
  declarations: [
    WorksComponent,
    HomeComponent,
    DesignComponent,
    DevelopmentComponent,
    BiographyComponent,
    GraphicComponent,
    UxUiComponent,
    ExperimentalComponent,
    AcademicComponent,
    LaborComponent,
    PersonalComponent,
    VLifeComponent,
    TravelLogComponent,
    NightComponent,
    HuntComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    WorksRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class WorksModule { }
