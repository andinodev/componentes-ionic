/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValorantApiService {

  url = 'https://latam.api.riotgames.com';
  apiKey = 'RGAPI-9a8b254f-0aff-4ed2-9141-e52c0b528452';

  constructor(private http: HttpClient) { }

  getContent() {
    /*
    const tokens = {
      'X-Riot-Token': 'RGAPI-9a8b254f-0aff-4ed2-9141-e52c0b528452'
    };

    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(tokens)
    };
    */
    return this.http.get(`${this.url}/val/content/v1/contents?locale=es-MX&api_key=${this.apiKey}`);
  }
}
