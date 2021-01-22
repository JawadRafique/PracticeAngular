import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  message3: any;
  message = "Welcome World Child 1 ";
  message1 = "Welcome World Child 2 ";

  recieveMessage($event){
    this.message3=$event
  }



  // title = 'angular';
  // currentVal = "";
  // show = "green"
  // show= "Red";
  // show= "Red";

  // data = ['Jawad','Jhon','Jhony','Jack','Fawad']

//   data = [{
//     name: 'Jawad',
//     gender: 'Male',
//     age: 50,
//     area: "Jauhar" 
//   },
//   {
//     name: 'Fawad',
//     gender: 'Male',
//     age: 60,
//     area: "Jauhar" 
//   },
//   {
//     name: 'Laila',
//     gender: 'Female',
//     age: 60,
//     area: "India" 
//   }
// ]


  // getName() {
  //   alert('Hello World');
  // }

  // myEvent(evt) {
  //   console.log(evt);
  // }

  // getVal(val) {
  //   this.currentVal = val;
  // }

  // getUserValue (value) {
  //   console.log(value)
  // }
}
