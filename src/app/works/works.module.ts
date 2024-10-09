/* Angular */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { GlobalModule } from '../global/global.module';
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
import { GalleryPolaroidComponent } from './components/gallery-polaroid/gallery-polaroid.component';
import { GalleryEditorialComponent } from './components/gallery-editorial/gallery-editorial.component';
import { InvestigarComponent } from './components/development/components/investigar/investigar.component';
import { XuboxComponent } from './components/development/components/xubox/xubox.component';
import { HuntComponent } from './components/development/components/hunt/hunt.component';
import { StormtechComponent } from './components/development/components/stormtech/stormtech.component';
import { BrandsSectionComponent } from './components/design/components/brands-section/brands-section.component';
import { CompetitionsComponent } from './components/design/components/competitions/competitions.component';
import { PublicationsComponent } from './components/design/components/publications/publications.component';
import { QxComponent } from './components/development/components/qx/qx.component';
import { SectionComponent } from './components/section/section.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { InfoComponent } from './components/info/info.component';
import { InfoMobileComponent } from './components/info-mobile/info-mobile.component';
import { InfoPolaroidComponent } from './components/info-polaroid/info-polaroid.component';
import { InfoEditorialComponent } from './components/info-editorial/info-editorial.component';
import { GameComponent } from './components/development/components/game/game.component';
import { PortalComponent } from './components/development/components/ruano/portal.component';
import { PlatziReact } from './components/development/components/platzi-react/platzi-react.component';
import { EditorialComponent } from './components/design/components/editorial/editorial.component';
import { CubeComponent } from './components/cube/cube.component';
import { CardComponent } from '../global/components/card/card.component';
import { BooksComponent } from '../works/components/design/components/editorial/books/books.component';

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
    GalleryPolaroidComponent,
    GalleryEditorialComponent,
    InvestigarComponent,
    XuboxComponent,
    HuntComponent,
    StormtechComponent,
    BrandsSectionComponent,
    CompetitionsComponent,
    PublicationsComponent,
    QxComponent,
    SectionComponent,
    HighlightDirective,
    TecnologiesComponent,
    HeaderSectionComponent,
    InfoComponent,
    InfoMobileComponent,
    InfoPolaroidComponent,
    InfoEditorialComponent,
    GameComponent,
    PortalComponent,
    PlatziReact,
    EditorialComponent,
    CubeComponent,
    CardComponent,
    BooksComponent,
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
