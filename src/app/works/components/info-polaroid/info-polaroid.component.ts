import { Component, Input, OnInit } from '@angular/core';
import { Information } from 'src/app/models/models';

@Component({
  selector: 'app-info-polaroid',
  templateUrl: './info-polaroid.component.html',
  styleUrls: ['./info-polaroid.component.scss']
})

export class InfoPolaroidComponent implements OnInit {
  @Input() information: Information[] = [];

  constructor() { }
  ngOnInit(): void {
  }

}
