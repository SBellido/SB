/* Angular */
import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { ItemNavBar, ItemContact} from '../../../models/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @HostBinding('class.clicked') isClicked = false;

  hoverStates: { [id: string]: boolean } = {};
  btnNavBar: ItemNavBar[] = [
    { 
      id: 1, 
      icon: 'fingerprint',
      title: 'perfil', 
      active: false, 
      hover: false, 
      styleClass: '_profile',
      router:'works/biography',
      hoverColor: '#37d4ff'
    },
    { 
      id: 2, 
      icon: 'developer_mode', 
      title: 'desarrollo', 
      hover: false, 
      styleClass: '_dev', 
      active: false, 
      router:'works/development',
      hoverColor: '#ffdc51'
    },
    { 
      id: 3, 
      icon: 'local_florist', 
      title: 'diseño', 
      hover: false, 
      styleClass: '_design', 
      active: false, 
      router:'works/design',
      hoverColor: '#ff97aa'
    },
    // $design_color: #ff97aa;
    // $design_color_light: #fdd6dd;
    // $design_color_lighter: #fdf0f2;
  ];

  constructor(private router: Router) { 
  }

  ngOnInit() {}

  isHomePage(): boolean {
    return this.router.url === '/works/home';
  }

  toggleImage() {
    this.isClicked = !this.isClicked;
    this.navigateTo('works/home');
  }

  navigateBtnTo(btn: ItemNavBar) {
    this.setActiveButton(btn.id); 
    this. isHomePage();
    this.router.navigate([btn.router]);
  }

  navigateTo(destiny: string) {
    for (const btn of this.btnNavBar) {
      btn.active = false;
    }
    this. isHomePage();
    this.router.navigate([destiny]);
  }
  
  setActiveButton(id: number) {
    for (const btn of this.btnNavBar) {
      btn.active = btn.id === id;
    }
  }

  onButtonMouseEnter(btn: any) {
    this.hoverStates[btn.id] = true;
  }
  
  onButtonMouseLeave(btn: any) {
    this.hoverStates[btn.id] = false;
  }
  
}
