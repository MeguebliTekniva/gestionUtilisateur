import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsUserComponent } from './details-user/details-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  {path:'list',component:ListUserComponent},
  {path:'user',component:DetailsUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
