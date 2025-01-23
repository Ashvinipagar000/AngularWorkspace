import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { user } from '../Component/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }


  registeruser(user: any): Observable<any> {
      const url = 'http://localhost:8080/task/registeruser';
      return this.http.post(url, user);
    }

      alluser():Observable<any>{
      const url = 'http://localhost:8080/getAlluser';
      return this.http.get(url);
    }



    edituser(id: number, updateduser: user): Observable<any> {
      const url = `http://localhost:8080/edituser/${id}`;
      return this.http.put(url, updateduser);
    }


  deleteuser(id :number):Observable <any>{
    const url= `http://localhost:8080/tbluser/deleteuser/${id}`;
    return this.http.delete(url);
  }

  getIPAddress(): Observable<any> {
    // Example of fetching IP address from an external API
    return this.http.get('http://localhost:8080/tbluser/ipaddress/s');
  }

  //entry form


  getUsers(): Observable<any> {
    const apiUrl=`http://localhost:8080/tbluser/getuserlist`;
    return this.http.get(apiUrl);
  }

}






