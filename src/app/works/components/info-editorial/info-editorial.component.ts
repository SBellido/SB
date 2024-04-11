import { Component, Input, OnInit } from '@angular/core';
import { Information } from 'src/app/models/models';

@Component({
  selector: 'app-info-editorial',
  templateUrl: './info-editorial.component.html',
  styleUrls: ['./info-editorial.component.scss']
})

export class InfoEditorialComponent implements OnInit {
  @Input() information: Information[] = [];

  constructor() { }
  ngOnInit(): void {
  }

}
