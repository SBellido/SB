import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  visibleUxUi: boolean = false;
  visibleGraph: boolean = false;
  visibleIllustration: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMoreUxUi() {  
    this.visibleUxUi ? 
      this.visibleUxUi = false : 
        this.visibleUxUi = true, 
        this.visibleGraph = false,
        this.visibleIllustration = false;     
  }
  showMoreGraph() {
    this.visibleGraph ? 
      this.visibleGraph = false : 
        this.visibleGraph = true,
        this.visibleUxUi = false,
        this.visibleIllustration = false;  
    }
  showMoreIllustration() {
    this.visibleIllustration ? 
      this.visibleIllustration = false : 
      this.visibleIllustration = true,
      this.visibleUxUi = false,
      this.visibleGraph = false;  
    
  }

}
