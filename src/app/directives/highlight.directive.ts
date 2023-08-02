import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input('appHighlight') searchText: string = '';
  @Input() disabled: boolean = false;
  @Input() wordsToHighlight: string[] = [];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('searchText') || changes.hasOwnProperty('disabled') || changes.hasOwnProperty('wordsToHighlight')) {
      this.highlightText();
    }
  }

  private highlightText() {
    if (this.disabled) {
      this.el.nativeElement.innerHTML = this.searchText ? this.searchText : '';
      return;
    }

    const text = this.el.nativeElement.textContent;
    if (this.searchText && text && this.wordsToHighlight.length > 0) {
      let highlightedText = text;
      this.wordsToHighlight.forEach(word => {
        const regex = new RegExp(this.escapeRegex(word), 'gi');
        highlightedText = highlightedText.replace(regex, (match: string) => `<span class="highlight">${match}</span>`);
      });
      this.el.nativeElement.innerHTML = highlightedText;
    }
  }

  private escapeRegex(text: string): string {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
}
