/* Angular */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { GlobalModule }  from '../global/global.module';
import { WorksRoutingModule } from './works-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ProyectGameModule } from '../works/components/development/components/game/proyect/proyect-game.module';

/* Components */
import { WorksComponent } from './works.component';
import { HomeComponent } from './components/home/home.component';
import { DesignComponent } from './components/design/design.component';
import { DevelopmentComponent } from './components/development/development.component';
import { BiographyComponent } from './components/biography/biography.component';
import { AcademicComponent } from './components/biography/components/academic/academic.component';
import { LaborComponent } from './components/biography/components/labor/labor.component';
import { PersonalComponent } from './components/biography/components/personal/personal.component';
import { VLifeComponent } from './components/design/components/ux-ui/components/v-life/v-life.component';
import { TravelLogComponent } from './components/design/components/ux-ui/components/travel-log/travel-log.component';
import { NighxComponent } from './components/design/components/ux-ui/components/nighx/nighx.component';
import { YpfComponent } from './components/design/components/ux-ui/components/ypf/ypf.component';
import { BrandsButtonsComponent } from './components/brands-buttons/brands-buttons.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryDesktopComponent } from './components/gallery-desktop/gallery-desktop.component';
import { InvestigarComponent } from './components/development/components/investigar/investigar.component';
import { XuboxComponent } from './components/development/components/xubox/xubox.component';
import { HuntComponent } from './components/development/components/hunt/hunt.component';
import { StormtechComponent } from './components/development/components/stormtech/stormtech.component';
import { GalleryPolaroidComponent } from './components/gallery-polaroid/gallery-polaroid.component';
import { BrandsSectionComponent } from './components/design/components/brands-section/brands-section.component';
import { CompetitionsComponent } from './components/design/components/competitions/competitions.component';
import { PublicationsComponent } from './components/design/components/publications/publications.component';
import { QxComponent } from './components/development/components/qx/qx.component';
import { SectionComponent } from './components/section/section.component';
import { HighlightDirective } from '../directives/highlight.directive'; 
import { InfoComponent } from './components/info/info.component';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { InfoMobileComponent } from './components/info-mobile/info-mobile.component';
import { InfoPolaroidComponent } from './components/info-polaroid/info-polaroid.component';
import { GameComponent } from './components/development/components/game/game.component';

@NgModule({
  declarations: [
    WorksComponent,
    HomeComponent,
    DesignComponent,
    DevelopmentComponent,
    BiographyComponent,
    AcademicComponent,
    LaborComponent,
    PersonalComponent,
    VLifeComponent,
    TravelLogComponent,
    NighxComponent,
    YpfComponent,
    BrandsButtonsComponent,
    GalleryComponent,
    GalleryDesktopComponent,
    InvestigarComponent,
    XuboxComponent,
    HuntComponent,
    StormtechComponent,
    GalleryPolaroidComponent,
    BrandsSectionComponent,
    CompetitionsComponent,
    PublicationsComponent,
    QxComponent,
    SectionComponent,
    HighlightDirective,
    InfoComponent,
    TecnologiesComponent,
    HeaderSectionComponent,
    InfoMobileComponent,
    InfoPolaroidComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule,
    WorksRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatSelectModule,
    ProyectGameModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WorksModule { }
