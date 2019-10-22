import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'works', component: WorksComponent, children: [
    {path: '', redirectTo: '/works/cenzor', pathMatch: 'full'},
    {path: 'cenzor', component: CenzorComponent},
    {path: 'userslist', component: UserslistComponent},
    {path: 'tasklist', component: TasklistComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
