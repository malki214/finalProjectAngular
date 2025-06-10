import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  constructor(public studentService: StudentsService, @Inject(MAT_DIALOG_DATA) public data: { id: string }) { }
  studentList: any[] = [];
  ngOnInit() {
    this.studentService.getStudents().subscribe(updatedStudents => {
      this.studentList = updatedStudents;
    });
  }
  student = this.studentList.find(s => s.id === this.data.id);

}
