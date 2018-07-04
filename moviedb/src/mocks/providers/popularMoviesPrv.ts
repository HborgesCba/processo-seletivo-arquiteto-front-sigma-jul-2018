import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PopularMoviesPrv {
  constructor(public http: HttpClient) {
  }
  apiRoot: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '4713a0e47f6dc085ec197df9b82e8690';
  languageISO: string = 'pt-BR'


  getPopularMovies(page: number){
    let apiURL = `${this.apiRoot}movie/popular?api_key=${this.apiKey}&language=${this.languageISO}&page=${page}`;
    return this.http.get(apiURL);
  }
  getLanguages(){
    let apiURL = `${this.apiRoot}configuration/languages?api_key=${this.apiKey}`;
    return this.http.get(apiURL);
  }
  getMoviedetail(movieId: number){
    let apiURL = `${this.apiRoot}movie/${movieId}?api_key=${this.apiKey}&language=${this.languageISO}`;
    return this.http.get(apiURL);
  }
}
