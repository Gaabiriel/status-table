"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var core_1 = require("@angular/core");
import { Component, Input, OnInit, Directive, Renderer, ElementRef } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
var StatusTableComponent = /** @class */ (function () {
    function StatusTableComponent() {
    }
    StatusTableComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value ? 'Ativo' : 'Inativo';
        if (this.value) {
            this.statusBadge = 'm-badge--success';
        }
        else {
            this.statusBadge = 'm-badge--danger';
        }
    };
    __decorate([
        core_1.Input()
    ], StatusTableComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input()
    ], StatusTableComponent.prototype, "rowData", void 0);
    StatusTableComponent = __decorate([
        core_1.Component({
            selector: 'status-table-component',
            styleUrls: [],
            template: "\n    <div class=\"m-badge {{statusBadge}}\">{{renderValue}}</div>\n  ",
        })
    ], StatusTableComponent);
    return StatusTableComponent;
}());
exports.StatusTableComponent = StatusTableComponent;
