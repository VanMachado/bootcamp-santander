import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

//O "app" na frente do valor do "selector" me ajuda a lembrar que ele esta relacionado ao comp do angular
@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'     
})

//Para ser reconhecido pelo angular tem q adiciona-lo no @ngModele no app.module
export class CourseListComponent implements OnInit {
    
    courses: Course[] = [];

    constructor(private courseService: CourseService) { 

    }

    ngOnInit(): void {
       this.courses = this.courseService.retriveAll();
    }
    
}