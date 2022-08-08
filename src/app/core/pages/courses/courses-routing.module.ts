import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseActionType } from 'app/core/models/courses'

const routes: Routes = [{ 
      path: '', 
      component: CoursesComponent, 
      children: [
        {
          path: '',
          loadChildren: () => import('app/core/pages/courses/courses-list/courses-list.module').then(m => m.CoursesListModule)
        },
        {
          path: 'new',
          loadChildren: () => import('app/core/pages/courses/add-edit/add-edit.module').then(m => m.AddEditModule),
          data: { type: CourseActionType.Add } 
        },
        {
          path: ':id',
          loadChildren: () => import('app/core/pages/courses/add-edit/add-edit.module').then(m => m.AddEditModule),
          data: { type: CourseActionType.Edit }
        },
      ] 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
