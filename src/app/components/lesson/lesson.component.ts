import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [NgStyle,NgIf],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
  
  @Input() currentLeson!: any;

  constructor(public studentService: StudentsService){
    
  }

  studentList = this.studentService.getStudents();

  lessonStart(){
    let now = Date.now();
  
    if(this.currentLeson.startDate < now)
      return true;
    return false;
  }

  countStudents(){
    
    return this.studentList.filter(s => s.lessonName == this.currentLeson.className).length;

  }

}
