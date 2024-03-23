/* ANGULAR */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
/* COMPONENTS */
import { GameZombieComponent } from './components/game/game-zombie.component';
/* SERVICES */
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-proyect-game',
  templateUrl: './proyect-game.component.html',
  styleUrls: ['./proyect-game.component.scss']
})
export class ProyectGameComponent implements OnInit {
  game: GameZombieComponent | undefined;

  constructor(
    private gameService: GameService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.gameService.initializeGame();

    window.onload = () => {
      this.gameService.loadGame();
    };
    this.game = new GameZombieComponent(this.gameService);
  }

  startGame(): void {
    this.gameService.startGame();
  }

  jumpCharacter(): void {
    this.gameService.jumpCharacter();
  }

  callGameOver(): void {
    this.gameService.gameOver();
  }
}