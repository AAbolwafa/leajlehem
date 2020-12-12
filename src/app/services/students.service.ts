import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  Base_url: any = "http://api.leajlehem.com/api/parents/Students";
  addStudentBaseUrl = "http://api.leajlehem.com/api/cp/AddStudent";
  constructor(private http:HttpClient) { } 
  getLoggedInUser(auth_token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(this.Base_url, { headers: headers })
    // return this.http.get(this.Base_url + "areas/all?lang=ar");
  }
  addStudent(data,auth_token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post(this.addStudentBaseUrl , data, { headers: headers });

  }
}
