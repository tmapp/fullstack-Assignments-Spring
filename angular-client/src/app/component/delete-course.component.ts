import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'delete-course',
    template: `
        <h2>Delete Customer Details</h2> 

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
           <button type="button" class="btn btn-primary" (click)="deleteCourse(id.value)">Delete customer</button>
          
        </div>
    
    `
})
export class DeleteCourseComponent {

    message: string = ''

    constructor(private courseService: CourseService) { }
    deleteCourse(id: number){
        console.log('Delete Course', id);

        this.courseService.deleteCourse(id)
        .then((res:any)=> {
            console.log(res);
            this.message = "Customer Deleted successfully!!" + res.caption
          })
    }

    

}