import { Component, OnInit } from '@angular/core';
import { ItemSection, Section } from 'src/app/models/models';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {
  
  section: Section = {
    items: [],
    allClosed: true,
  }
  item: ItemSection = {
    id:  0,
    title: '',
    active: false,
    value: ''
  }

  constructor() { }  

  ngOnInit(): void {  
  }
  
}