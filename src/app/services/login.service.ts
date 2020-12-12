import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userToken = new BehaviorSubject<any>("");
  private messageSource = new BehaviorSubject<any>("");
  userType = new BehaviorSubject<any>("");
  messageObs$ = this.messageSource.asObservable();
  constructor(private http: HttpClient) { }


  Base_url: String = "http://api.leajlehem.com/api/"; 

  loginUser(data: any) {
    return this.http.post(this.Base_url + "account/Login", data);
    
  }
  sendMessage(message){
    this.messageSource.next(message);
  } 
}
