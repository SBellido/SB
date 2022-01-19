/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './components/biography/biography.component';
import { GraphPublicityComponent } from './components/design/components/graph-publicity/graph-publicity.component';
import { IllustrationSketchComponent } from './components/design/components/illustration-sketch/illustration-sketch.component';
import { UxUiComponent } from './components/design/components/ux-ui/ux-ui.component';
import { DesignComponent } from './components/design/design.component';
import { DevelopmentComponent } from './components/development/development.component';

/* Components*/
import { HomeComponent } from './components/home/home.component';
import { InterventionComponent } from './components/intervention/intervention.component';
import { WorksComponent } from './works.component';

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
    children: [     
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'design/graph-publicity',
        pathMatch: 'full',
        component: GraphPublicityComponent
      },
      {
        path: 'design/ux-ui',
        pathMatch: 'full',
        component: UxUiComponent
      },
      {
        path: 'design/illustration-sketch',
        component: IllustrationSketchComponent
      },
      {
        path: 'design',
        component: DesignComponent
      },
      {
        path: 'development',
        component: DevelopmentComponent
      },
      {
        path: 'intervention',
        component: InterventionComponent
      },
      {
        path: 'biography',
        component: BiographyComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WorksRoutingModule { }
