import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(data); //get data from DB
  }

  displayedColumns: string[] = ['firstName', 'lastName'];
  dataSource: MatTableDataSource<Student>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
