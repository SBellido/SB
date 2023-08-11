/* Angular */
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ItemNavBar, ItemContact} from '../../../models/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
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
      hoverColor: 'radial-gradient(circle, #beeefa 3%, #37d4ff 100%)'
    },
    { 
      id: 2, 
      icon: 'developer_mode', 
      title: 'desarrollo', 
      hover: false, 
      styleClass: '_dev', 
      active: false, 
      router:'works/development',
      hoverColor: 'radial-gradient(circle, #fff7d8 3%, #ffdc51 100%)'
    },
    { 
      id: 3, 
      icon: 'local_florist', 
      title: 'diseño', 
      hover: false, 
      styleClass: '_design', 
      active: false, 
      router:'works/design',
      hoverColor: 'radial-gradient(circle, #eee3ff 3%, #ceadfd 100%)'

    },
  ]

  btnContact: ItemContact[] = [
    { 
      id: 1, 
      icon: 'perm_phone_msg', 
      title: 'llámame', 
      active: false 
    },
    { id: 2, 
      icon: 'alternate_email', 
      title: 'escríbeme', 
      active: false 
    }
  ]

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  navigateBtnTo(btn: ItemNavBar) {
    this.setActiveButton(btn.id); 
    this.router.navigate([btn.router]);
  }
  navigateTo(destiny: string) {
    for (const btn of this.btnNavBar) {
      btn.active = false;
    }
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
