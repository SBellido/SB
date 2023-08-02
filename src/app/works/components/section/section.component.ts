import { Component, Input, OnInit } from '@angular/core';
import { Button, ItemsSection } from 'src/app/models/models';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {

  @Input() sections: ItemsSection[] = [];
  @Input() brands: Button[] = [];
  
  constructor() { }  

  ngOnInit(): void {  
  }
  
  OpenClose(sectionTitle: string) {
    const section = this.sections.find(
      (item) => item.title === sectionTitle);
    if (section && !section.disabled) {
      section.visible = !section.visible;
    }
  }


}