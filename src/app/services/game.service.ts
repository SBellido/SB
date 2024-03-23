// game.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  loadGame$ = new Subject<void>();
  initializeGame$ = new Subject<void>();
  startGame$ = new Subject<void>();
  jumpCharacter$ = new Subject<void>();
  callGameOver$ = new Subject<void>();
  backgroundMoving$ = new Subject<boolean>();

  loadGame(): void {
    this.loadGame$.next();
  }

  initializeGame(): void {
    this.initializeGame$.next();
  }

  startGame(): void {
    this.startGame$.next();
  }

  jumpCharacter(): void {
    this.jumpCharacter$.next();
  }

  gameOver(): void {
    this.callGameOver$.next();
  }

  moveBackground(): void {
    this.backgroundMoving$.next(true);
  }

}
