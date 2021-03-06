import { Component, Input, OnInit, Directive, Renderer, ElementRef } from '@angular/core';

const template = ' <div class="m-badge {{statusBadge}}">{{renderValue}}</div>';
@Component({
  selector: 'status-table',
  styleUrls: [

  ],
  template: template,
})

export class StatusTableComponent implements OnInit {

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