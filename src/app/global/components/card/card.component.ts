import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Output() cardClicked: EventEmitter<void> = new EventEmitter<void>();

  transitionClass: boolean = false;

  toggleTransition(): void {
    this.transitionClass = !this.transitionClass;
    console.log("this.transitionClass: ",this.transitionClass);  
    this.cardClicked.emit();
  }
  
}
