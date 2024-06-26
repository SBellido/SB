import { Component, Input, OnInit } from '@angular/core';
import { ItemsSection } from 'src/app/models/models';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {
  @Input() sections: ItemsSection[] = [];  
  @Input() subtitle: string = 'Trabajos realizados';
  @Input() parentColor: string = '';
  @Input() parentColorHover: string = '';

  constructor() { }  
  ngOnInit(): void { 
    this.topFunction(); 
  }
  
  OpenClose(sectionTitle: string) {
    const section = this.sections.find(
      (item) => item.title === sectionTitle);
    if (section && !section.disabled) {
      section.visible = !section.visible;

      // Check if all items are closed
      const allClosed = this.sections.every(item => !item.visible);
      if (allClosed) {
        this.topFunction(); // Call the topFunction when all items are closed
      }
    }
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}