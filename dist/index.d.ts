import { OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
export declare class StatusTableComponent implements ViewCell, OnInit {
    renderValue: string;
    directiveValue: boolean;
    value: string | number;
    rowData: any;
    ngOnInit(): void;
}
