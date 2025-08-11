import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appPassFailColor]',
  standalone: true
})
export class PassFailColorDirectiveDirective implements OnChanges {
 @Input('appPassFailColor') status!: string; // receives value from template

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']) {
      this.applyColor();
    }
  }

  private applyColor() {
    const value = (this.status || 0) as number; // ensure value is a number

    if (value % 2 === 0) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } 
  }

}
