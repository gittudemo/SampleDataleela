import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererDirective]'
})
export class RendererDirectiveDirective {

  constructor(private element : ElementRef , private renderer: Renderer2) { }


  // ngOnInit() {
  //   this.renderer.setStyle(this.element.nativeElement , 'background-color' ,'green')
  // }

  @HostListener('mouseenter') onmousehover(event: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green')

  }
    @HostListener('mouseleave') onmouseleave(event: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow')

  }
    @HostListener('click') onclick(event: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red')

  }
}
