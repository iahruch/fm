import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core'

@Directive({
  selector: '[hoverItem]',
})
export class HoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.overlay'),
      'display',
      'flex'
    )
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.overlay'),
      'display',
      'none'
    )
  }
}
