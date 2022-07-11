import { AddEditComponent } from './pages/courses-list/add-edit/add-edit.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 
  { path: '', component: LoginComponent },
  { path: 'Courses', component: CoursesListComponent, children: [
  { path: 'New-Course', component: AddEditComponent  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
