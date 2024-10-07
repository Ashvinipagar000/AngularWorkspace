import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private r:Router){

  }

  username:any='';
  password: any='';
login(){
  if(this.username==="ash" && this.password==='123'){
    this.r.navigate(['/login'])
  }else{
    alert("wrong credentioals")
    this.r.navigate(['/register'])
  }
}
}
