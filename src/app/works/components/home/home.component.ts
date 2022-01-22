import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  concepts: string[] = [
    'aprendizaje','superación','apertura','perseverancia',
    'creatividad','experiencia','ubicación','respeto',
    'compromiso','comunicación','escucha','práctica',
    'diálogo','intuición','proyectos','ideas',
    'curiosidad','amor','resultados','equipo','atención',
    'interés','riesgos','actitud','formación',
    'capacitación','confianza','sueños','sinceridad',
    'conocimiento','humildad','empatía','resolución' 
  ];

  weightFont: number[] = [
    100,200,300,400,
    500,600,700,800,900
  ];
  colorFont: string[] = [
    '#03caff','#03caff','#7AE3FF',
    '#f9f9f9','#f9f9f9','#FFDD57','#FFEB9B'
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
    return myStyles;    
  }
  getRandomWeight(): number {
    let result: number;
    this.weightFont.sort(()=> Math.random() - 0.5); 
    result = this.weightFont[0];
    return result;
  }
  getRandomColor(): string {
    let result: string;
    this.colorFont.sort(()=> Math.random() - 0.5); 
    result = this.colorFont[0];
    return result;
  }
  getRandomFontStyle(): string {
    let result: string;
    this.fontStyle.sort(()=> Math.random() - 0.5); 
    result = this.fontStyle[0];
    return result;
  }
  getRandomFontSize(): string {
    let result: string;
    this.fontSize.sort(()=> Math.random() - 0.5); 
    result = this.fontSize[0];
    return result;
  }
  routeHome() {
    this.router.navigate(['works/home']);
  }
  routeDesign() {
    this.router.navigate(['works/design']);
  }
  routeDevelopment() {
    this.router.navigate(['works/development']);
  }
  routeIntervention() {
    this.router.navigate(['works/intervention']);
  }
  routeBiography() {
    this.router.navigate(['works/biography']);
  }

}
