import { Component, Input } from '@angular/core';


@Component({
    selector: 'my-badge',
    template: `
    <button type="button" class="btn btn-primary" (click)="handleClick()">
        {{title}} <span class="badge badge-light">{{count}}</span>
    </button>
   
    `
})
export class BadgeComponent{
    @Input('caption') title: string = 'Default';
    @Input('count') count: number = 0;
    handleClick(){
        console.log('button clicked... can attach some functionality')
        this.count++;
    }
}