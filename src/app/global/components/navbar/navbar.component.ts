/* Angular */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemNavBar, ItemContact} from '../../../models/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
  btnNavBar: ItemNavBar[] = [
    { 
      id: 1, 
      icon: 'fingerprint',
      tittle: 'perfil', 
      active: false, 
      router:'works/biography' 
    },
    { 
      id: 2, 
      icon: 'developer_mode', 
      tittle: 'desarrollo', 
      active: false, 
      router:'works/development' 
    },
    { 
      id: 3, 
      icon: 'local_florist', 
      tittle: 'diseño', 
      active: false, 
      router:'works/design' 
    },
  ]

  btnContact: ItemContact[] = [
    { 
      id: 1, 
      icon: 'perm_phone_msg', 
      tittle: 'llámame', 
      active: false 
    },
    { id: 2, 
      icon: 'alternate_email', 
      tittle: 'escríbeme', 
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
  
}
