import { CoreModule } from './core/core.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('app/core/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'Courses', loadComponent: () => import('app/core/pages/courses-list/courses-list.module').then(m => m.CoursesListModule) },
  { path: 'New-Course', loadComponent: () => import('app/core/pages/courses-list/add-edit/add-edit.component').then(m => m.AddEditComponent) },
  { path: '**', loadComponent: () => import('app/core/pages/login/login.module').then(m => m.LoginModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
