import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Output } from '@angular/core';
import {EventEmitter} from 'eventemitter3';

// import { EventEmitter } from 'events';

@Component({
    selector: 'child3',
    templateUrl: 'child3.component.html',
    styleUrls: ['child3.component.scss']
})
export class Child3Component implements OnInit{
    
    messsage3="Hello World From Parent To child"
    ngOnInit(): void {    }

    @Output () event = new EventEmitter<any>(); 

    sendMessage () {
        this.event.emit(this.messsage3)
    }


}
