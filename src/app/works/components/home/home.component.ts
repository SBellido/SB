import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  // /*--------INTERFACES-------*/ 
  // header: HeaderSection[] = [
  //   {
  //     area: 'Sebastián Bellido',
  //     icon: '../assets/images/sb/eye.svg',
  //     routerLink: '',
  //     isFlows: false,
  //     isSubSection: false,
  //     color: '$first_color_light'
  //   }
  // ];

  /*--------VARIABLES-------*/ 
  constructor(
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {   
    this.topFunction();
    window.onload = () => {
      this.loadingService.setLoadingState(false);
    };
  }

  /*------------MÉTODOS--------------*/
  preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
