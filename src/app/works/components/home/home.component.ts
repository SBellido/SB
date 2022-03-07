import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  concepts: string[] = [
    'aprendizaje','superación','apertura','perseverancia', 'lectura',
    'creatividad','experiencia', 'respeto', 'equilibrio', 'estudio',
    'compromiso','comunicación','escucha','práctica', 'disposición',
    'diálogo','intuición','proyectos','ideas','amistad', 'razonamiento',
    'curiosidad','amor','resultados','equipo','atención',
    'interés','riesgos','actitud','formación','familia',
    'capacitación','confianza','sueños','sinceridad',
    'conocimiento','humildad','empatía','resolución','responsabilidad' 
  ];

  weightFont: number[] = [
    100,200,300,400,
    500,600,700,800,900
  ];
  
  colorFont: string[] = [
    '#03caff','#03caff','#7AE3FF',
    '#f9f9f9','#f9f9f9','#FFDD57',
    '#f8cbf6','#f8cbf6','#f89af3',
    '#FFEB9B','#8F57FF','#C5A9FE'
  ]; 
  fontStyle: string[] = [
    'oblique', 'italic','normal'
  ];
  fontSize: string[] = [
    '1.5rem', '1rem','1.75rem','1.25rem'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {   
    this.mixArrayContent();
  }

  mixArrayContent() {    
    this.concepts.sort(()=> Math.random() - 0.5); 
  }

  getStyles() {
    let myStyles = {
      fontWeight: this.getRandomWeight(),
      color: this.getRandomColor(),
      fontStyle: this.getRandomFontStyle(),
      fontSize: this.getRandomFontSize()
    }
    this.mixArrayContent();
    return myStyles;    
  }
  getRandomWeight(): number {
    let result: number;
    this.weightFont.sort(()=> Math.random() - 0.5); 
    result = this.weightFont[0];
    this.mixArrayContent();
    return result;
  }
  getRandomColor(): string {
    let result: string;
    this.colorFont.sort(()=> Math.random() - 0.5); 
    result = this.colorFont[0];
    this.mixArrayContent();
    return result;
  }
  getRandomFontStyle(): string {
    let result: string;
    this.fontStyle.sort(()=> Math.random() - 0.5); 
    result = this.fontStyle[0];
    this.mixArrayContent();
    return result;
  }
  getRandomFontSize(): string {
    let result: string;
    this.fontSize.sort(()=> Math.random() - 0.5); 
    result = this.fontSize[0];
    this.mixArrayContent();
    return result;
  }

}
