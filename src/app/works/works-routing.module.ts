/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components*/
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './works.component';
import { BiographyComponent } from './components/biography/biography.component';
import { AcademicComponent } from './components/biography/components/academic/academic.component';
import { LaborComponent } from './components/biography/components/labor/labor.component';
import { PersonalComponent } from './components/biography/components/personal/personal.component';
import { DesignComponent } from './components/design/design.component';
import { DevelopmentComponent } from './components/development/development.component';
import { VLifeComponent } from './components/design/components/ux-ui/components/v-life/v-life.component';
import { YpfComponent } from './components/design/components/ux-ui/components/ypf/ypf.component';
import { NighxComponent } from './components/design/components/ux-ui/components/nighx/nighx.component';
import { TravelLogComponent } from './components/design/components/ux-ui/components/travel-log/travel-log.component';
import { InvestigarComponent } from './components/development/components/investigar/investigar.component';
import { XuboxComponent } from './components/development/components/xubox/xubox.component';
import { StormtechComponent } from './components/development/components/stormtech/stormtech.component';
import { HuntComponent } from './components/development/components/hunt/hunt.component';
import { BrandsSectionComponent } from './components/design/components/brands-section/brands-section.component';
import { CompetitionsComponent } from './components/design/components/competitions/competitions.component';
import { PublicationsComponent } from './components/design/components/publications/publications.component';
import { QxComponent } from './components/development/components/qx/qx.component';
import { GameComponent } from './components/development/components/game/game.component';
import { ProyectGameComponent } from './components/development/components/game/proyect/proyect-game.component';
import { PortalComponent } from './components/development/components/ruano/portal.component';

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
        path: 'design/ux-ui/v-life',
        pathMatch: 'full',
        component: VLifeComponent
      },
      {
        path: 'design/ux-ui/ypf',
        pathMatch: 'full',
        component: YpfComponent
      },
      {
        path: 'design/ux-ui/nighx',
        pathMatch: 'full',
        component: NighxComponent
      },
      {
        path: 'design/ux-ui/travel-log',
        pathMatch: 'full',
        component: TravelLogComponent
      },
      {
        path: 'design/brands',
        pathMatch: 'full',
        component: BrandsSectionComponent
      },
      {
        path: 'design/competitions',
        pathMatch: 'full',
        component: CompetitionsComponent
      },
      {
        path: 'design/publications',
        pathMatch: 'full',
        component: PublicationsComponent
      },
      {
        path: 'development',
        component: DevelopmentComponent
      },
      {
        path: 'development/investigar',
        pathMatch: 'full',
        component: InvestigarComponent
      },
      {
        path: 'development/xubox',
        pathMatch: 'full',
        component: XuboxComponent
      },
      {
        path: 'development/qx',
        pathMatch: 'full',
        component: QxComponent
      },
      {
        path: 'development/portal',
        pathMatch: 'full',
        component: PortalComponent
      },
      {
        path: 'development/stormtech',
        pathMatch: 'full',
        component: StormtechComponent
      },
      {
        path: 'development/hunt',
        pathMatch: 'full',
        component: HuntComponent
      },
      {
        path: 'development/game',
        pathMatch: 'full',
        component: GameComponent
      },
      {
        path: 'development/game/proyect',
        pathMatch: 'full',
        component: ProyectGameComponent
      },
      {
        path: 'biography',
        component: BiographyComponent
      },
      {
        path: 'biography/academic',
        pathMatch: 'full',
        component: AcademicComponent
      },
      {
        path: 'biography/labor',
        pathMatch: 'full',
        component: LaborComponent
      },
      {
        path: 'biography/personal',
        pathMatch: 'full',
        component: PersonalComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WorksRoutingModule { }
