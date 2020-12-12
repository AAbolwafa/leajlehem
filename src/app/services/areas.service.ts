import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  Base_url: String = "http://api.leajlehem.com/api/";
  constructor(private http: HttpClient) { }


  getAreas() {
    return this.http.get(this.Base_url + "areas/all?lang=ar");
   
  }
}
