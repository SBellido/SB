import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-obstacle',
  templateUrl: './obstacle.component.html',
  styleUrls: ['./obstacle.component.scss']
})
export class ObstacleComponent {
  @ViewChild('rock') rockRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('bomb') bombRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('thorn') thornRef: ElementRef<HTMLDivElement> | undefined;
  private obstacles: ElementRef<HTMLDivElement>[] = [];


  constructor() {}

  ngOnInit(): void {
    if (this.rockRef && this.bombRef && this.thornRef) {
      this.rockRef.nativeElement.classList.add('obstacleRock');
      this.bombRef.nativeElement.classList.add('obstacleBomb');
      this.thornRef.nativeElement.classList.add('obstacleThorn');
      this.pushObstacles();
    }
  }
  
  getObstacles(): ElementRef<HTMLDivElement>[] {
    return [...this.obstacles];
  }

  pushObstacles(): void {
    if (this.rockRef && this.bombRef && this.thornRef) {
      this.obstacles!.push(this.rockRef, this.bombRef, this.thornRef);
    }
  }

  showAllObstacles(): void {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obst = this.obstacles[i].nativeElement;
      obst.classList.remove('hide');
      if (obst === this.rockRef?.nativeElement) {
        obst.classList.add('obstacleRock');
      } else if (obst === this.bombRef?.nativeElement) {
        obst.classList.add('obstacleBomb');
      } else if (obst === this.thornRef?.nativeElement) {
        obst.classList.add('obstacleThorn');
      }
    }
  }

  hideAllObstacles(): void {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obst = this.obstacles[i].nativeElement;
      obst.classList.add('hide');
    }
  }

  getPositionAllObstacles(): void {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obst = this.obstacles[i].nativeElement;
      const rect = obst.getBoundingClientRect();
      const position = {
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom
      };
      console.log(`Posición del obstáculo ${i + 1}: `, position);
      // Puedes realizar otras operaciones con la posición del obstáculo aquí
    }
  }
  
}
