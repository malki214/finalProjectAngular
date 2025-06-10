import { Component } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';
import { NgFor } from '@angular/common';
import { LessonComponent } from '../lesson/lesson.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-lessons-list',
  standalone: true,
  imports: [NgFor, LessonComponent,LogoutComponent],
  templateUrl: './lessons-list.component.html',
  styleUrl: './lessons-list.component.css'
})
export class LessonsListComponent {

  constructor(public lessonsList: LessonsService){}

  lessons = this.lessonsList.getLessons();
}