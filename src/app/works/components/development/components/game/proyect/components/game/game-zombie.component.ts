/*ANGULAR*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
/*COMPONENTS*/
import { CharacterComponent } from '../character/character.component';
import { ObstacleComponent } from '../obstacle/obstacle.component';
/*SERVICES*/
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-zombie',
  templateUrl: './game-zombie.component.html',
  styleUrls: ['./game-zombie.component.scss']
})
export class GameZombieComponent implements OnInit {
  @ViewChild('character') characterRef: CharacterComponent | undefined;

  @ViewChild('startButton') startButtonRef: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild('jumpButton') jumpButtonRef: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild('logoGame') logoGameRef: ElementRef<HTMLElement> | undefined;
  @ViewChild('gameOverLogo') gameOverLogoRef: ElementRef<HTMLElement> | undefined;
  @ViewChild('obstaclesLayer') obstaclesLayerRef: ElementRef<HTMLElement> | undefined;
  
  @ViewChild('fogGreen') fogGreenRef: ElementRef<HTMLElement> | undefined;
  @ViewChild('fog') fogRef: ElementRef<HTMLElement> | undefined;
  @ViewChild('background') backgroundRef: ElementRef<HTMLElement> | undefined;
  @ViewChild('background_L1') background_L1Ref: ElementRef<HTMLElement> | undefined;
  @ViewChild('background_L2') background_L2Ref: ElementRef<HTMLElement> | undefined;
  @ViewChild('background_L3') background_L3Ref: ElementRef<HTMLElement> | undefined;
  @ViewChild('background_L4') background_L4Ref: ElementRef<HTMLElement> | undefined;
  @ViewChild('background_L5') background_L5Ref: ElementRef<HTMLElement> | undefined;
  
  characterInitialized: boolean = false; 
  character: CharacterComponent;
  obstacle: ObstacleComponent;
  gameInterval: any;
  gameStarted: boolean;
  parallaxMoving: boolean;

  constructor(private gameService: GameService) {
    this.character = new CharacterComponent;
    this.obstacle = new ObstacleComponent;
    this.gameInterval = null;
    this.gameStarted = false;
    this.parallaxMoving = false;    
  }

  ngOnInit(): void {
    this.characterInitialized = true;
    this.setGame();
    this.gameService.startGame$.subscribe(() => this.loopGame());
    this.gameService.jumpCharacter$.subscribe(() => this.jumpCharacter());
    this.gameService.callGameOver$.subscribe(() => this.gameOver());
  }

  setGame(): void { 
    if (!this.characterInitialized) {
      return; 
    } else {
      this.character.motionless();
      this.startButtonRef!.nativeElement.classList.add('startButton');
      this.jumpButtonRef!.nativeElement.classList.add('jumpButtonInactive');
      this.logoGameRef!.nativeElement.style.visibility = 'visible';
      this.gameOverLogoRef!.nativeElement.style.visibility = 'hidden';
      this.backgroundRef!.nativeElement.classList.add('background');
      this.fogRef!.nativeElement.classList.add('fog');
      this.fogGreenRef!.nativeElement.classList.add('fogGreen');
    }    
  }

  showBackgroundLayer() {
    this.background_L1Ref!.nativeElement.style.visibility = 'show';
    this.background_L2Ref!.nativeElement.style.visibility = 'show';
    this.background_L3Ref!.nativeElement.style.visibility = 'show';
    this.background_L4Ref!.nativeElement.style.visibility = 'show';
    this.background_L5Ref!.nativeElement.style.visibility = 'show';
    this.obstaclesLayerRef!.nativeElement.style.visibility = 'show';
  }

  showObstacles(): void {
    this.obstacle.showAllObstacles();
  }

  loopGame() {
    alert("PUTO EL QUE LEE")
    this.inicializeGame();
    this.gameInterval = setInterval(() => {
      this.checkCollision();
    }, 100);
  }

  jumpCharacter() {
    if (this.gameStarted) {
      this.character.jump(); 
    }
  }

  inicializeGame() {
    alert("PUTO EL QUE LEE")
    // gamingSound.loop = true;
    // gamingSound.play();
    this.gameStarted = true;
    this.startButtonRef!.nativeElement.style.visibility = 'hide';
    this.jumpButtonRef!.nativeElement.classList.add('jumpButton');
    this.backgroundRef!.nativeElement.style.visibility = 'hide';
    this.gameOverLogoRef!.nativeElement.style.visibility = 'hide';
    this.character.run();
    this.moveBackground();
    this.parallaxMoving ? this.character.run() : this.character.motionless()
    this.logoGameRef!.nativeElement.style.visibility = 'hide';
    this.showObstacles();    
  }

  checkCollision() {
    const characterState = this.character.getState();
    if (characterState === 'run') {
      console.log("evalúa colision");
      const characterBounds = this.character.getCharacterElement().getBoundingClientRect();
      for (let obstacle of this.obstacle.getObstacles()) {
        const obstacleBounds = obstacle.nativeElement.getBoundingClientRect();
        if (
          characterBounds.left < obstacleBounds.right &&
          characterBounds.right > obstacleBounds.left &&
          characterBounds.top < obstacleBounds.bottom &&
          characterBounds.bottom > obstacleBounds.top
        ) {
          this.gameOver(); 
          return;
        }
      }
    }
  }

  moveBackground() {
    console.log("Fonde se mueve");
    this.parallaxMoving = true;
    this.background_L1Ref!.nativeElement.classList.add('background_L1');
    this.background_L2Ref!.nativeElement.classList.add('background_L2');
    this.background_L3Ref!.nativeElement.classList.add('background_L3');
    this.background_L4Ref!.nativeElement.classList.add('background_L4');
    this.background_L5Ref!.nativeElement.classList.add('background_L5');

    this.obstaclesLayerRef!.nativeElement.classList.add
  }
  
  stopBackground() {
    console.log("Fonde se detiene");
    this.parallaxMoving = false;
    this.background_L1Ref!.nativeElement.style.animationPlayState = 'paused';
    this.background_L2Ref!.nativeElement.style.animationPlayState = 'paused';
    this.background_L3Ref!.nativeElement.style.animationPlayState = 'paused';
    this.background_L4Ref!.nativeElement.style.animationPlayState = 'paused';
    this.background_L5Ref!.nativeElement.style.animationPlayState = 'paused';
    this.obstaclesLayerRef!.nativeElement.style.animationPlayState = 'paused';
  }

  gameOver() {
    console.log("Game over");
    this.character.dead();
    // this.gamingSound.pause();
    // this.dead.play();
    this.stopBackground();
    this.setGameOver();  
  } 

  setGameOver() {
    console.log("Set game over");
    this.logoGameRef!.nativeElement.style.visibility = 'hidden';
    this.gameOverLogoRef!.nativeElement.classList.add('gameOver');
    this.gameOverLogoRef!.nativeElement.style.visibility = 'visible';
    this.backgroundRef!.nativeElement.classList.add('backgroundMotionless');
    setTimeout(() => {
        this.setGame();
        window.location.reload();
    }, 3000); 
  }
}
