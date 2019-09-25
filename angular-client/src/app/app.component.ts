import { Component, OnInit } from '@angular/core';
import { Badge } from './badge';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
 
  constructor(private courseService: CourseService){

  }

  ngOnInit() { 
    console.log('Do some initialization')
    this.courseService.findAllCourses()
    .then( (res:Array<Badge>)=> {
      console.log(res)
      this.badges = res
    })
  }

  badges: Array<Badge> = []

 

}
