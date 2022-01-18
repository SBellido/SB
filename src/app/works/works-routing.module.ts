/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './components/biography/biography.component';
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
