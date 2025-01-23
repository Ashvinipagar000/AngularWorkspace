import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movie } from '../component/movielist/movielist.component';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private http: HttpClient) { }

private baseurl=`http://localhost:8080/movie`;

getmoviebyname(moviename:string): Observable<any> {
    const url =`${this.baseurl}/getmovie/${moviename}`;
    return this.http.get(url);
  }

  getMoviesByActor(actname: string): Observable<any> {
    const url = `${this.baseurl}/getMoviesByActor/${actname}`;
    return this.http.get(url);
  }

  getmoviebydir(dirname: string): Observable<any> {
    const url = `${this.baseurl}/getmoviebydir/${dirname}`;
    return this.http.get(url);
  }
}



///

