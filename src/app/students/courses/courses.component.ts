import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { school } from 'src/app/models/school.entity';

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

  constructor() { }

  ngOnInit(): void { 
    this.addCourseForm = new FormGroup({
      courseName: new FormControl(null, Validators.required),
      courseDate: new FormControl(null, Validators.required),
      coursePreif: new FormControl(null, Validators.required),
      FileBase64: new FormControl(null)
      
    });
  }
  showCourseForm(){
    this.showAdd = true;
  }
  addCourse(){
    console.log(this.addCourseForm.value);
    
  }

}
