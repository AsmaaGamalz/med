import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class MedService {
  constructor(private _HttpClient:HttpClient) { 
    }
    gettrending(){
      return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=77d9e619ce848f046635aa33713a0ad5");
  }
}
