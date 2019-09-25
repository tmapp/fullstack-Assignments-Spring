import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'add-course',
    template: `
        <h2>Add Customer Details</h2> 

        <div *ngIf="message" class="alert alert-success" role="alert">
            {{message}}
        </div>

        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Id</span>
        </div>
        <input #id (change)="0" type="text" class="form-control" aria-label="UserId" aria-describedby="basic-addon1"> 
        </div>
        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">FirstName</span>
        </div>
        <input #firstName (change)="0" type="text" class="form-control" placeholder="UserFirstName" aria-label="UserFirstName" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">LastName</span>
        </div>
        <input #lastName (change)="0" type="text" class="form-control" placeholder="UserLastName" aria-label="UserLastName" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Email</span>
        </div>
        <input #email (change)="0" type="text" class="form-control" placeholder="UserEmail" aria-label="UserEmail" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Mobile</span>
        </div>
        <input #mobile (change)="0" type="text" class="form-control" placeholder="UserMobile" aria-label="UserMobile" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-6">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">DateOfBirth</span>
        </div>
        <input #dateOfBirth (change)="0" type="text" class="form-control" placeholder="UserDOB" aria-label="UserDOB" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-6">
           <button type="button" class="btn btn-primary" (click)="addCourse(id.value, firstName.value,lastName.value,mobile.value,email.value,dateOfBirth.value)">Add customer</button>
           <!-- <button type="button" class="btn btn-primary" (click)="addCourse(id.value,firstName.value)">Add customer</button>-->
        </div>
    
    `
})
export class AddCourseComponent {

    message: string = ''

    constructor(private courseService: CourseService) { }
    addCourse(id: number, firstName: string,lastName:string,mobileNo:number,emailId:string,dob:number){
        console.log('Add Course', id, firstName,lastName,mobileNo,emailId,dob);

        // Http post request 
        let body = {id:id, firstName:firstName,lastName:lastName,mobile:mobileNo,email:emailId,dateOfBirth:dob}
        this.courseService.addCourse(body)
        .then( (res:any)=> {
            console.log(res);
            this.message = "Customer Added successfully!!" + res.caption
          })

    }

    

}