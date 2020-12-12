import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from '../services/user.service';
import{LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginMessage = false;
  constructor(private route : Router, private UserServ:UserService , private LOgin:LoginService ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "email" : new FormControl(null,[Validators.required,Validators.email]),
      "password" : new FormControl(null,Validators.required),
    });
  }
  login(){
    // var count ="";
    // for(let i=5;i>=1;i--){ 
    //   for(let j=5;j>=i;j--){
    //     count +=j;
    //     console.log(count);
    //   }
     
      
    // }
    console.log(this.loginForm.value);
    // if( loginMail==="admin@mail.com" && loginPassword === "admin"){
    //   this.loginMessage = false;
    //   this.route.navigate(['/profile']); 

    // }
    // else{
    //   this.loginMessage = true;
    // }
    // this.LOgin.sendMessage("message sent successfuly");
    
    this.LOgin.loginUser(this.loginForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.LOgin.userToken.next(data);
        localStorage.setItem("userToken",data.Data.Token);
        localStorage.setItem("UserType",data.Data.JobType);
        this.route.navigate(['/profile']); 
        this.LOgin.sendMessage(data.Data.Token);
        // console.log("user type-*-----------");
        
        this.LOgin.userType.next(data.Data.JobType);
        
      },
      err =>{
        console.log(err.error.ErrorMessage)
      }
    )

  }
  register(){
    this.route.navigate(['register']); 
  }
}
