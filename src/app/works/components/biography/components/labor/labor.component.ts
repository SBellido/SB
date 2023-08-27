import { Component, OnInit } from '@angular/core';
import { ItemProfile, MoreInfo } from 'src/app/models/models';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})

export class LaborComponent implements OnInit {
  
  /*--------VARIABLES -------*/ 
info: MoreInfo[] = [
  {
    id: 0,
    subtitle: 'Tareas:',
    text: 'Preparar clases utilizando transparencias, implementar interfaces simples como ejemplo para ejercicios y temas dados, despejar dudas a consultas, corregir entregas.',
    subtitle_1: 'Metodología:',
    text_1: 'E-learning',
    subtitle_2: 'Tecnologías:',
    text_2: 'HTML5, CSS3, SASS, JavaScript, GitHub.',
    subtitle_3: 'Aptitudes:',
    text_3: 'Diseño web adaptable, Comunicación, Trabajo en equipo, Desarrollo front-end, Autogestión',
    subtitle_4: '',
    text_4: '',
    subtitle_5: '',
    text_5: '',
    subtitle_6: '',
    text_6: '',
    text_info: 'Período 2021 / en curso',
  },
  {
    id: 1,
    subtitle: 'Tareas:',
    text: 'Diseño y realización de entrevistas con usuarios, análisis del problema, estudio de lógica del negocio, diseño UX | UI, flujo de interacción y arquitectura de la información, test con usuarios finales, diseño de prototipos y presentaciones al cliente. Participó durante un año en el proyecto, diseñó la aplicación completa y llegó a ocupar el rol de Analista Funcional por el conocimiento adquirido de la lógica del negocio y luego Product Owner por la capacidad para transmitir técnicamente los requerimientos al equipo de desarrollo. El proyecto se llevó a cabo aplicando metodologías ágiles y uso de tablero.',
    subtitle_1: 'Metodología:',
    text_1: 'Scrum',
    subtitle_2: 'Tecnologías:',
    text_2: 'Adobe Xd, Azure DevOps, Zeplin.',
    subtitle_3: 'Propósito:',
    text_3: 'Colaborar en el proceso de diseño, maquetación e implementación de interfaces de productos para los clientes, velando por el correcto aspecto visual de la interfaz y coherencia en la navegación.',
    subtitle_4: 'Valores:',
    text_4: 'Trabajo en Equipo, innovación, hacer que las cosas sucedan, cultura de servicio.',
    subtitle_5: 'Responsabilidades clave:',
    text_5: 'Comprender el requerimiento de software, colaborar en el proceso de estimación de esfuerzos junto al Líder de Proyecto para implementar las interfaces de usuarios, modelizar y refinar especificaciones a fin de determinar un diseño correcto tanto para UX como UI, asegurar la usabilidad del aplicativo, asegurar la máxima accesibilidad del aplicativo, combinar interfaces y flujos de trabajo para mejorar la experiencia de usuario, lograr que la interfaz sea amigable e intuitiva, revisar las interfaces de usuario y proponer mejoras, documentar apropiadamente los requerimientos y las IU de acuerdo a estándares, investigar nuevas tecnologías, cumplir con los procesos definidos y proponer mejoras, cumplir con las políticas, procesos y procedimientos internos de Tsoft, conocer los conceptos básicos de la norma ISO 9001.',
    subtitle_6: 'Aptitudes:',
    text_6: 'Comunicación, Prototipado, Diseño de la interfaz de usuario, Autogestión',
    text_info: 'Período 2022 - 2023'
  },
  {
    id: 2,
    subtitle: 'Tareas:',
    text: 'Diseño y desarrollo de webs empresariales y aplicaciones de productos digitales para clientes y productos propios de la compañía. Diseño de interfaz, flujos de interacción, desarrollo e implementación de “Hunt (tracking future)”. Un producto digital de trackeo, despacho y recepción de envíos, armado de rutas, asignación de choferes, transporte y seguimiento del envío en tiempo real. Diseño de app de configuración de envíos postales, implementación de formularios complejos multi-step, registro de usuarios, inicio de sesión, cambio de contraseña y cambio de tema desde la configuración del proyecto (dos branding para un mismo sistema, QX Logística y XUBOX). Todos los proyectos se desarrollaron en equipo, aplicando metodologías ágiles, uso de tablero y versionado de código.',
    subtitle_1: 'Metodología:',
    text_1: 'Scrum',
    subtitle_2: 'Tecnologías:',
    text_2: 'Adobe Xd, Trello, HTML5, CSS3, SASS, Bootstrap 5, Node.js, Angular 10 y 13, PrimeNG, Swagger, Bitbucket.',
    subtitle_3: '',
    text_3: '',
    subtitle_4: '',
    text_4: '',
    subtitle_5: '',
    text_5: '',
    subtitle_6: '',
    text_6: '',
    text_info: 'Período 2020 - 2022'
  },
  {
    id: 3,
    subtitle: 'Objetivo:',
    text: 'Diseñar e implementar un sistema web que sirva como plataforma de diversas apps online. Incorporar una app dentro de la plataforma implementada, en base a un paradigma de prueba y recolección de datos. Prueba de la plataforma y de la app.',
    subtitle_1: 'Tareas:',
    text_1: 'Análisis de requisitos, comprensión del problema, captura de requerimientos, definición de objetivos. estimación de tiempos.',
    subtitle_2: 'Diseño del sistema:',
    text_2: 'Esquema del proyecto, elección de herramientas, diseño de identidad, diseño de flujos, diseño de prototipos.',
    subtitle_3: 'Implementación:',
    text_3: 'Instalación de herramientas, estructuración del proyecto, creación de módulos y componentes, integración con BBDD no relacional, instalación de Google Analytics.',
    subtitle_4: 'Metodología:',
    text_4: 'Scrum',
    subtitle_5: 'Tecnologías:',
    text_5: 'Adobe Xd, Trello, HTML5, CSS3, Node.js, Angular 10, Angular Material, Firebase, Google Analytics, GitHub.',
    subtitle_6: '',
    text_6: '',
    text_info: 'Período 2020'
  },
  {
    id: 4,
    subtitle: 'Tareas:',
    text: ' Rediseño de marca, captura de requerimientos, flujo de interacción en baja definición, test con usuarios, diseño UX | UI, armado de prototipos interactivos en alta definición y documentación técnica del diseño para traspaso a desarrollo. Aplicación móvil que conecta pacientes con profesionales de la salud. Proyecto desarrollado en equipo, bajo metodologías ágiles y uso de tablero.',
    subtitle_1: 'Metodología:',
    text_1: 'Scrum',
    subtitle_2: 'Tecnologías:',
    text_2: 'Adobe Xd,  UI Ionic, Zeplin, Asana.',
    subtitle_3: 'Metodología:',
    text_3: 'Scrum',
    subtitle_4: '',
    text_4: '',
    subtitle_5: '',
    text_5: '',
    subtitle_6: '',
    text_6: '',
    text_info: 'Período 2019 - 2020'
  },
];
  items: ItemProfile[] = [ 
    {
      id: 0,
      img: '../../../../assets/images/biography/profetional/coderhouse.png',
      href: 'https://www.coderhouse.es/nosotros',
      description_img: 'Logo de Coderhouse',
      acronyms_career: 'Docente',
      year: '2021 | en curso',
      name_career: 'Dictado de Curso de Desarrollo Web online a través de plataforma digital.',
      link: 'https://www.coderhouse.es/nosotros',
      description_link: 'empresa',
      showDetail: false,
    },
    {
      id: 1,
      img: '../../../../assets/images/biography/profetional/tsoft.png',
      href: 'https://www.tsoftglobal.com/',
      description_img: 'Logo de la Tsoft',
      acronyms_career: 'UX/UI Sr.',
      year: '2022 | 2023',
      name_career: 'Diseño de Herramienta digital para Gestión de Inversiones en YPF Argentina.',
      link: 'https://www.tsoftglobal.com/',
      description_link: 'empresa',
      showDetail: false,
    },
    {
      id: 2,
      img: '../../../../assets/images/biography/profetional/stormtech.png',
      href: 'https://stormtechlabs.com/#container-home',
      description_img: 'Logo de la Stormtech',
      acronyms_career: 'Desarrollador Frontend & UX/UI',
      year: '2020 | 2022',
      name_career: 'Desarrollos en Angular, Bootstrap y JavaScript.',
      link: 'https://stormtechlabs.com/#container-home',
      description_link: 'empresa',
      showDetail: false,
    },
    {
      id: 3,
      img: '../../../../assets/images/biography/profetional/medialab.png',
      href: 'https://medialab.com.ar/',
      description_img: 'Logo de MediaLab',
      acronyms_career: 'Desarrollador Web',
      year: '2020 | 2021',
      name_career: 'Práctica Profesional Supervisada (PPS). Desarrollo en Angular y Firebase',
      link: 'https://medialab.com.ar/',
      description_link: 'institución',
      showDetail: false,
    },
    {
      id: 3,
      img: '../../../../assets/images/biography/profetional/trenda.png',
      href: 'http://trendasoftware.com/',
      description_img: 'Logo de la Trenda Software',
      acronyms_career: 'Líder de Diseño UX/UI',
      year: '2019 | 2020',
      name_career: 'Captura de requerimientos, test con usuarios, prototipado.',
      link: 'http://trendasoftware.com/',
      description_link: 'empresa',
      showDetail: false,
    },
  ]
  
  toggleDetail(item: ItemProfile): void {
    item.showDetail = !item.showDetail;
  }

  constructor() { }

  ngOnInit(): void {
    // Inicializa la propiedad showDetail en falso para todos los elementos
    this.items.forEach(item => {
      item.showDetail = false;
    });
  }
}





