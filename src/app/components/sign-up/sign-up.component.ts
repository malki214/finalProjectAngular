// import { Component } from '@angular/core';
// import { StudentsService } from '../../services/students.service';
// import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
// import { AgGridAngular } from 'ag-grid-angular';
// import type { ColDef } from 'ag-grid-community';
// ModuleRegistry.registerModules([AllCommunityModule]);

// @Component({
//   selector: 'app-sign-up',
//   standalone: true,
//   imports: [AgGridAngular],
//   templateUrl: './sign-up.component.html',
//   styleUrl: './sign-up.component.css'
// })
// export class SignUpComponent {
//   constructor(public studentService: StudentsService){}

//   studentList = this.studentService.getStudents();
  
//   columnDefs: ColDef[] = [
//     { field: 'name', headerName: 'Name', sortable: true, filter: true },
//     { field: 'phone', headerName: 'Number Phone', sortable: true, filter: true },
//     { field: 'lessonName', headerName: 'Course', sortable: true, filter: true },
//     { field: 'paid', headerName: 'Paid', sortable: true, filter: true },
//     { headerName: 'Details', cellRenderer: 'DetailsButtonComponent', cellRendererParams: (params: any) => ({
//       id: params.data.id,
//     })}

//   ];
// }

// import { Input } from '@angular/core';

// @Component({
//   selector: 'app-details-button',
//   template: `<button class="details" (click)="viewDetails()">details</button>`,
// })
// export class DetailsButtonComponent {
//   @Input() id: string = '';

//   constructor(public studentService: StudentsService) {}

//   viewDetails() {
//     const student = this.studentService.getStudents().find(s => s.id === this.id);
//     alert(`Details for ${student?.name}:\nPhone: ${student?.phone}\nCourse: ${student?.lessonName}\nPaid: ${student?.paid ? 'Yes' : 'No'}`);
//     console.log('Viewing details for ID:', this.id);
//   }
// }



// import { StudentsService } from '../../services/students.service';
// import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
// import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
// import type { ColDef, ICellRenderer } from 'ag-grid-community';
// import { Component, inject} from '@angular/core';
// import {FormsModule} from '@angular/forms';
// import {MatButtonModule} from '@angular/material/button';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// // import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog.component';
// ModuleRegistry.registerModules([AllCommunityModule]);


// @Component({
//   selector: 'app-sign-up',
//   standalone: true,
//   templateUrl: './sign-up.component.html',
//   imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,AgGridAngular],
//   styleUrl: './sign-up.component.css'

// })
// export class SignUpComponent {
//   constructor(public studentService: StudentsService){}

//   readonly dialog = inject(MatDialog);
//   studentList = this.studentService.getStudents();

//   columnDefs: ColDef[] = [
//     { field: 'name', headerName: 'Name', sortable: true, filter: true },
//     { field: 'phone', headerName: 'Number Phone', sortable: true, filter: true },
//     { field: 'lessonName', headerName: 'Course', sortable: true, filter: true },
//     { field: 'paid', headerName: 'Paid', sortable: true, filter: true },
//     { field: 'details', headerName: 'Details', cellRenderer: DialogOverviewExampleDialogComponent }
//   ];  
// }


// // import { Component } from '@angular/core';
// // import { ICellRendererAngularComp } from 'ag-grid-angular';

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   template: `<button mat-button (click)="openDialog()">Details</button>`,
//   standalone: true,
//   imports: [],
// })
// export class DialogOverviewExampleDialogComponent implements ICellRendererAngularComp{
//   constructor(public studentService: StudentsService){}

//   readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialogComponent>);
//   private params: any;
//   readonly dialog = inject(MatDialog);
//   studentList = this.studentService.getStudents();

//   agInit(params: any): void {
//     this.params = params;
//   }

//   refresh(): boolean {
//     return false;
//   }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   openDialog(): void {
//     const student = this.studentList.find(s => s.id === this.params.data.id);
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
//       data: `Details for ${student?.name}:\nPhone: ${student?.phone}\nCourse: ${student?.lessonName}\nPaid: ${student?.paid ? 'Yes' : 'No'}`,
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       if (result !== undefined) {
//         // Handle the result if needed
//         console.log(`Dialog result: ${result}`);
//       }
//     });
//   }
// }


import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';

// import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
// import { localeTextHE } from '../../types/localeTextHE';
import { StudentsService } from '../../services/students.service';
import { DetailsComponent } from '../../details/details.component';
ModuleRegistry.registerModules([AllCommunityModule]);


@Component({
  selector: 'app-participant',
  imports: [AgGridAngular, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true
})
export class SignUpComponent {
  constructor(public studentService: StudentsService, private dialog: MatDialog) { }

  studentList = this.studentService.getStudents();
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
}
