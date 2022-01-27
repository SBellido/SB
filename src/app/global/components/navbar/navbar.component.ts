/* Angular */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  designActive:boolean = false;
  developmentActive:boolean = false;
  interventionActive:boolean = false;
  biographyActive:boolean = false;

  constructor(private router: Router) { 
  }

  ngOnInit() {
   
  }

  // route(item: string) {
  //   if (item === 'design') {
  //     this.router.navigate(['works/design']);
  //   } else if (item === 'development') {
  //     this.router.navigate(['works/development']);
  //   } else if (item === 'intervetion') {
  //     this.router.navigate(['works/intervention']);
  //   } else if (item === 'biography') {
  //     this.router.navigate(['works/biography']);
  //   } else if (item === 'home') {
  //     this.router.navigate(['works/home']);
  //   }
  //  this.getButtonsStyles(item);

  // }
  public setButtonsStyle(item: string) {
    if (item === 'design') {
      this.designActive = true;
      this.developmentActive = false;
      this.interventionActive = false; 
      this.biographyActive = false; 
      console.log(
        "diseño "+this.designActive,
        "dev "+this.developmentActive,
        "intern "+ this.interventionActive,
        "bio "+ this.biographyActive);
      this.router.navigate(['works/design']);
    } else if (item === 'development') {
      this.designActive = false; 
      this.developmentActive = true;
      this.interventionActive = false; 
      this.biographyActive = false; 
      console.log(
        "diseño "+this.designActive,
        "dev "+this.developmentActive,
        "intern "+ this.interventionActive,
        "bio "+ this.biographyActive);
      this.router.navigate(['works/development']);
    } else if (item === 'intervention') {
      this.designActive = false;
      this.developmentActive = false;
      this.interventionActive = true; 
      this.biographyActive = false; 
      console.log(
        "diseño "+this.designActive,
        "dev "+this.developmentActive,
        "intern "+ this.interventionActive,
        "bio "+ this.biographyActive);
      this.router.navigate(['works/intervention']);
    } else if (item === 'biography') {
      this.designActive = false; 
      this.developmentActive = false;
      this.interventionActive = false; 
      this.biographyActive = true; 
      console.log(
        "diseño "+this.designActive,
        "dev "+this.developmentActive,
        "intern "+ this.interventionActive,
        "bio "+ this.biographyActive);
        this.router.navigate(['works/biography']);
      } else {
        this.designActive = false; 
        this.developmentActive = false;
        this.interventionActive = false; 
        this.biographyActive = false;
        console.log(
          "diseño "+this.designActive,
          "dev "+this.developmentActive,
          "intern "+ this.interventionActive,
          "bio "+ this.biographyActive);
      this.router.navigate(['works/home']);
    } 
  }
  
}
