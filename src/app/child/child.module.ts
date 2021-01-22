// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// This Module's Components
import { ChildComponent } from './child.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ChildComponent,
    ],
    exports: [
        ChildComponent,
    ]
})
export class ChildModule {

}
