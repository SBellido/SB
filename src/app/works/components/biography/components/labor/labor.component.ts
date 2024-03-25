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
    text: 'Diseñar interfaces de usuario y flujos de interacción, analizar funcionalidades, comprender lógica del negocio, implementar soluciones.',
    subtitle_1: 'Metodología:',
    text_1: 'En cascada',
    subtitle_2: 'Tecnologías:',
    text_2: 'React, DevExtreme, Azure Devops.',
    subtitle_3: 'Aptitudes:',
    text_3: 'Diseño web adaptable, Diseño y prototipado, Comunicación, Trabajo en equipo, Desarrollo front-end, Análisis funcional, Autogestión',
    subtitle_4: '',
    text_4: '',
    subtitle_5: '',
    text_5: '',
    subtitle_6: '',
    text_6: '',
    text_info: 'Período 2023 / 2024',
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    subtitle: 'Tareas:',
    text: 'Armado y desarrollo de clases, diseño de material didáctico, tutorias y consultas, seguimiento y corrección de entregas, supervisión de laboratorios, actualización y seguimiento.',
    subtitle_1: 'Enfoque:',
    text_1: ' Aprendizaje Activo y Colaborativo',
    subtitle_2: 'Tecnologías:',
    text_2: 'Moodle, Google Meet, Adobe XD, Figma, Bootstrap, JavaScript, HTML5, CSS3.',
    subtitle_3: '',
    text_3: '',
    subtitle_4: '',
    text_4: '',
    subtitle_5: '',
    text_5: '',
    subtitle_6: '',
    text_6: '',
    text_info: 'Período 2020 - 2021'
  }, 
  {
    id: 6,
    subtitle: 'Tareas:',
    text: 'Rediseño de marca, captura de requerimientos, flujo de interacción en baja definición, test con usuarios, diseño UX | UI, armado de prototipos interactivos en alta definición y documentación técnica del diseño para traspaso a desarrollo. Aplicación móvil que conecta pacientes con profesionales de la salud. Proyecto desarrollado en equipo, bajo metodologías ágiles y uso de tablero.',
    subtitle_1: 'Metodología:',
    text_1: 'Scrum',
    subtitle_2: 'Tecnologías:',
    text_2: 'Adobe Xd,  UI Ionic, Zeplin, Asana.',
    subtitle_3: '',
    text_3: '',
    subtitle_4: '',
    text_4: '',
    subtitle_5: '',
    text_5: '',
    subtitle_6: '',
    text_6: '',
    text_info: 'Período 2019 - 2020'
  }, 
  {
    id: 7,
    subtitle: 'Tareas:',
    text: 'Desarrollo de Programas Culturales: Diseñar y coordinar programas culturales variados que abarquen música, teatro, artes visuales, literatura y otras expresiones artísticas, con el objetivo de enriquecer la experiencia cultural de los habitantes del municipio. Fomento de la Participación Ciudadana: Promover la participación activa de la comunidad en actividades culturales, incentivando la colaboración de artistas locales, grupos comunitarios y organizaciones culturales en la planificación y ejecución de eventos. Preservación del Patrimonio Cultural: Trabajar en la conservación y promoción del patrimonio cultural del municipio, incluyendo monumentos, sitios históricos, tradiciones culturales y arte local, con el fin de fortalecer la identidad y el sentido de pertenencia de la comunidad. Gestión de Espacios Culturales: Administrar, mantener y crear nuevos espacios culturales como teatros, auditorios, galerías de arte, centros culturales y bibliotecas municipales, asegurando su acceso equitativo y su uso óptimo por parte de la comunidad. Coordinación de Eventos y Festivales: Organizar y coordinar eventos y festivales culturales a lo largo del año, tales como festivales de música, ferias de artesanía, exposiciones de arte, conferencias y talleres, para promover la diversidad cultural y el intercambio de ideas. Apoyo a Artistas y Grupos Culturales: Brindar apoyo y recursos a artistas locales, grupos culturales y organizaciones comunitarias para el desarrollo y difusión de sus proyectos artísticos y culturales, fomentando la creatividad y el talento local. Educación y Formación Cultural: Implementar programas educativos y formativos en el ámbito cultural, dirigidos a niños, jóvenes y adultos, con el objetivo de promover el conocimiento, la apreciación y la participación activa en las distintas manifestaciones culturales.Promoción Turística: Colaborar con el área de turismo para promocionar la oferta cultural del municipio como parte de su atractivo turístico, destacando eventos, festivales, patrimonio cultural y otras actividades de interés para visitantes. Colaboración Interinstitucional: Establecer alianzas y colaboraciones con instituciones gubernamentales, organizaciones culturales, empresas privadas y otras entidades para fortalecer el desarrollo cultural y artístico del municipio. Evaluación y Seguimiento: Realizar evaluaciones periódicas de los programas y actividades culturales implementados, recopilando datos y retroalimentación de la comunidad para mejorar continuamente las iniciativas culturales del municipio.',
    subtitle_1: '',
    text_1: '',
    subtitle_2: '',
    text_2: '',
    subtitle_3: '',
    text_3: '',
    subtitle_4: '',
    text_4: '',
    subtitle_5: '',
    text_5: '',
    subtitle_6: '',
    text_6: '',
    text_info: 'Período 2009 - 2011'
  },
  {
    id: 8,
    subtitle: 'Tareas:',
    text: 'Armado y desarrollo de clases, diseño de material didáctico, tutorias y consultas, seguimiento y corrección de entregas, supervisión de laboratorios, actualización y seguimiento.',
    subtitle_1: '',
    text_1: '',
    subtitle_2: '',
    text_2: '',
    subtitle_3: '',
    text_3: '',
    subtitle_4: '',
    text_4: '',
    subtitle_5: '',
    text_5: '',
    subtitle_6: '',
    text_6: '',
    text_info: 'Período 2006 - 2010'
  },
];
  items: ItemProfile[] = [ 
    {
      id: 0,
      img: '../../../../assets/images/biography/profetional/ruano.png',
      href: 'https://www.ruano.com/',
      description_img: 'Logo de Ruano',
      acronyms_career: 'Desarrollador Frontend',
      year: '2023 | 2024',
      name_career: 'Desarrollo en React utilizando librería DevExtreme. Web App "Portal de Despachos" orientada resolver problemáticas relacionadas con la lógica de negocio de Gestorías.',
      link: 'https://www.ruano.com/',
      description_link: 'empresa',
      showDetail: false,
    },
    {
      id: 1,
      img: '../../../../assets/images/biography/profetional/coderhouse.png',
      href: 'https://www.coderhouse.es/nosotros',
      description_img: 'Logo de Coderhouse',
      acronyms_career: 'Docente',
      year: '2021 | en curso',
      name_career: 'Dictado de Curso de Desarrollo Web online a través de plataforma digital.',
      link: 'https://www.coderhouse.es/nosotros',
      description_link: 'plataforma',
      showDetail: false,
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
      img: '../../../../assets/images/biography/profetional/fcex_unicen.png',
      href: 'https://exa.unicen.edu.ar/tudai/#asignaturas',
      description_img: 'Logo de la Facultad de Ciencias Exactas de la UniCen',
      acronyms_career: 'Ayudante de Cátedra | Alumno',
      year: '2020 | 2021',
      name_career: 'Interfaces de Usuario e Interacción',
      link: 'https://tudai2-2.alumnos.exa.unicen.edu.ar/interfaces-de-usuario-e-interacci%C3%B3n',
      description_link: 'cátedra',
      showDetail: false,
    },
    {
      id: 6,
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
    {
      id: 7,
      img: '../../../../assets/images/biography/profetional/juarez.png',
      href: ' ',
      description_img: 'Escudo del Partido de Benito Juárez, Buenos Aires, Argentina',
      acronyms_career: 'Director de Cultura',
      year: '2009 | 2011',
      name_career: 'Benito Juárez | Buenos Aires | Argentina',
      link: 'https://www.bing.com/maps?mepi=24%7E%7ETopOfPage%7EMap_Image&ty=18&q=Benito+Ju%C3%A1rez%2C+Provincia+de+Buenos+Aires&satid=id.sid%3A9266ce7a-6bbf-7a28-c8a1-b8f00eb497b8&mb=-37.632778%7E-59.869301%7E-37.715473%7E-59.749504&ppois=-37.67412567138672_-59.80940246582031_Benito+Ju%C3%A1rez%2C+Provincia+de+Buenos+Aires_%7E&cp=-37.674038%7E-59.639969&v=2&sV=1&FORM=MIRE&lvl=11.0',
      description_link: 'ubicación',
      showDetail: false,
    },
    {
      id: 8,
      img: '../../../../assets/images/biography/profetional/fba_unlp.png',
      href: ' ',
      description_img: 'Logo de la Fascultad de Arte de la UNLP',
      acronyms_career: 'Ayudante/Docente | Alumno/Diplomado',
      year: '2006 | 2010',
      name_career: 'Curso de Ingreso | Lenguaje 1B | Lenguaje Viual 3',
      link: 'https://fba.unlp.edu.ar/',
      description_link: 'facultad',
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





