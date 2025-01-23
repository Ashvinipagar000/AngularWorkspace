import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { ListComponent } from './component/list/list.component';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './component/userlist/userlist.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login',pathMatch:'full'
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'userlist', component: UserListComponent
  },
  { path: 'user/:userId', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
