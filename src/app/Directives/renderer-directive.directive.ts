import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererDirective]'
})
export class RendererDirectiveDirective {

  constructor(private element : ElementRef , private renderer: Renderer2) { }


  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement , 'background-color' ,'green')
  }
}
