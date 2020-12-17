import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {from, Observable, Observer} from 'rxjs';
import { LoginService } from '../services/login.service';
import {StudentsService} from '../services/students.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { 
  closeResult = '';
  public isCollapsed = false;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  
  state$: Observable<[]>;
  userType;
  userLoggedToken;
  messageFromLogin;
  showParents= true;
  showAddStudent = true;
  constructor(private loginServ:LoginService,
    private router:Router,
    private modalService: NgbModal) {}
  asyncTabs: Observable<ExampleTab[]>;
   
 

  ngOnInit(): void {
    this.loginServ.messageObs$.subscribe(
      (message)=>{
        this.messageFromLogin = message;
      }
    )
    this.userLoggedToken = localStorage.getItem("userToken");
    this.loginServ.userType.subscribe(
      (response)=>{
        this.userType = response;
        console.log("user type is");
        console.log(this.userType);
        if(this.userType == "4"){
          console.log("user type is admin");
          this.showParents = false;
          this.showAddStudent = true;
          
        }
        if(this.userType == "0"){
          console.log("user type is parent");
          this.showParents = true;
          this.showAddStudent = false;
        }
        if(this.userType == "1"){
          console.log("user type is parent");
          this.showAddStudent = false;
        }
        if(this.userType == "2"){
          console.log("user type is parent"); 
          this.showAddStudent = false;
        }
        
      }
    )
    this.loginServ.userToken.subscribe(
      (data:any)=>{
        this.userLoggedToken = data;
        console.log("this.userLoggedToken ");   
        console.log(this.userLoggedToken);   
        localStorage.getItem("userToken");
        
      }
    ) 
 }
 signOut(){
  this.router.navigate(['']); 
  localStorage.clear();
 this.modalService.dismissAll("any");
 }


 open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

}
