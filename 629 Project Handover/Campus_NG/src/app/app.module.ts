import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { CreateJobPostingComponent } from './components/create-job-posting/create-job-posting.component';
import { AllJobPostingComponent } from './components/all-job-posting/all-job-posting.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { AllJobApplicationComponent } from './components/all-job-application/all-job-application.component';
import { ScheduleInterviewComponent } from './components/schedule-interview/schedule-interview.component';
import { AllInterviewsComponent } from './components/all-interviews/all-interviews.component';
import { RescheduleInterviewComponent } from './components/reschedule-interview/reschedule-interview.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    UserLoginComponent,
    CreateUserComponent,
    AllUserComponent,
    RegisterStudentComponent,
    AllStudentsComponent,
    CreateJobPostingComponent,
    AllJobPostingComponent,
    JobApplicationComponent,
    AllJobApplicationComponent,
    ScheduleInterviewComponent,
    AllInterviewsComponent,
    RescheduleInterviewComponent,
    MenuComponent,
    FooterComponent,
    WelcomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
