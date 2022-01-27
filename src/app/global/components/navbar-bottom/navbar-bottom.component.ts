/* Angular */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})

export class NavbarBottomComponent implements OnInit {  

  second_color = '#03caff';
  third_color = '#ffdd57'
  designActive = this.second_color;
  developmentActive = this.second_color;
  interventionActive = this.second_color;
  biographyActive = this.second_color;
  
  constructor(private router: Router) { }

  ngOnInit(): void { 
  }

  route(item: string) {
    if (item === 'design') {
      this.router.navigate(['works/design']);     
    } else if (item === 'development') {
      this.router.navigate(['works/development']);
    } else if (item === 'intervention') {
      this.router.navigate(['works/intervention']);
    } else if (item === 'biography') {
      this.router.navigate(['works/biography']);
    } else if (item === 'home') {
      this.router.navigate(['works/home']);
    }
  }
  

 }
