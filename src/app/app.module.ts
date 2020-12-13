import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {ProfileComponent} from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FollowersComponent } from './followers/followers.component';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SingleFollowerComponent } from './followers/single-follower/single-follower.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {UploadFileService} from './services/file-upload.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { ManageStudentComponent } from './students/manage-student/manage-student.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './students/courses/courses.component';
import { SchoolCollectionService } from './services/school-collection.service';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    FooterComponent,
    ProfileComponent,
    RegisterComponent,
    MyProfileComponent, 
    FollowersComponent, SingleFollowerComponent, ManageStudentComponent, CoursesComponent, NotfoundComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    NoopAnimationsModule, 
    
  ],
  providers: [UploadFileService,LoginService,UserService,SchoolCollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
