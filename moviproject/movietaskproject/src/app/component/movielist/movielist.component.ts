import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';


export interface movie {
  movieid:number;
  dirid:number;
  actid:number;
  moviename: string;
  dirname: string;
  actname: string;
}

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})


export class MovielistComponent {


    query: string = '';
    movies: movie[] = [];

    constructor(private movieService: MovieService) {}

    //|||||
    search(): void {
      debugger
      this.movies = [];  // Reset the movie list before starting a new search

      // Search by movie name
      this.movieService.getmoviebyname(this.query).subscribe(
        (data: any) => {
          if (Array.isArray(data)) {
            // If it's an array of movies, merge them into the movies list
            this.movies = [...this.movies, ...data];
          } else if (data && data.movieid) {
            // If it's a single movie object, add it to the list
            this.movies = [...this.movies, data];
          } else {
            console.error('Unexpected data structure for movie name search:', data);
          }
        },
        (error) => {
          console.error('Error fetching movies by name:', error);
        }
      );


      // Search by actor name
      this.movieService.getMoviesByActor(this.query).subscribe(
        (data: any) => {
          if (Array.isArray(data)) {
            // If it's an array of movies, merge them into the movies list
            this.movies = [...this.movies, ...data];
          } else if (data && data.movies) {
            // If it's a single movie object, add it to the list
            this.movies = [...this.movies, data];
          } else {
            console.error('Unexpected data structure for movie name search:', data);
          }
        },
        (error) => {
          console.error('Error fetching movies by name:', error);
        }
      );

      // Search by director name
      this.movieService.getmoviebydir(this.query).subscribe(
        (data: any) => {
          if (Array.isArray(data)) {
            // If it's an array of movies, merge them into the movies list
            this.movies = [...this.movies, ...data];
          } else if (data && data.movieid) {
            // If it's a single movie object, add it to the list
            this.movies = [...this.movies, data];
          } else {
            console.error('Unexpected data structure for movie name search:', data);
          }
        },
        (error) => {
          console.error('Error fetching movies by name:', error);
        }
      );
    }
  }

