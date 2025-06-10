import { NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent implements OnInit {

  @Input() currentLeson!: any;

  constructor(public studentService: StudentsService) { }
  studentList: any[]= [];
  ngOnInit() {
    this.studentService.getStudents().subscribe(updatedStudents => {
      this.studentList = updatedStudents;
    });
  }


  lessonStart() {
    let now = Date.now();

    if (this.currentLeson.startDate < now)
      return true;
    return false;
  }

  countStudents() {

    return this.studentList.filter(s => s.lessonName == this.currentLeson.className).length;

  }

}
