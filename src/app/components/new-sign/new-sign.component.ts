import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LessonsService } from '../../services/lessons.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-new-sign',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './new-sign.component.html',
  styleUrl: './new-sign.component.css'
})
export class NewSignComponent {
    studentDetails: FormGroup;
    CourseNames: string[] = [];
 constructor(private fb: FormBuilder,public studentService: StudentsService,public lessonService: LessonsService,@Inject(MAT_DIALOG_DATA) public data: {id: string}) {
    this.studentDetails = this.fb.group({
      Name: ['', [Validators.required]],
      Phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      Course:['',[Validators.required]],
      Paid: ['',[Validators.required]]
    })

    this.CourseNames = this.lessonService.getLessons().map(l => l.className);

  }
  addSign(){
    let new_s = {
      name:this.studentDetails.controls["Name"].value,
      phone: this.studentDetails.controls["Phone"].value,
      lessonName: this.studentDetails.controls["Course"].value,
      paid: this.studentDetails.controls["Paid"].value
    }
    this.studentService.addStudent( new_s)
  }
}
