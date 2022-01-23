import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  visible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  showMoreUxUi() {  
    this.visible ? 
      this.visible = false : this.visible = true; 
      
  }
}
