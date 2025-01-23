import { user } from './../component/register/register.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private baseurl=`http://localhost:8080`;

  register(User: any): Observable<any> {
    // debugger;
    // console.log("this.UserData", User);
    const url = `${this.baseurl}/users`
    return this.http.post(url, User);
  }


  cancel(User: any): Observable<any> {
    // debugger;
    // console.log("this.UserData", User);
    const url = `${this.baseurl}/users`
    return this.http.delete(url);
  }

  getCountries():Observable<any>{
    return this.http.get(`${this.baseurl}/countries/getallcountries`);
  }

  getStates():Observable<any>{
    return this.http.get(`${this.baseurl}/states/getallstates`);
  }

  getCities():Observable<any>{
    return this.http.get(`${this.baseurl}/cities/getallcities`)
  }

  getuser():Observable<any>{
    return this.http.get(`${this.baseurl}/register/getallregisteruser`)
  }

  deleteuser(user:user):Observable<any>{
    return this.http.delete(`${this.baseurl}/register/deleteuser/${user.userid}`)
  }

  registeruser(user:user):Observable<any>{
    return this.http.post((`${this.baseurl}/register/registeruser`),user);
  }

  getallusers():Observable<any>{
    return this.http.get(`${this.baseurl}/register/gatalluser`)
  }

  updateuser(user: user, updatedtask: user ):Observable<any>{
    return this.http.put((`${this.baseurl}/register/updateuser/${user.userid}`),updatedtask);
  }

  getuserbyid(userId: number):Observable<any>{
    return this.http.get((`${this.baseurl}/register/getuserbyid/${userId}`))
  }


  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post((`${this.baseurl}/login`), credentials);
  }

  // register/getUserBYCity/{city}
  getUserBYName(name:string):Observable<any>{
    return this.http.get(`${this.baseurl}/register/getUserBYName/${name}`)
  }
  getUserBYEmail(email:string):Observable<any>{
    return this.http.get(`${this.baseurl}/register/getUserBYEmail/${email}`)
  }
  getUserBYCountry(country:string):Observable<any>{
    return this.http.get(`${this.baseurl}/register/getUserBYCountry/${country}`)
  }
  getUserBYState(state:string):Observable<any>{
    return this.http.get(`${this.baseurl}/register/getUserBYState/${state}`)
  }
  getUserBYCity(city:string):Observable<any>{
    return this.http.get(`${this.baseurl}/register/getUserBYCity/${city}`)
  }


//getuserprofile
  // getUserProfile(): Observable<any> {
  //   const token = localStorage.getItem('authToken');
  //   if (!token) {
  //     return throwError('No token found');
  //   }

  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.get<any>(`${this.baseUrl}/user/profile`, { headers });
  // }
}
