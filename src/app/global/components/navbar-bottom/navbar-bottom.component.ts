import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})

export class NavbarBottomComponent implements OnInit {

  item: string= '';

  constructor(
    private router: Router, 
    private activeRute: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    console.log("entra");
    
  }

  routeHome() {
    this.router.navigate(['works/home']),
    {queryParams: {item: 'home'}};
  }
  routeDesign() {
    this.router.navigate(['works/design']),
    {queryParams: {item: 'design'}};
  }
  routeDevelopment() {
    this.router.navigate(['works/development']),
    {queryParams: {item: 'development'}};
  }
  routeIntervention() {
    this.router.navigate(['works/intervention']),
    {queryParams: {item: 'intervention'}};
    ;
  }
  routeBiography() {
    this.router.navigate(['works/biography']),
    {queryParams: {item: 'biography'}};
  }

  
}
