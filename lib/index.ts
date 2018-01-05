import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { StatusTableDirective } from './status.table.directive';

@Component({
  entryComponents: [StatusTableDirective],
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
