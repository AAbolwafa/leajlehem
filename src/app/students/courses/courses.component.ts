import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { school } from 'src/app/models/school.entity';
import { UploadFileService } from 'src/app/services/file-upload.service';
 
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit { 
  model: NgbDateStruct;
  addCourseForm: FormGroup;
  attachedFileInBase: string;
  schools: school;
  errorMessage = "";
  successNessage ="";
  showAdd = false;
  showCourseButton = true;

  constructor(private uploadServ:UploadFileService) { }

  ngOnInit(): void { 
    this.addCourseForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      courseDate: new FormControl(null, Validators.required),
      Description: new FormControl(null, Validators.required),
      // Files : new FormGroup({
      //   FileBase64:new FormControl(null),
      //     FileName : new FormControl(null),
      //     FileType : new FormControl(0)
      // })
      Files: new FormArray([
        new FormGroup({
          FileBase64:new FormControl(null),
          FileName : new FormControl(null),
          FileType : new FormControl(0)
        })
      ])
      
    });
  }
  showCourseForm(){
    this.showAdd = true;
    this.showCourseButton = false;
  }
  addCourse(){
    console.log(this.addCourseForm.value);
    
  }
  cancelAdd(){
    this.showAdd = false;
    this.showCourseButton = true;
  }
  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0]; 
    this.uploadServ.convertToBase64(file);
    this.uploadServ.myimage.subscribe(
      (upData) => {
        console.log(typeof (upData));
        // this.addCourseForm.controls['Files']["FileBase64"].setValue(upData); 
        // (this.addCourseForm.get("Files") as FormArray).get("FileBase64").value;
        // console.log((this.addCourseForm.get("Files") as FormArray).get("FileBase64").value);
        
        (this.addCourseForm.get("Files") as FormArray).get("FileBase64").setValue(upData);
        
      }
    )
  }
}
