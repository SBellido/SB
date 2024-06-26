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
      id: 0,
      img: '../../../../assets/images/biography/academic/exactas.jpg',
      href: 'https://exa.unicen.edu.ar/',
      description_img: 'Logo de la Facultad de Ciencias Exactas',
      acronyms_career: 'TUDAI',
      year: '2017 | 2022',
      name_career: 'Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas',
      link: 'https://exa.unicen.edu.ar/tudai',
      description_link: 'programa',
      showDetail: false,
    },
    {
      id: 1,
      img: '../../../../assets/images/biography/academic/uxdi.jpg',
      href: 'https://uxdi.org/',
      description_img: 'Logo de Formación UXDI',
      acronyms_career: 'UXDI',
      year: '2018',
      name_career: 'Diplomatura Univ. en Diseño de Interfaces de Usuario y Experiencias Digitales',
      link: 'https://wiki.uxdi.org/doku.php?id=programa_uxdi',
      description_link: 'programa',
      showDetail: false,
    },
    {
      id: 2,
      img: '../../../../assets/images/biography/academic/logo_vocacion_docente.png',
      href: 'https://www.vocaciondocente.com/',
      description_img: 'Instituto Superior de Formación, Capacitación y Actualización Docente Continua Vocación Docente',
      acronyms_career: 'Tramo Pedagógico',
      year: '2015 | 2016',
      name_career: 'Tramo Pedagógico para Profesionales',
      link: 'http://institutovocaciondocente.ar/postitulos.html',
      description_link: 'institución',
      showDetail: false,
    },
    {
      id: 3,
      img: '../../../../assets/images/biography/academic/fda_unlp.jpg',
      href: 'https://fba.unlp.edu.ar/',
      description_img: 'Logo de la Facultad de Bellas Artes',
      acronyms_career: 'DCV',
      year: '1998 | 2007',
      name_career: 'Diseño en Comunicación Visual',
      link: 'http://www2.fba.unlp.edu.ar/dcv/contactos-materias-dcv/',
      description_link: 'programa',
      showDetail: false,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}
