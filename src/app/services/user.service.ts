import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userToken = new Subject<any>();
  Base_url: String = "http://api.leajlehem.com/api/";
  parents_Base_url:string = "http://api.leajlehem.com/api/parents/All?lang=ar";
  constructor(private http: HttpClient) { }
  registerUser(data: any) {
    return this.http.post(this.Base_url + "account/register", data);
  }
  loginUser(data: any){
    return this.http.post(this.Base_url + "account/Login", data);
  }
  getParents(auth_token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(this.parents_Base_url, { headers: headers })
  }

  getCurrentUserProfileData(auth_token,jobType){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    if(jobType=="0") 
    {
      return this.http.get("http://api.leajlehem.com/api/parents/profile?lang=ar", { headers: headers })
    }

    else if(jobType=="1"){
      return this.http.get("http://api.leajlehem.com/api/teachers/profile?lang=ar", { headers: headers })
    }
    else if(jobType=="4"){
      return this.http.get("http://api.leajlehem.com/api/admins/profile?lang=ar", { headers: headers })
    }

  }
  
}