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
    'compromiso','comunicación','escuchar','capacitarse',
    'dialogar','intuición','respeto','proyectos','ideas',
    'curiosidad','amor','resultados','equipo','confianza',
    'interés','arriesgar','actitud','formación','atención',
    'capacitación','confianza','sueños','sinceridad','práctica',
    'conocimiento','humildad','empatía','resolución' 
  ];

  weightFont: number[] = [100,200,300,400,500,600,700,800,900];

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
      color: 'ivory',
    }
    return myStyles;

    
  }
  getRandomWeight(): number {
    let result: number;
    this.weightFont.sort(()=> Math.random() - 0.5); 
    result = this.weightFont[0];
    return result;
  }
}
