import { ElementRef, Renderer, OnInit } from '@angular/core';
export declare class StatusTableDirective implements OnInit {
    el: ElementRef;
    renderer: Renderer;
    type: any;
    constructor(el: ElementRef, renderer: Renderer);
    ngOnInit(): void;
}
