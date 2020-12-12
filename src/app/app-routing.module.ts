import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { SingleFollowerComponent } from './followers/single-follower/single-follower.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  // {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},

  // {path:"myProfile",component:MyProfileComponent},
  {path:"followers",component:FollowersComponent},
  {path:"singleFollower" ,component:SingleFollowerComponent} , 
  {path:"profile",component:ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
