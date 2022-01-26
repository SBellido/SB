import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})

export class NavbarBottomComponent implements OnInit {

  item: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void { 
    console.log("entra");
    
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


  getStyles(item: string) {
    if (item === 'design') {
      
    } else if (item === 'development') {
    } else if (item === 'intervention') {
    } else if (item === 'biography') {
    } else if (item === 'home') {
    }
  }

 }
