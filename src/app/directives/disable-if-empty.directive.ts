import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[disableIfEmpty]'
})
export class DisableIfEmptyDirective implements OnChanges {
  @Input('disableIfEmpty') isImagesListEmpty: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isImagesListEmpty']) {
      if (this.isImagesListEmpty) {
        this.el.nativeElement.disabled = true;
        this.el.nativeElement.classList.add('_dropdown-disabled');
      } else {
        this.el.nativeElement.disabled = false;
        this.el.nativeElement.classList.remove('_dropdown-disabled');
      }
    }
  }
}


// private setDisabledState(disabled: boolean) {
//   this.el.nativeElement.disabled = disabled;
//   if (disabled) {
//     this.el.nativeElement.classList.add('_dropdown-disabled');
//   } else {
//     this.el.nativeElement.classList.remove('_dropdown-disabled');
//   }
// }