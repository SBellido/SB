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
  hamburguernActive:boolean = false;

  constructor(private router: Router) { 
  }

  ngOnInit() {
   
  }

  public setButtonsStyle(item: string) {
    if (item === 'design') {
      this.designActive = true;
      this.hamburguernActive = false; 
       this.developmentActive = false; 
      this.interventionActive = false; 
      this.biographyActive = false; 
      this.router.navigate(['works/design']);
    } else if (item === 'development') {
        this.developmentActive = true;
        this.hamburguernActive = false; 
        this.designActive = false; 
        this.interventionActive = false; 
        this.biographyActive = false; 
        this.router.navigate(['works/development']);
    } else if (item === 'intervention') {
        this.interventionActive = true; 
        this.hamburguernActive = false; 
        this.designActive = false; 
        this.developmentActive = false; 
        this.biographyActive = false;       
        this.router.navigate(['works/intervention']);
    } else if (item === 'biography') {
        this.biographyActive = true; 
        this.hamburguernActive = false; 
        this.designActive = false; 
        this.developmentActive = false; 
        this.interventionActive = false; 
        this.router.navigate(['works/biography']);
    } else if (item === 'home'){
        this.hamburguernActive = false; 
        this.designActive = false; 
        this.developmentActive = false; 
        this.interventionActive = false; 
        this.biographyActive = false;
        this.router.navigate(['works/home']);
    } else {
        console.log("burguer: " +this.hamburguernActive);
        this.hamburguernActive ?  
        this.hamburguernActive = false :  
        this.hamburguernActive = true;
        console.log("burguer: " +this.hamburguernActive);
        
    } 
  }
  
}
