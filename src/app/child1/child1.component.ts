import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'child1',
    templateUrl: 'child1.component.html',
    styleUrls: ['child1.component.scss']
})
export class Child1Component implements OnInit {
    
    @Input() data: string
    
    ngOnInit(): void {
        // console.log(this.data);
    }

}