import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  allCardsClosed: boolean = true;
  visibleLabor: boolean = false;
  visibleAcademic: boolean = false;
  visiblePersonal: boolean = false;

  public area: string = 'perfil';
  public icon: string = 'fingerprint';

  constructor(private router: Router) { }

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
