import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  concepts: string[] = [
    'aprender','superarse','apertura','perseverancia',
    'creatividad','experiencia','ubicación','respeto',
    'compromiso','comunicación','escuchar','práctica',
    'dialogar','intuición','respeto','proyectos','ideas',
    'curiosidad','amor','resultados','equipo','confianza',
    'interés','arriesgar','actitud','formación','atención',
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
  constructor() { }

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
      fontStyle: this.getRandomFont()
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
  getRandomFont(): string {
    let result: string;
    this.fontStyle.sort(()=> Math.random() - 0.5); 
    result = this.fontStyle[0];
    return result;
  }
  
}
