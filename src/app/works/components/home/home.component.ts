import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('weirdtext', { static: true }) weirdtextElement: ElementRef | undefined;

  // /*--------INTERFACES-------*/ 
  // header: HeaderSection[] = [
  //   {
  //     area: 'Sebastián Bellido',
  //     icon: '../assets/images/sb/eye.svg',
  //     routerLink: '',
  //     isFlows: false,
  //     isSubSection: false,
  //     color: '$first_color_light'
  //   }
  // ];

  /*--------VARIABLES-------*/ 
  constructor(
    private elementRef: ElementRef,
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {   
    this.topFunction();
    window.onload = () => {
      this.loadingService.setLoadingState(false);
    };
    this.setup();
  }

  setup(): void {
    const passageElement = this.elementRef.nativeElement.querySelector('#weirdtext');
    const rawText = passageElement.innerHTML;
    const len = rawText.length;
    let newText = '';

    for (let i = 0; i < len; i++) {
      const rng = Math.floor(Math.random() * 5) + 1;
      const currentChar = rawText.charAt(i);
      let newChar = '';
      if (currentChar === ' ') {
        newChar = '<span class="space"></span>';
      } else {
        newChar = `<span class="effect${rng}">${currentChar}</span>`;
      }
      newText += newChar;
    }

    passageElement.innerHTML = newText;
  }

  preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
