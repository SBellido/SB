import { Component, Input, OnInit } from '@angular/core';
import { GalleryImage, ItemSection, Section } from 'src/app/models/models';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {
  
  @Input() area: string | undefined;
  @Input() imagesList: GalleryImage[] = [];
  @Input() imgGallery: string = ''; 
  @Input() totalImages: number | undefined;
  @Input() brands: string[] | undefined;

  constructor() { }  

  ngOnInit(): void {  
  }
  
}