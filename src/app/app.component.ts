import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  currentVal = "";
  show = "green"
  // show= "Red";
  // show= "Red";


  getName() {
    alert('Hello World');
  }

  myEvent(evt) {
    console.log(evt);
  }

  getVal(val) {
    this.currentVal = val;
  }
}
