/* Angular */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  routeHome() {
    this.router.navigate(['works/home']);
  }
  routeDesign() {
    this.router.navigate(['works/design']);
  }
  routeDevelopment() {
    this.router.navigate(['works/development']);
  }
  routeIntervention() {
    this.router.navigate(['works/intervention']);
  }
  routeBiography() {
    this.router.navigate(['works/biography']);
  }

}
