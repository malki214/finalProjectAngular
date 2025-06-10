
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { GridApi } from 'ag-grid-community';

import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { DetailsComponent } from '../details/details.component';
import { LogoutComponent } from '../logout/logout.component';
import { NewSignComponent } from '../new-sign/new-sign.component';
ModuleRegistry.registerModules([AllCommunityModule]);


@Component({
  selector: 'app-participant',
  imports: [AgGridAngular, MatButtonModule,LogoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true
})
export class SignUpComponent implements OnInit{
  constructor(public studentService: StudentsService, private dialog: MatDialog) { }
  students: any[] = [];

  ngOnInit() {
    this.studentService.getStudents().subscribe(updatedStudents => {
      this.students = updatedStudents;
      // this.gridApi.setRowData(this.students); // עדכון הגריד
      console.log('Updated Students List:', this.students);
    });
  }

  private gridApi!: GridApi;

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.loadStudents(); // טען את הסטודנטים כאשר הגריד מוכן
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(updatedStudents => {
      this.students = updatedStudents;
      // this.gridApi.setRowData(this.students); // עדכון הגריד
      this.gridApi.setRowGroupColumns(this.students)
      console.log('Updated Students List:', this.students);
    });
  }
  
  // studentList = this.studentService.getStudents();
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: { id: id },
      width: '500px',
      height: '400px',
      direction: 'rtl'
    });
  }
  columnDefs: ColDef[] = [
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'phone', headerName: 'Number Phone', sortable: true, filter: true },
    { field: 'lessonName', headerName: 'Course', sortable: true, filter: true },
    { field: 'paid', headerName: 'Paid', sortable: true, filter: true },
    {field: "lessonNumber", headerName: "details",
      cellRenderer: () => { return 'details' },
      onCellClicked: (params: any) => this.openDialog(params.data.id)
    },
  ];

  oponNewSign(){
    const dialogRef = this.dialog.open(NewSignComponent, {
      data: { id: "10000001" },
      width: '500px',
      height: '400px',
      direction: 'rtl'
    });
  }
}
