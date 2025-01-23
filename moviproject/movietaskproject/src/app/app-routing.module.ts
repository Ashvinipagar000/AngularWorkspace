import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './component/movielist/movielist.component';

const routes: Routes = [
  {
    path:'', redirectTo:'list',pathMatch:'full'
  },
  {
    path: 'list', component: MovielistComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
