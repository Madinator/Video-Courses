import { CoreModule } from './core/core.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./core/pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'Courses', loadComponent: () => import('./core/pages/courses-list/courses-list.component').then(m => m.CoursesListComponent) },
  { path: 'New-Course', loadChildren: () => import('./core/pages/courses-list/add-edit/add-edit.component').then(m => m.AddEditComponent) },
  { path: '**', loadComponent: () => import('./core/pages/login/login.component').then(m => m.LoginComponent) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
