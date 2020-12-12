import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userData;
  jobType = localStorage.getItem("UserType");
  newUserProfileData;
  constructor(private loginServ: LoginService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.loginServ.userToken.subscribe(
    //   (message: any) => {
    //     // this.userData = message.Data;
    //     // console.log("object in profile");
    //     // console.log("----------------------------------------------");
    //     // console.log(this.userData);
    //     this.jobType = message.Data.JobType;
    //   }
    // );



    /* using separate service to load profile data individually */
    this.userService.getCurrentUserProfileData(localStorage.getItem('userToken'), localStorage.getItem("UserType")).subscribe(
      (profileResponse: any) => {
        console.log("profile data based on user type");
        console.log(profileResponse);
        this.newUserProfileData = profileResponse.Data;


      }
    );












    // this.loginServ.userType.subscribe( 
    //   (response)=>{
    //     this.jobType = response;
    //   }
    // )
    
  }

}
