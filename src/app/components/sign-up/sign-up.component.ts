import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(public studentService: StudentsService){}

  studentList = this.studentService.getStudents();
  columnDefs: ColDef[] = [
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'phone', headerName: 'Number Phone', sortable: true, filter: true },
    { field: 'lessonName', headerName: 'Course', sortable: true, filter: true },
    { field: 'paid', headerName: 'Paid', sortable: true, filter: true },
    { field: '', headerName: 'Details', cellRenderer:(params: any) => `<button (click)="viewDetails(${params.data.id})">Details</button>` }

  ];

  viewDetails(id: string) {
    const student = this.studentList.find(s => s.id === id);
  }

}
