import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username:any='';
password:any='';

login(){

  console.log(this.username);
  console.log(this.password);


}
}
