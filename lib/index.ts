import 'reflect-metadata';
import { Component, Input, OnInit, Directive, Renderer, ElementRef } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
  selector: 'status-table-component',
  styleUrls: [
    
  ],
  template: `
    <div class="m-badge {{statusBadge}}">{{renderValue}}</div>
  `,
})

export class StatusTableComponent implements ViewCell, OnInit {

  renderValue: string;
  directiveValue: boolean;
  @Input() value: string | number;
  @Input() rowData: any;
  statusBadge: string;
  ngOnInit() {
    this.renderValue = this.value ? 'Ativo' : 'Inativo';
    if (this.value) {
      this.statusBadge = 'm-badge--success';
    } else {
      this.statusBadge = 'm-badge--danger';
    }
  }
}