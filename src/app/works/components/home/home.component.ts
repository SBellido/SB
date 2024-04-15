import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderSection } from 'src/app/models/models';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('cubeElement') cubeElement: ElementRef | undefined;

  /*--------INTERFACES-------*/ 
  header: HeaderSection[] = [
    {
      area: 'Sebastián Bellido',
      icon: '../assets/images/sb/eye.svg',
      routerLink: '',
      isFlows: false,
      isSubSection: false,
      color: '$first_color_light'
    }
  ];

  /*--------VARIABLES-------*/ 
  angX: number = 0;
  angY: number = 0;
  isDragging: boolean = false;
  startX: number = 0;
  startY: number = 0;

  constructor(
    private router: Router, 
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {   
    this.topFunction();
    window.onload = () => {
      this.loadingService.setLoadingState(false);
    };
    this.startCubeRotation();
    document.addEventListener('wheel', this.onMouseWheel.bind(this));

  //  this.cubeElement?.nativeElement.addEventListener('wheel', this.onMouseWheel.bind(this));

 }

  /*------------MÉTODOS--------------*/
  startCubeRotation() {
    setInterval(() => {
      // Ajusta los ángulos de rotación para que el cubo gire automáticamente
      this.angY += 1; // Ajusta la velocidad y dirección según sea necesario
    }, 50); // Cambia el intervalo según la velocidad deseada
  }

  onMouseWheel(event: WheelEvent) {
    // Obtener la dirección del desplazamiento de la rueda del mouse
    const delta = Math.sign(event.deltaY);
  console.log("delta: ", delta);
  
    // Actualizar las variables angX o angY según corresponda
    if (delta > 0) {
      // Desplazamiento hacia abajo: decrementar angX o angY
      // Aquí puedes decrementar angX o angY según tus necesidades
      this.angY -= 50; // Por ejemplo, decrementar angX en 5 grados
    } else {
      // Desplazamiento hacia arriba: incrementar angX o angY
      // Aquí puedes incrementar angX o angY según tus necesidades
      this.angX += 50; // Por ejemplo, incrementar angX en 5 grados
    }
  
    // Actualizar la transformación del cubo con los nuevos valores de angX y angY
    this.updateCubeTransform();
  }

  updateCubeTransform() {
    if (this.cubeElement) {
      this.cubeElement.nativeElement.style.transform = `rotateX(${this.angX}deg) rotateY(${this.angY}deg)`;
    }
  }


  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    const deltaX = event.touches[0].clientX - this.startX;
    const deltaY = event.touches[0].clientY - this.startY;
    this.angY += deltaX * 1.5; // Ajusta la velocidad de rotación según sea necesario
    this.angX -= deltaY * 1.5;
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  }

  onTouchEnd(event: TouchEvent) {
    this.isDragging = false;
  }

  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.isDragging = true;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const deltaX = event.clientX - this.startX;
    const deltaY = event.clientY - this.startY;
    this.angY += deltaX * 1; // Ajusta la velocidad de rotación según sea necesario
    this.angX -= deltaY * 1;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  onButtonClick(direction: string): void {
    switch (direction) {
      case "up":
        this.angX += 90;
        break;
      case "down":
        this.angX -= 90;
        break;
      case "right":
        this.angY += 90;
        break;
      case "left":
        this.angY -= 90;
        break;
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  routeTo(route:string) {    
    this.router.navigate([route]);
  }

}
