import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/search-response.interface';
import { Observable, of } from 'rxjs';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private url:string = environments.baseUrl;
  private API_KEY = environments.GIFAPI_KEY;
  private http = inject(HttpClient);





  public searchGifs(value:string):Observable<SearchResponse>{


    const params = new HttpParams()
        .set('api_key', this.API_KEY)
        .set('limit',10)
        .set('q', value);


    return this.http.get<SearchResponse>(`${this.url}/search`,{params});

  }




}
