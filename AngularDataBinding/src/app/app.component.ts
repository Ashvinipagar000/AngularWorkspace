import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngtask1databinding';
  hii:any="Good morning....!";

  currentDate = new Date();
  username="Angular developer";
  
  getGreeting() {
    return 'Hello, Angular Developer!';
  }

  // property binding
  imageurl="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  isdisable=false;

  val1=20;
// event binding
  m1(){
    console.log("yes it clicked");
    let a=100;
    let b=200;
    console.log(a+b);
  }

  ms(){
    //alert("mouseover");
    console.log("remove command");
    
  }
// two way binding 

myval=10;


}
