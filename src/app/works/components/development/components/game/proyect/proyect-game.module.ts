// proyect-game.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectGameComponent } from './proyect-game.component';
import { CharacterComponent } from './components/character/character.component';
import { GameComponent } from './components/game/game.component';
import { ObstacleComponent } from './components/obstacle/obstacle.component';

@NgModule({
  exports: [
    GameComponent
  ],
  declarations: [
    ProyectGameComponent,
    CharacterComponent,
    GameComponent,
    ObstacleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProyectGameModule { }
