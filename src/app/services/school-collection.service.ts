import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolCollectionService {
  private schoolStages = [
    {Id:1,Name:"الابتدائية", grade: [
      {Id: 1, Name: 'الصف الاول'},
      {Id: 2, Name: 'الصف الثانى'},
      {Id: 3, Name: 'الصف الثالث'},
      {Id: 4, Name: 'الصف الرابع'},
      {Id: 5, Name: 'الصف الخامس'},
      {Id: 6, Name: 'الصف السادس'}
    ]},
    {Id:2,Name:"المتوسطة", grade: [
      {Id: 1, Name: 'الصف الاول'},
      {Id: 2, Name: 'الصف الثانى'},
      {Id: 3, Name: 'الصف الثالث'},
    ]},
    {Id:3,Name:"الثانوية", grade: [
      {Id: 1, Name: 'الصف الاول'},
      {Id: 2, Name: 'الصف الثانى'},
      {Id: 3, Name: 'الصف الثالث'},
    ]}
  ];
  
  constructor() { }
  getSchoolStages(){
    return this.schoolStages;
  }
}
