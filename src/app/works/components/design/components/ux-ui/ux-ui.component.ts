import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ux-ui',
  templateUrl: './ux-ui.component.html',
  styleUrls: ['./ux-ui.component.scss']
})
export class UxUiComponent implements OnInit {

  constructor(private router: Router) { }

  slides: any = [[]];

  cards = [
    {
      description: 'App mobile que conecta pacientes con profesionales de salud. En 2019, Sebastián fue encargado del rediseño de marca, desarrollo UX | UI, diseño de interacción y armado de prototipos en alta definición para Trenda Software. La aplicación fue lanzada en 2020 en Argentina.',
      buttonText: 'Ver proyecto',
      img: '../assets/images/ux_ui/v-life/logo/v_life.png'
    },
    {
      description: 'Sistema de software complejo diseñado para realizar seguimiento de envíos en tiempo real, asignaciones de viajes y personalización de recorridos. EN 2020, Sebastián realizó análisis heurístico, rediseño de la interfaz, naming, diseño de marca, landing page y desarrollo frontend en Angular. Este producto fue desarrollado y es distribuído por Stormtech Solutions SRL.',
      buttonText: 'Ver proyecto',
      img: '../assets/images/ux_ui/hunt/logo/hunt_logo.png'
    },
    {
      description: 'App mobile que permite agendar viajes, asociando vuelos, reservas, excursiones, entre otras funcionalidades. Sebastián realizó diseño de interacción, wireframes, mockups y maqueta en el marco de la Cátedra Introducción a las Metodologías de desarrollo de software de la carrera TUDAI de FCEx de UniCen Tandil Argentina.',
      buttonText: 'Ver proyecto',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_logo.png'
    },
    {
      description: 'Sistema de software complejo diseñado para realizar seguimiento de envíos en tiempo real, asignaciones y personalización de recorridos. Sebastián realizó análisis heurístico, rediseño de la interfaz y desarrollo frontend. Producto desarrollado y distribuído por Stormtech Solutions SRL.',
      buttonText: 'Ver proyecto',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_logo.png'
    }
    
  ];
  
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

  routeVlife() {    
    this.router.navigateByUrl("works/design/ux-ui/v-life");
  }
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}




