import { Component } from '@angular/core';
export interface Student {
  id: number;
  name: string;
  batchNumber: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: 'Alice', batchNumber: 'Batch A' },
    { id: 2, name: 'Bob', batchNumber: 'Batch B' },
    { id: 3, name: 'Charlie', batchNumber: 'Batch A' },
    // Add more students as needed
  ];

}
