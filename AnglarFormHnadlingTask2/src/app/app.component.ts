import { Component } from '@angular/core';
interface student{
  sn:String;
  bn:String;
  fb:String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnglarFormHnadlingTask2';

  sn:any='';
  bn:any='';
  fb:any='';
  std:student[]=[];


  formsubmit(){
    if (this.sn && this.bn && this.fb) {
      this.std.push({
        sn: this.sn,
        bn: this.bn,
        fb: this.fb
      });
    this.sn='';
    this.bn='';
    this.fb='';

    }
  }

  }

