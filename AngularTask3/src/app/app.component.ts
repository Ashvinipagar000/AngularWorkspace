import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask3';

//ng if class

data: any = null; // Initial state with no user data

// Simulate user login
login() {
  this.data = {
    name: "Ashvini",
    age: 23
  };
}

// Simulate user logout
logout() {
  this.data = null; // Clear user data
}

//ngfor example

  numbers=[22,3,0,66,2,46,30,6,4,7];


//ng Switch 

  color="blue";


  //ng class example

  ishighlight=true;

  darkOrLight(){
    this.ishighlight=!this.ishighlight;  
  }

  //ngStyle example
  backgroundColor = 'gray';
  fontSize = 16;
  textcolor='white';


}
