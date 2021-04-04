import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Student } from '../models';
import { FormControl, Validators } from '@angular/forms';
import { STORE_NAME } from '../constants';

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
    this.student.id = 1;
    this.student.birthDate = new Date(Date.now());
    this.student.program = 'informatika';
    this.isNew = true;
  }

  async save() {
    // check if already exist

    await this.db.add(STORE_NAME, this.student).toPromise();
    console.log('value saved');
  }

  goBack() {
    this.location.back();
  }
}
