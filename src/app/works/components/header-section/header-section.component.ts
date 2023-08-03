import { Component, Input, OnInit } from '@angular/core';
import { HeaderSection } from 'src/app/models/models'; 

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})

export class HeaderSectionComponent implements OnInit {
  
  @Input() header: HeaderSection[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
