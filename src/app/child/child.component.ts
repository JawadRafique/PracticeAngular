import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: 'child.component.html',
    styleUrls: ['child.component.scss']
})
export class ChildComponent implements OnInit {
    
    @Input() data:string

    
    
    ngOnInit(): void {
        // console.log(this.data);
    }

}
