import { Component } from '@angular/core';

@Component({
  selector: 'app-obstacle',
  templateUrl: './obstacle.component.html',
  styleUrls: ['./obstacle.component.scss']
})
export class ObstacleComponent {
  rock: HTMLElement;
  bomb: HTMLElement;
  thorn: HTMLElement;
  obstacles: HTMLElement[];

  constructor() {
    this.rock = document.getElementById('obstacleRock')!;
    this.bomb = document.getElementById('obstacleBomb')!;
    this.thorn = document.getElementById('obstacleThorn')!;
    this.obstacles = [];
    this.pushObstacles();
  }

  pushObstacles(): void {
    this.obstacles.push(this.rock);
    this.obstacles.push(this.bomb);
    this.obstacles.push(this.thorn);
  }

  showAllObstacles(): void {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obst = this.obstacles[i];
      obst.classList.remove('hide');
      if (obst === this.rock) {
        obst.classList.add('obstacleRock');
      } else if (obst === this.bomb) {
        obst.classList.add('obstacleBomb');
      } else if (obst === this.thorn) {
        obst.classList.add('obstacleThorn');
      }
    }
  }

  hideAllObstacles(): void {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obst = this.obstacles[i];
      obst.classList.add('hide');
    }
  }

  getPositionAllObstacles(): void {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obst = this.obstacles[i];
      // Aquí puedes obtener la posición del obstáculo y realizar otras operaciones si es necesario
    }
  }
}
