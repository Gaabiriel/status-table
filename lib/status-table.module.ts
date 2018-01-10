import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StatusTableComponent } from "./status-table.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StatusTableComponent
    ],
    exports: [
        StatusTableComponent
    ],
    entryComponents: [
        StatusTableComponent
    ]
})

export class StatusTableModule { }