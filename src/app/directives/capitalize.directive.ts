import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
})
export class CapitalizeDirective {
  constructor(private readonly element: ElementRef<HTMLElement>) {}

  public ngOnInit(): void {
    const text: string = this.element.nativeElement.innerText;
    const firstLetter: string = text.charAt(0).toUpperCase();
    const restOfText: string = text.slice(1);
    this.element.nativeElement.innerText = `${firstLetter}${restOfText}`;
  }
}
