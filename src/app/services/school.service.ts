import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  Base_url: String = "http://api.leajlehem.com/api/";
  constructor(private http: HttpClient) { }

  getSchools() {
    console.log(this.Base_url + "schools/all?lang=ar&CompleteData=true");
    return this.http.get(this.Base_url + "schools/all?lang=ar&CompleteData=true");
   
  }
}
