import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/models/models';

@Component({
  selector: 'app-brands-buttons',
  templateUrl: './brands-buttons.component.html',
  styleUrls: ['./brands-buttons.component.scss']
})

export class BrandsButtonsComponent implements OnInit {

  @Input() brands: Button[] = []
  title: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeTo(route:string) {    
    this.router.navigateByUrl(route);
  }

}
