import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { AddSubjectComponent } from './component/add-subject/add-subject.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AllAttendenceComponent } from './component/all-attendence/all-attendence.component';
import { AllStudentComponent } from './component/all-student/all-student.component';
import { AllSubjectComponent } from './component/all-subject/all-subject.component';
import { AllUserComponent } from './component/all-user/all-user.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { StudentProfileComponent } from './component/student-profile/student-profile.component';
import { TakeAttendenceComponent } from './component/take-attendence/take-attendence.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ViewSubjectComponent } from './component/view-subject/view-subject.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-student',
    component: AddStudentComponent
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'all-attendence',
    component: AllAttendenceComponent
  },
  {
    path: 'all-student',
    component: AllStudentComponent
  },
  {
    path: 'all-subject',
    component: AllSubjectComponent
  },
  {
    path: 'all-user',
    component:AllUserComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'menu',
    component:MenuComponent
  },
  {
    path: 'student-profile',
    component:StudentProfileComponent
  },
  {
    path: 'take-attendence',
    component: TakeAttendenceComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'view-subject',
    component: ViewSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
