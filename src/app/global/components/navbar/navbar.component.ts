/* Angular */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

 
  constructor(
    private router: Router,
    private activeRute: ActivatedRoute
    ) { }

  ngOnInit() {
    // getStyles() {
    //   let myStyles = {
    //     fontWeight: this.getRandomWeight(),
    //     color: this.getRandomColor(),
    //     fontStyle: this.getRandomFontStyle(),
    //     fontSize: this.getRandomFontSize()
    //   }
    //   return myStyles;    
    // }
  }

  route(item: string) {
    if (item === 'design') {
      this.router.navigate(['works/design']);
    } else if (item === 'development') {
      this.router.navigate(['works/development']);
    } else if (item === 'intervetion') {
      this.router.navigate(['works/intervention']);
    } else if (item === 'biography') {
      this.router.navigate(['works/biography']);
    } else if (item === 'home') {
      this.router.navigate(['works/home']);
    }
  }
  getStyles(item: string):any {
    if (item === 'design') {
    let myStyles = {
      background: '#ffffff'
    }
    return myStyles; 
  }
}
  
  


}
