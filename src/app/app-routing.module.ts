import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('app/core/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'courses', canActivate: [AuthGuard], canActivateChild: [AuthGuard], loadChildren: () => import('app/core/pages/courses/courses.module').then(m => m.CoursesModule)},
  { path: 'not-found', loadChildren: () => import('./core/pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'courses', loadChildren: () => import('./core/pages/courses/courses.module').then(m => m.CoursesModule) },
  { path: '**', loadChildren: () => import('app/core/pages/not-found/not-found.module').then(m => m.NotFoundModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
