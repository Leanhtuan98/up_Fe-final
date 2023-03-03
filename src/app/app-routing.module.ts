import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./user/login/login.component";
import {HomeComponent} from "./page/home/home.component";
import {RegisterComponent} from "./user/register/register.component";
import {BodyComponent} from "./page/body/body.component";
import {ShowComponent} from "./admin/tour/show/show.component";
import {EditComponent} from "./admin/tour/edit/edit.component";
import {DeleteComponent} from "./admin/tour/delete/delete.component";
import {CreateComponent} from "./admin/tour/create/create.component";

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'body', component: BodyComponent},
  {path: '',component:HomeComponent},
  {path: 'admin', component: ShowComponent},
  {path:'edit/:id', component: EditComponent},
  {path:'create', component: CreateComponent},
  {path:'delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
