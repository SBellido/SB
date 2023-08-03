import { Component, Input, OnInit } from '@angular/core';
import { Information } from 'src/app/models/models';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() information: Information[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
