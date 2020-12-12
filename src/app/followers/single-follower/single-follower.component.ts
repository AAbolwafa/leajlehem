import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-single-follower',
  templateUrl: './single-follower.component.html',
  styleUrls: ['./single-follower.component.css']
})
export class SingleFollowerComponent implements OnInit {
  students_of_parents;
  constructor(private studentServ:StudentsService) { }
 
  ngOnInit(): void {
    this.studentServ.getLoggedInUser(localStorage.getItem("userToken")).subscribe(
      (response:any)=>{
        console.log("students of parents is == ");
        this.students_of_parents = response.Data;
        console.log(this.students_of_parents); 
        
        
      }
    )
  }

}
