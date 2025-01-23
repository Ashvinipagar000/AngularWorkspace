import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { AddSubjectComponent } from './component/add-subject/add-subject.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AllAttendenceComponent } from './component/all-attendence/all-attendence.component';
import { AllSubjectComponent } from './component/all-subject/all-subject.component';
import { AllStudentComponent } from './component/all-student/all-student.component';
import { AllUserComponent } from './component/all-user/all-user.component';
import { MenuComponent } from './component/menu/menu.component';
import { StudentProfileComponent } from './component/student-profile/student-profile.component';
import { TakeAttendenceComponent } from './component/take-attendence/take-attendence.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ViewSubjectComponent } from './component/view-subject/view-subject.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    AddStudentComponent,
    AddSubjectComponent,
    AddUserComponent,
    AllAttendenceComponent,
    AllSubjectComponent,
    AllStudentComponent,
    AllUserComponent,
    MenuComponent,
    StudentProfileComponent,
    TakeAttendenceComponent,
    UserProfileComponent,
    ViewSubjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
