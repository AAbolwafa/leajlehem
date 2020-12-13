import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from '../../app/services/school.service';
import { AreasService } from '../services/areas.service';
import {UserService} from '../services/user.service';
import { school } from '../models/school.entity';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { UploadFileService } from '../services/file-upload.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myimage: Observable<any>;
  registerForm: FormGroup;
  showSchoolSelect = false;
  attachedFileInBase: string;
  placeholder = 'select value';
  hideSubmit = true;
  schools: school;
  errorMessage = "";
  successNessage ="";
  hideRegisterForm = false;
  areas;
  constructor(private school_serv: SchoolService, 
    private areas_serv: AreasService,
     private userServ:UserService,
	 private uploadServ: UploadFileService,
     private route: Router) { }

  stepValue = 1;

  ngOnInit(): void {
    this.school_serv.getSchools().subscribe(
      (schools: any) => {
        this.schools = schools.Data;
        console.log('this.schools');
        console.log(this.schools);
      },
      err => {
        console.log("error in connection");

      });
    this.areas_serv.getAreas().subscribe(
      (areas: any) => {
        this.areas = areas.Data;
        console.log('this.areas');
        console.log(this.areas);
      }
    )
    this.registerForm = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [Validators.required,Validators.minLength(6)]),
      REpassword: new FormControl(null, [Validators.required,Validators.minLength(6)]),
      PhoneNumber: new FormControl(null, Validators.required),
      JobTypeId: new FormControl('0'),
      AreaId: new FormControl('1'),
      SchoolId: new FormControl('1'),
      FileBase64: new FormControl(null)
    });
  } 
  register() {
    console.log(this.registerForm.value);
    this.userServ.registerUser(this.registerForm.value).subscribe(
      (data)=>{
        console.log('data to be sent');
        console.log(data);
        this.successNessage = "تم التسجيل بنجاح" ;
        // this.hideRegisterForm = true;
        setTimeout(()=>{
          this.route.navigate([""]); 
        },3000)
        
        
      },
      err =>{
        console.log(err.error);
        switch (err.error.ErrorCode) {
          case 3: {
            this.errorMessage = 'الاسم الأول مطلوب';
            break;
          }
          case 21: {
            this.errorMessage = '';
            break;
          }
          default: {
            this.errorMessage = 'حدث خطأ';
            break;
          }
        }
        
        this.stepValue = 1;
        
      }
    )
  }
  logselect() {

    if (this.registerForm.get('JobTypeId').value == '1' || this.registerForm.get('JobTypeId').value == '2' || this.registerForm.get('JobTypeId').value == '3') {
      console.log('select change listner 1');
      this.showSchoolSelect = true;
    }
    else {
      this.showSchoolSelect = false;
      this.hideSubmit = false;
    }
  }


 onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.uploadServ.convertToBase64(file);
    this.uploadServ.myimage.subscribe(
      (upData) => {
        console.log(typeof (upData));
        this.registerForm.controls['attach'].setValue(upData); 
      }
    )
  }

  convertToBase64(file: File) {
    this.myimage = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
      // console.log(file)

    });
    this.myimage.subscribe(
      (upData) => {
        console.log(typeof (upData));
        this.attachedFileInBase = upData;
        this.registerForm.controls['FileBase64'].setValue(upData);
      }
    )
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }



}
