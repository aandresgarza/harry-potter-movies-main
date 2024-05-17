import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/list-movies.model';

@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {

  constructor(private http: HttpClient) {}

  getListMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>('/movies')
  }

  getDetailMovie(idMovie:string | null):Observable<Movie>{
    return this.http.get<Movie>('/movies/' + idMovie)
  }
}
