import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgxIndexedDBModule } from 'ngx-indexed-db';

import { STORE_NAME } from './constants';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,

    NgxIndexedDBModule.forRoot({
      name: 'StudentsDb',
      version: 1,
      objectStoresMeta: [{
        store: STORE_NAME,
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'firstName', keypath: 'firstName', options: { unique: false } },
          { name: 'lastName', keypath: 'lastName', options: { unique: false } },
          { name: 'birthDate', keypath: 'birthDate', options: { unique: false } },
          { name: 'program', keypath: 'program', options: { unique: false } }
        ]
      }]
    })
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'sl-SI' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
