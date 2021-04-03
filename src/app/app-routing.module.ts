import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EditStudentComponent } from './edit-student/edit-student.component'
import { StudentsComponent } from './students/students.component'

const routes: Routes = [
  {
    path: '/',
    component: StudentsComponent
  },
  {
    path: '/edit/',
    component: EditStudentComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
