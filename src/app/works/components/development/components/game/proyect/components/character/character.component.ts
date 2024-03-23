import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @ViewChild('character') characterRef!: ElementRef<HTMLDivElement>;

  state: string;
  private character!: HTMLDivElement;

  constructor() {
    this.state = 'run';
  }

  ngAfterViewInit(): void {
    this.character = this.characterRef.nativeElement;
  }

  getState(): string {
    return this.state;
  }

  setState(state: string): void {
    this.state = state;
  }

  isMoving(): boolean {
    return this.state === 'run'; 
  }

  motionless(): void {
    this.character.classList.add('characterMotionless');
    this.setState('motionless'); 
    console.log("parado ", this.state);
  }

  run(): void {
    this.character.classList.add('characterRun');
    this.setState('run');
    console.log("corre ", this.state);
  }
  
  jump(): void {
    this.character.classList.add('characterJump');
    this.setState('jump');
    // Aquí deberías manejar la lógica para reproducir el sonido de salto
    console.log("salta ", this.state);
  }

  dead(): void {
    this.character.classList.add('characterDead');
    this.setState('dead');
    console.log("muerte ", this.state);
  }

  getCharacterElement(): HTMLDivElement {
    return this.character;
  }
}
