import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Student } from '../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public maxBirthDate = this.getAgeDate(14);
  public minBirthDate = this.getAgeDate(100);
  public student: Student;
  public isNew = false;
  public programs = ['Informatika', 'Kozmetika'];

  ngOnInit(): void {
    this.student = new Student();
    this.student.id = undefined;
    this.student.birthDate = this.getAgeDate(18);
    this.student.program = this.programs[0];
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

  private getAgeDate(age: number) {
    const date = new Date();
    return new Date(date.setFullYear(date.getFullYear() - age));
  }
}
