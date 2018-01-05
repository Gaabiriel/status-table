import { Directive, ElementRef, Renderer, Input, OnChanges, OnInit, SimpleChanges, SimpleChange } from '@angular/core';

@Directive({
  selector: '[status]'
})
export class StatusDirective implements OnInit {
  @Input('type') type;

  constructor(public el: ElementRef, public renderer: Renderer) { }

  ngOnInit() {
    if (this.type == 'true') {
      this.renderer.setElementClass(this.el.nativeElement, 'm-badge--success', true);
    } else {
      this.renderer.setElementClass(this.el.nativeElement, 'm-badge--danger', true);
    }
  }
}
