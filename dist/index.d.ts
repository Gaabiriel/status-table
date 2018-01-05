import { OnInit, Renderer, ElementRef } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
export declare class StatusTableComponent implements ViewCell, OnInit {
    renderValue: string;
    directiveValue: boolean;
    value: string | number;
    rowData: any;
    ngOnInit(): void;
}
export declare class StatusTableDirective implements OnInit {
    el: ElementRef;
    renderer: Renderer;
    type: any;
    constructor(el: ElementRef, renderer: Renderer);
    ngOnInit(): void;
}
