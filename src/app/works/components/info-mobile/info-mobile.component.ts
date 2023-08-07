import { Component, Input, OnInit } from '@angular/core';
import { Information } from 'src/app/models/models';

@Component({
  selector: 'app-info-mobile',
  templateUrl: './info-mobile.component.html',
  styleUrls: ['./info-mobile.component.scss']
})

export class InfoMobileComponent implements OnInit {
  @Input() information: Information[] = [];

  constructor() { }
  ngOnInit(): void {
  }

}
