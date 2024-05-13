import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit{
  constructor(private element : ElementRef) {

  }
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    (this.element.nativeElement as HTMLElement).style.backgroundColor = 'red';

  }
} 