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
      description: 'App mobile que conecta pacientes con profesionales de salud. En 2019, Sebastián fue encargado del rediseño de marca, desarrollo UX | UI, diseño de interacción y armado de prototipos en alta definición para Trenda Software. La aplicación fue lanzada en 2020 en Argentina.',
      buttonText: 'Ver proyecto',
      img: '../assets/images/ux_ui/v_life.png'
    },
    {
      description: 'App mobile que permite agendar viajes, asociando vuelos, reservas, excursiones, entre otras funcionalidades. Sebastián realizó diseño de interacción, wireframes, mockups y maquetado en el marco de la Cátedra Introducción a las Metodologías de desarrollo de software de la carrera TUDAI de FCEx de UniCen Tandil Argentina.',
      buttonText: 'Ver proyecto',
      img: '../assets/images/ux_ui/travelLog_logo.png'
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

  routeVlife() {    
    this.router.navigateByUrl("works/design/ux-ui/v-life");
  }

}




