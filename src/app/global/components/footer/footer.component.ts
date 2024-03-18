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
      route: 'https://wa.me/541121580848', 
      img: '../../../../assets/images/social_network/whatsapp/logo_social_network_whatsapp.svg',
      name: 'WhatsApp', 
      text:'logo de WhatsApp',
      title:'' 
    },
    {  
      route: 'https://www.linkedin.com/in/sebastian-bellido-9a0a6681/', 
      img: '../../../../assets/images/social_network/linkeding/logo_social_network_linkedin.svg',
      name: 'LinkedIn', 
      text:'logo de linkedin',
      title:'' 
    },
    {  
      route: 'https://www.instagram.com/sebellido/', 
      img: '../../../../assets/images/social_network/instagram/logo_social_network_instagram.svg',
      name: 'Instagram', 
      text:'logo de Instagram',
      title:'' 
    },
    {  
      route: 'mailto:sebastianbellidodg@gmail.com?subject=Hola Seba!&body=¿Qué propones?.', 
      img: '../../../../assets/images/social_network/outlook/logo_social_network_outlook.svg',
      name: 'OutLook', 
      text:'logo de OutLook',
      title:'' 
    },
    {  
      route: 'https://www.behance.net/sebastianba389', 
      img: '../../../../assets/images/social_network/behance/logo_social_network_behance.svg',
      name: 'Behance', 
      text:'logo de Behance',
      title:'' 
    },
    {  
      route: 'https://github.com/SBellido', 
      img: '../../../../assets/images/social_network/github/logo_social_network_github.svg',
      name: 'GitHub', 
      text:'logo de github',
      title:'' 
    },
  ]
  btnContact: Button[] = [
    {  
      route: 'mailto:sebastianbellidodg@gmail.com?subject=Hola Seba!&body=¿Qué propones?.', 
      img: 'alternate_email',
      name: 'Vía email', 
      text: 'OutLook',
      title:''
    },
    {  
      route: 'https://wa.me/541121580848', 
      img: 'perm_phone_msg',
      name: 'Vía WhatsApp', 
      text: 'WhatsApp',
      title:''
    },
  ]

  }

