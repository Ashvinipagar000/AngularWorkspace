import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { BatchListComponent } from './component/batch-list/batch-list.component';

const routes: Routes = [
 { path:'', component : HomeComponent},
 {
  path:'Studentlist', component:StudentListComponent
 },
 {
  path:'Batchlist', component:BatchListComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
