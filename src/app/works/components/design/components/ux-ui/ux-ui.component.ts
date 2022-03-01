import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ux-ui',
  templateUrl: './ux-ui.component.html',
  styleUrls: ['./ux-ui.component.scss']
})
export class UxUiComponent implements OnInit {

  constructor(private router: Router) { }

  cards = [
    {

      description: 'App mobile que conecta pacientes con profesionales de salud. En 2019, Sebastián Bellido fue encargado del rediseño de marca, desarrollo UX | UI, diseño de interacción y armado de prototipos en alta definición para Trenda Software. La aplicación fue lanzada en 2020 en Argentina.',
      buttonText: 'Ver proyecto',
      img: '../assets/images/ux_ui/v_life.png'
    },
    {
      title: 'TravelLog',
      description: 'This card has supporting text below as a natural lead-in to additional content.',
      buttonText: 'Ver',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).webp'
    },
    {
      title: 'Nighx',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This text is much longer so that you can see a significant difference between the text in  previous tabs.',
      buttonText: 'Ver proyecto',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).webp'
    },
    {
      title: 'hunt',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Ver proyecto',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).webp'
    }
  ];

  slides: any = [[]];
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

  routingVlife() {    
    this.router.navigate(["works/design/ux-ui/v-life"])
  }

}




