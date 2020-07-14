import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pink]'
})
export class PinkDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e91e63'
  }

}
