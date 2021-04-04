import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Student } from '../models';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(
    private location: Location,
    private db: NgxIndexedDBService) {
  }

  public student: Student;
  public isNew = false;

  public firstNameControl = new FormControl('', [
    Validators.required
  ])

  public lastNameControl = new FormControl('', [
    Validators.required
  ])

  ngOnInit(): void {
    this.student = new Student();
    this.isNew = true;
  }

  save() {
    // check if already exists
    // this.db.add();
  }

  goBack() {
    this.location.back();
  }
}
