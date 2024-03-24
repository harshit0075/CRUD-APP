import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { EditComponent } from './component/edit/edit.component';
import { DeleteComponent } from './component/delete/delete.component';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [
  {
    path:'add',component:AddComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  },
  {
    path:'delete',component:DeleteComponent
  },
  {
    path:'list',component:ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
