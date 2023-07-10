import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/models/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  designActive:boolean = false;
  developmentActive:boolean = false;
  interventionActive:boolean = false;
  biographyActive:boolean = false;

  constructor(private router: Router) { 
  }

  ngOnInit() {
   
  }

  btnSN: Button[] = [
    {  
      route: 'https://www.linkedin.com/in/sebastian-bellido-9a0a6681/', 
      img: '../../../../assets/images/social_network/linkeding/logo_social_network_linkedin.svg',
      title: 'Sebastián Bellido en Linkedin', 
      text:'logo de linkedin' 
    },
    {  
      route: 'https://www.behance.net/sebastianba389', 
      img: '../../../../assets/images/social_network/behance/logo_social_network_behance.svg',
      title: 'Sebastián Bellido en Behance', 
      text:'logo de Behance' 
    },
    {  
      route: 'https://github.com/SBellido', 
      img: '../../../../assets/images/social_network/github/logo_social_network_github.svg',
      title: 'Sebastián Bellido en Github', 
      text:'logo de github' 
    },
  ]
  btnContact: Button[] = [
    {  
      route: 'mailto:sebastianbellidodg@gmail.com?subject=Hola Seba!&body=¿Qué propones?.', 
      img: 'alternate_email',
      title: 'Enviar email', 
      text: 'Enviar email' 
    },
    {  
      route: 'https://wa.me/541121580848', 
      img: 'perm_phone_msg',
      title: 'Conectar WhatsApp', 
      text: 'Conectar WhatsApp' 
    },
  ]

  }

