import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GalleryImage, HeaderSection } from 'src/app/models/models'; 

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})

export class HeaderSectionComponent implements OnInit {
  
  @Input() header: HeaderSection[] = [];;

  onSelectChange(event: Event) {}

  constructor() {}
  ngOnInit() {}

}
