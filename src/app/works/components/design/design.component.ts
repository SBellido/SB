import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  public area: string = 'diseño';
  public icon: string = 'local_florist';
  visibleUxUi: boolean = false;
  visibleGraph: boolean = false;
  visibleIllustration: boolean = false;
  visibleDesigns: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {  
    this.topFunction();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  showMoreUxUi() {  
    this.visibleUxUi ? 
      this.visibleUxUi = false : 
        this.visibleUxUi = true, 
        this.visibleGraph = false,
        this.visibleIllustration = false;     
  }
  routingVlife() {    
    this.router.navigate(["works/design/ux-ui/v-life"])
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
  showMoreDesigns() {
    this.visibleDesigns ? 
      this.visibleDesigns = false : 
        this.visibleDesigns = true;
  }

}
