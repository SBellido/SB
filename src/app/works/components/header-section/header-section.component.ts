import { Component, Input, OnInit } from '@angular/core';
import { GalleryImage, HeaderSection } from 'src/app/models/models'; 

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})

export class HeaderSectionComponent implements OnInit {
  
  @Input() header: HeaderSection[] = [];
  @Input() routerLink: string = '';
  @Input() imgGallery: string = '';
  @Input() imagesList : GalleryImage[] = [];
  @Input() isImagesListEmpty: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isImagesListEmpty = this.imagesList.length === 0;
  }

  loadImages0() {
    this.imagesList = [];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages1() {
    this.imagesList = [];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages2() {
    this.imagesList = [];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages3() {
    this.imagesList = [];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages4() {
    this.imagesList = [];
    this.imgGallery = this.imagesList[0].src;
  }
  loadImages5() {
    this.imagesList = [];
    this.imgGallery = this.imagesList[0].src;
  }
  onChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'imagesList1') {
      this.loadImages0();
    } else if (selectedValue === 'imagesList2') {
      this.loadImages1();
    } else if (selectedValue === 'imagesList3') {
      this.loadImages2();
    } else if (selectedValue === 'imagesList4') {
      this.loadImages3();
    } else if (selectedValue === 'imagesList5') {
      this.loadImages4();
    } else if (selectedValue === 'imagesList6') {
      this.loadImages5();
    }
  }

}
