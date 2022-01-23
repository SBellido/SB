import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
