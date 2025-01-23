import { LoginService } from './../../service/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginservice: LoginService){}
  username:any='';
  password:any='';

  login(){
    const loginrequest={
      username:this.username,
      password:this.password
    }
    this.loginservice.login(loginrequest).subscribe((response)=>{
      console.log(response);

    });
  }


}
