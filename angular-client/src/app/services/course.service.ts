import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl: string = 'http://localhost:8080/SpringRest/customers/'




@Injectable()
export class CourseService {
    
    constructor(private http: HttpClient) { }


    addCourse(id: any){
        return this.http.post(baseUrl, id).toPromise()
    }

    deleteCourse(id: number){
        return this.http.delete(baseUrl + id).toPromise()
    }

    findAllCourses(){
        return this.http.get(baseUrl).toPromise()
    }

}