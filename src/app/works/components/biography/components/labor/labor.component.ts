import { Component, OnInit } from '@angular/core';
import { ItemProfile } from 'src/app/models/models';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})

export class LaborComponent implements OnInit {
  
  /*--------VARIABLES -------*/ 
  items: ItemProfile[] = [ 
    {
      img: '../../../../assets/images/biography/profetional/coderhouse.png',
      description_img: 'Logo de Coderhouse',
      acronyms_career: 'Docente',
      year: '2021 | en curso',
      name_career: 'Curso de Desarrollo Web',
      link: 'https://www.coderhouse.es/nosotros',
      description_link: 'empresa'
    },
    {
      img: '../../../../assets/images/biography/profetional/tsoft.png',
      description_img: 'Logo de la Tsoft',
      acronyms_career: 'UX/UI Sr.',
      year: '2022 | 2023',
      name_career: 'Diseño de Herramienta digital para Gestión de Inversiones en YPF.',
      link: 'https://www.tsoftglobal.com/',
      description_link: 'empresa'
    },
    {
      img: '../../../../assets/images/biography/profetional/stormtech.png',
      description_img: 'Logo de la Stormtech',
      acronyms_career: 'UX/UI & Frontend Dev',
      year: '2020 | 2022',
      name_career: 'Desarrollos en Angular, Bootstrap y JavaScript.',
      link: 'https://stormtechlabs.com/#container-home',
      description_link: 'empresa'
    },
    {
      img: '../../../../assets/images/biography/profetional/medialab.png',
      description_img: 'Logo de MediaLab',
      acronyms_career: 'Desarrollador Web',
      year: '2020 | 2021',
      name_career: 'Práctica Profesional Supervisada (PPS). Desarrollo en Angular y Firebase',
      link: 'https://medialab.com.ar/',
      description_link: 'institución'
    },
    {
      img: '../../../../assets/images/biography/profetional/trenda.png',
      description_img: 'Logo de la Trenda Software',
      acronyms_career: 'Lead UX/UI',
      year: '2019 | 2020',
      name_career: 'Captura de requerimientos, test con usuarios, prototipado.',
      link: 'http://trendasoftware.com/',
      description_link: 'empresa'
    },

  ]

// <section class="_container_job">
//   <h3 class="_year">Lead UX | UI</h3>
//   <p class="_info"><span>2019</span></p>
//   <div class="_container_logo">
//       alt="Logo de la Facultad de Ciencias Exactas">
//       <section class="_container_links">
//         <a class="_link" href="https://uxdi.exa.unicen.edu.ar/" target="_blank">
//           <mat-icon>link</mat-icon>company
//         </a>
//       </section>
//   </div>
//   <p class="_info">University Diploma in User Experiences and Inclusive Designo</p>
// </section>

// <section class="_container_career_end">
//   <h3 class="_year">Lic. DCV</h3>
//   <p class="_info"><span>1998 | 2007</span></p>
//   <p class="_info">Bachelor of Design in Visual Communication</p>
//   <div class="_container_logo">
//     <img class="_logo" src="../../../../assets/images/biography/academic/fda_unlp.jpg" 
//     alt="Logo de la Facultad de Ciencias Exactas">
//     <section class="_container_links">
//       <a class="_link" href="http://www2.fba.unlp.edu.ar/dcv/carrera/plan-de-estudios/" target="_blank">
//         <mat-icon>link</mat-icon>institución
//       </a>
//     </section>
//   </div>
// </section>
  constructor() { }

  ngOnInit(): void {
  }



}
