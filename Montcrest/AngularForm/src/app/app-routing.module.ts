import { RegisterComponent } from './Component/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Component/list/list.component';
import { IpComponent } from './Component/ip/ip.component';

const routes: Routes = [
  {
    path:'', redirectTo:'register',pathMatch:'full'
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'listing', component: ListComponent
  },
  {
    path: 'ip', component: IpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

