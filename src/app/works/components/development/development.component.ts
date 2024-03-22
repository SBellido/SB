import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderSection, ItemsSection } from '../../../models/models';
 
@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss', '../section/section.component.scss']
})

export class DevelopmentComponent implements OnInit {
  parentColor: string = 'linear-gradient(0deg, #ffdc51 33%, #fff7d8 100%)'; 
  parentColorHover: string = 'linear-gradient(0deg, #fbe9a2 33%, #fff7d8 100%)'; 
  /*--------VARIABLES -------*/ 

  header: HeaderSection[] = [
    {
      area: 'desarrollo',
      icon: 'developer_mode',
      routerLink: '',
      isFlows: false,
      isSubSection: false,
      color: '_dev_color'
    }
  ];

  sections: ItemsSection[] = [
    {
      title: 'aplicaciones',
      visible: false,
      text: 'Una aplicación web es un programa informático que opera en un navegador web, accesible a través de Internet o una red local. Estas aplicaciones permiten a los usuarios interactuar mediante interfaces dinámicas, ofreciendo funcionalidades desde la visualización de información estática hasta la interacción en tiempo real con bases de datos y servicios externos. Por otro lado, una aplicación móvil es un software diseñado para ejecutarse en dispositivos móviles como smartphones y tablets. Estas aplicaciones están optimizadas para pantallas táctiles y aprovechan características como la geolocalización, la cámara y los sensores de movimiento. Tanto aplicaciones web como móviles buscan proporcionar a los usuarios experiencias intuitivas y eficientes, adaptadas a las características de cada plataforma. Para ello, los desarrolladores utilizan tecnologías como React y Angular, que les permiten crear interfaces atractivas y .',
      disabled: false,
      wordsToHighlight: [],
      isHovered: false,
      brandsData: [
        {
          route: 'works/development/investigar',
          img: '../assets/images/dev/investigar/logo_investigar.png',
          name: 'InventigAr',
          text: 'Logo de InventigAr',
          title: ''
        },
        {
          route: 'works/development/xubox',
          img: '../assets/images/dev/xubox/logo/xubox_logo.png',
          name: 'Logística',
          text: 'Logo de Xubox',
          title: ''
        },
        {
          route: 'works/development/qx',
          img: '../assets/images/dev/qx/qx_logo.png',
          name: 'Logística',
          text: 'Logo de QX Logística',
          title: ''

        }
      ],
    },
    {
      title: 'webs',
      visible: false,
      text: 'Un sitio web es un conjunto de páginas digitales alojadas en un servidor y accesibles a través de Internet. Estas páginas están diseñadas para ser visualizadas en un navegador web y pueden contener texto, imágenes, videos y otros elementos interactivos. HTML5 semántico es fundamental para estructurar el contenido de un sitio web de manera significativa. Utiliza etiquetas que describen el propósito y la función de cada elemento, lo que mejora la accesibilidad y la indexación en motores de búsqueda. CSS (Cascading Style Sheets) se encarga de definir el estilo visual del sitio web, incluyendo el diseño, los colores, las fuentes y los efectos visuales. Esto permite crear una apariencia coherente y atractiva en todas las páginas. JavaScript proporciona la interactividad y la funcionalidad dinámica en un sitio web. Permite agregar efectos visuales, validar formularios, cargar contenido de manera asíncrona y mucho más, mejorando la experiencia del usuario. Bootstrap es un framework front-end que ofrece herramientas predefinidas, componentes y estilos responsivos para agilizar el desarrollo web. Con Bootstrap, los desarrolladores pueden crear interfaces atractivas y adaptables de manera eficiente, optimizadas para diferentes dispositivos y tamaños de pantalla.',
      disabled: false,
      isHovered: false,
      wordsToHighlight: [],
      brandsData: [
        {
          route: 'works/development/stormtech',
          img: '../assets/images/dev/stormtech/stormtech_logo.png',
          name: 'Stormtech',
          text: 'Logo de Stormtech',
          title: ''
        },
        {
          route: 'works/development/hunt',
          img: '../assets/images/dev/hunt/hunt_logo.png',
          name: 'Hunt',
          text: 'Logo de Hunt',
          title: ''
        }
      ]
    },
    {
      title: 'experimental',
      visible: false,
      text: 'El desarrollo experimental en programación implica explorar nuevas ideas, tecnologías y enfoques en este ámbito de una manera más libre y sin las restricciones típicas de un entorno laboral. Es un proceso creativo y dinámico que permite expandir habilidades y conocimientos trabajando en proyectos que apasionan. En este contexto, los desarrolladores pueden embarcarse en la creación de proyectos innovadores, sin necesariamente tener un objetivo comercial definido. Pueden experimentar con diferentes lenguajes de programación, frameworks, bibliotecas y herramientas, explorando sus capacidades y límites. Este enfoque les brinda la libertad de probar nuevas técnicas de codificación, resolver problemas complejos y aprender de los errores sin la presión de cumplir con plazos o requisitos específicos. El desarrollo experimental de programación a nivel personal también fomenta la colaboración y el intercambio de ideas con otros desarrolladores a través de comunidades en línea, foros y eventos relacionados con la tecnología. Estas interacciones pueden llevar a la retroalimentación constructiva, el descubrimiento de nuevas perspectivas y la mejora continua de las habilidades técnicas.',
      disabled: false,
      isHovered: false,
      wordsToHighlight: [],
      brandsData: [
        {
          route: 'works/development/game',
          img: '../assets/images/dev/zombie/zombie_logo.png',
          name: 'Game Runner',
          text: 'Ícono con cara de zombie',
          title: ''
        },
      ],
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {  
    this.topFunction();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  routeTo(route:string) {    
    this.router.navigateByUrl(route);
  }

}

