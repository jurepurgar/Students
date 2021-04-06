import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { STORE_NAME } from '../constants';
import { Student } from '../models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(
    private db: NgxIndexedDBService
  ) {}

  ngOnInit(): void {
    this.reloadStudents();
  }

  displayedColumns: string[] = ['name', 'birthDate', 'program', 'actions'];
  dataSource: MatTableDataSource<Student>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeStudent(id: string) {
    if (confirm('Ali res želite izbrisati izbran element?')) {
      this.db.delete(STORE_NAME, id);
      this.reloadStudents();
    }
  }

  private reloadStudents() {
    this.db.getAll(STORE_NAME).subscribe(res => {
      const data = res as Student[];
      this.dataSource = new MatTableDataSource<Student>(data);
    });
  }
}
