import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-life',
  templateUrl: './v-life.component.html',
  styleUrls: ['./v-life.component.scss']
})
export class VLifeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeBack() {    
    this.router.navigateByUrl('works/design/ux-ui')
  }
  

}
