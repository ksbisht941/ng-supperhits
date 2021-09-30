import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  baseUrl: string = environment.port;

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies() {
    return this.http.get(`${this.baseUrl}v1/movies`);
  }
}
