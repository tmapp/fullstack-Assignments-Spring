import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../services/course.service';



@Component({
    selector: 'my-card',
    templateUrl: './card.component.html'
  })
export class CardComponent implements OnInit {


    @Input('id') id: number
    @Input('firstName') firstName: string
    @Input('lastName') lastName: string
    @Input('email') email: string
    @Input('mobile') mobile: number
    @Input('dateOfBirth') dateOfBirth: Date


    constructor(private courseService: CourseService) { }

    ngOnInit() { 

    }

    deleteCourse(){
        this.courseService.deleteCourse(this.id)
        .then(res=>console.log(res))

    }

}