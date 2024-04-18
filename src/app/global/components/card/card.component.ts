import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @ViewChild('title') titleElement: ElementRef | undefined;
  @Output() cardClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(public loadingService: LoadingService) { }
  
  ngOnInit(): void {
    const titleElement = this.titleElement?.nativeElement;
    window.onload = () => {
      this.loadingService.setLoadingState(false);
    }; 
  }
  
  transitionClass: boolean = false;

  toggleTransition(): void {
    this.transitionClass = !this.transitionClass;
    console.log("this.transitionClass: ",this.transitionClass);  
    this.cardClicked.emit();
  }
  
}
