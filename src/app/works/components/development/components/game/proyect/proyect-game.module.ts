// proyect-game.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectGameComponent } from './proyect-game.component';
import { GameZombieComponent } from './components/game/game-zombie.component';
import { CharacterComponent } from './components/character/character.component';
import { ObstacleComponent } from './components/obstacle/obstacle.component';

@NgModule({
  exports: [
    ProyectGameComponent,
    GameZombieComponent,
    CharacterComponent,
    ObstacleComponent
  ],
  declarations: [
    ProyectGameComponent,
    CharacterComponent,
    ObstacleComponent,
    GameZombieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProyectGameModule { }
