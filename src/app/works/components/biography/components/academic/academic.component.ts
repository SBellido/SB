import { Component, OnInit } from '@angular/core';
import { ItemProfile } from 'src/app/models/models';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {

  /*--------VARIABLES -------*/ 
  items: ItemProfile[] = [ 
    {
      img: '../../../../assets/images/biography/academic/exactas.jpg',
      description_img: 'Logo de la Facultad de Ciencias Exactas',
      acronyms_career: 'TUDAI',
      year: '2017 | 2022',
      name_career: 'Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas',
      link: 'https://exa.unicen.edu.ar/tudai',
      description_link: 'programa'
    },
    {
      img: '../../../../assets/images/biography/academic/uxdi.jpg',
      description_img: 'Logo de Formación UXDI',
      acronyms_career: 'UXDI',
      year: '2018',
      name_career: 'Diplomatura Universitaria en Diseño de Interfaces de Usuario y Experiencias Digitales',
      link: 'https://wiki.uxdi.org/doku.php?id=programa_uxdi',
      description_link: 'programa'
    },
    {
      img: '../../../../assets/images/biography/academic/logo_vocacion_docente.png',
      description_img: 'Instituto Superior de Formación, Capacitación y Actualización Docente Continua Vocación Docente',
      acronyms_career: 'Tramo Pedagógico',
      year: '2015 | 2016',
      name_career: 'Tramo Pedagígico para Profesionales',
      link: 'https://www.vocaciondocente.com/',
      description_link: 'institución'
    },
    {
      img: '../../../../assets/images/biography/academic/fda_unlp.jpg',
      description_img: 'Logo de la Facultad de Bellas Artes',
      acronyms_career: 'DCV',
      year: '2015 | 2016',
      name_career: 'Lincenciatura en Diseño en Comunicación Visual',
      link: 'http://www2.fba.unlp.edu.ar/dcv/contactos-materias-dcv/',
      description_link: 'programa'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}
