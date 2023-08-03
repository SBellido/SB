import { Component, Input, OnInit } from '@angular/core';
import { Tecnologies } from 'src/app/models/models';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss']
})
export class TecnologiesComponent implements OnInit {

  @Input() tecnologies: Tecnologies[] = []
  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
