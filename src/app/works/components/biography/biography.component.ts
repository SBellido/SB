import { Component, OnInit } from '@angular/core';
import { ItemSection } from 'src/app/models/models';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  allCardsClosed: boolean = false;
  visibleLabor: boolean = true;
  visibleAcademic: boolean = true;
  visiblePersonal: boolean = true;
  
  item: ItemSection = {
    id:  0,
    title: '',
    active: false,
    value: ''
  }

  public area: string = 'perfil';
  public icon: string = 'fingerprint';

  constructor() { }

  ngOnInit(): void {  
    this.topFunction();
  }

  /*------------MÉTODOS--------------*/
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  OpenClose(section: string) {
    switch (section) {
      case 'personal':
        this.visiblePersonal = !this.visiblePersonal;
        break;
      case 'academic':
        this.visibleAcademic = !this.visibleAcademic;
        break;
      case 'laboral':
        this.visibleLabor = !this.visibleLabor;
        break;
    }
    this.allCardsClosed = !this.visiblePersonal && !this.visibleAcademic && !this.visibleLabor;
    if (this.allCardsClosed) {
      this.topFunction();
    }
  }

}
