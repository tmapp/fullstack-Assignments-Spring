import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './component/card.component';
import { CourseService } from './services/course.service';
import { AddCourseComponent } from './component/add-course.component';
import { DeleteCourseComponent } from './component/delete-course.component';




@NgModule({
  declarations: [
    AppComponent,CardComponent,AddCourseComponent,DeleteCourseComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
