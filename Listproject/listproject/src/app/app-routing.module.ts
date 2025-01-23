import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { GuidingParaComponent } from './components/guiding-para/guiding-para.component';

const routes: Routes = [
  {path:"list", component: ListComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path: 'guidingpara', component:GuidingParaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
