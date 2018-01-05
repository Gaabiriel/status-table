import { Component, Input, OnInit, Directive, Renderer, ElementRef } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
  template: `
    <div class="m-badge " status type="{{value}}">{{renderValue}}</div>
  `,
})
export class StatusTableComponent implements ViewCell, OnInit {

  renderValue: string;
  directiveValue: boolean;
  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value ? 'Ativo' : 'Inativo';
  }
}
@Directive({
  selector: '[status]'

})
export class StatusTableDirective implements OnInit {
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
