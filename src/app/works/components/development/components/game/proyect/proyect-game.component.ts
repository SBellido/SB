import { Component, OnInit } from '@angular/core';
import { GameComponent } from '../game.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyect-game',
  templateUrl: './proyect-game.component.html',
  styleUrls: ['./proyect-game.component.scss']
})
export class ProyectGameComponent implements OnInit {

  private game: GameComponent | undefined;

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.game = new GameComponent(this.router, this.dialog);

    window.onload = this.loadedGame;

    this.game['btnStart']!.onclick = this.startGame.bind(this);
    this.game['btnJump']!.onclick = this.jumpCharacter.bind(this);
  }

  private loadedGame() {
    this.game?.['setGame']();
    // previewSound.play();
  }

  
  private startGame() {
    this.game?.['loopGame']();
  }

  private jumpCharacter() {
    this.game?.['jumpCharacter']();
  }

  private callGameOver() {
    this.game?.['gameOver']();
  }
}
