import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { school } from 'src/app/models/school.entity';
import { AreasService } from 'src/app/services/areas.service';
import { SchoolService } from 'src/app/services/school.service';
import { UserService } from 'src/app/services/user.service';
import {SchoolCollectionService} from 'src/app/services/school-collection.service';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {
  model: NgbDateStruct;
  addStudentForm: FormGroup;
  attachedFileInBase: string;
  schools;
  errorMessage = "";
  successNessage ="";
  hideRegisterForm = false;
  areas;

  selectedSchool;
  selectedStage;
  slectedGrade;
  selectedClassroom;
  allParents;

  constructor(private school_serv: SchoolService, 
    private areas_serv: AreasService,
     private userServ:UserService,
     private route: Router,
     private stages:SchoolCollectionService,
     private studentServ:StudentsService) { }
 
  ngOnInit(): void {
    
    this.userServ.getParents(localStorage.getItem("userToken")).subscribe(
      (response:any)=>{
        this.allParents = response.Data;
        console.log(this.allParents);
        
      },
      err=>{
        console.log("cannot find parents");
        console.log(err);
        
        
      }
    )
    this.school_serv.getSchools().subscribe(
      (schools: any) => {
        this.schools = schools.Data;
        // this.selectedSchool = schools.Data[0];
        // this.selectedStage = schools.Data[0].Stages;
        // this.slectedGrade = schools.Data[0].Stages[0].Grades;
        // this.selectedClassroom = schools.Data[0].Stages[0].Grades[0].ClassRooms;

        console.log('////////////////////////////////');
        console.log(this.selectedClassroom);
        
        
      }
      ,
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
    this.addStudentForm = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      MiddleName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Gender: new FormControl(null, Validators.required),
      DateOfBirth: new FormControl(null, Validators.required),
      AreaId: new FormControl(null, Validators.required),
      SchoolId: new FormControl(null, Validators.required),
      StageId: new FormControl(null, Validators.required),
      GradeId: new FormControl(null, Validators.required),
      ClassRoomId: new FormControl(null, Validators.required),
      DisabilityTypeId: new FormControl(null, Validators.required),
      IQ: new FormControl(null, Validators.required),
      Relatives: new FormArray([new FormGroup({
        RelativeName : new FormControl(null),
        RelativePhoneNumber : new FormControl(null)
      })]),
      // RelativeName: new FormControl(null),
      // RelativePhoneNumber: new FormControl(null),
      ImageBase64: new FormControl(null),
      ParentId: new FormControl(null)
    });
    // this.addStudentForm.controls['SchoolId'].setValue(this.selectedSchool.Id, {onlySelf: true});

  }

  schoolOnChange() {
    let schoolToHold = this.schools.filter(x => x.SchoolId == this.addStudentForm.get("SchoolId").value);
    this.selectedStage = schoolToHold[0].Stages;

    console.log('ToHold');
    console.log(schoolToHold);
    console.log('ToHold Result');
    console.log(this.selectedStage);
  }
  stageOnChange() {
    let stageToHold = this.selectedStage.filter(x => x.StageId == this.addStudentForm.get("StageId").value);
    this.slectedGrade = stageToHold[0].Grades;
    console.log('ToHold');
    console.log(stageToHold);
    console.log('ToHold Result');
    console.log(this.slectedGrade);
  }
  gradeOnChange() {
    let gradeToHold = this.slectedGrade.filter(x => x.GradeId == this.addStudentForm.get("GradeId").value);
    this.selectedClassroom = gradeToHold[0].ClassRooms;
    console.log('ToHold');
    console.log(gradeToHold);
    console.log('ToHold Result');
    console.log(this.selectedClassroom);
  }
  
  addStudent(){
    console.log(this.addStudentForm.value);
    this.studentServ.addStudent(this.addStudentForm.value,localStorage.getItem("userToken")).subscribe(
      (response)=>{
        console.log("student added");
        console.log(response);
      }
    )

  }
  onAddRelative(){
    const relativeGroup = new FormGroup({ 
      RelativeName : new FormControl(null),
      RelativePhoneNumber : new FormControl(null)
    });
    // const RelativeName = new FormControl(null);
    // const RelativePhoneNumber = new FormControl(null);
    (<FormArray>this.addStudentForm.get("Relatives")).push(relativeGroup);

  }

}
