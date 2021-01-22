// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { Child1Component } from './child1.component';

@NgModule({
    imports: [

    ],
    declarations: [
        Child1Component,
    ],
    exports: [
        Child1Component,
    ]
})
export class Child1Module {

}
