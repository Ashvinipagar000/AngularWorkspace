// import { NgModule, Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { RegisterComponent } from './Component/register/register.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import {MatDialogModule} from "@angular/material/dialog";
// import { UserListComponent } from './Component/list/list.component';





// @NgModule({
//   declarations: [
//     AppComponent,
//     UserListComponent,
//     RegisterComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule,
//     BrowserAnimationsModule,
//     CommonModule,
//     RouterModule,
//     AppRoutingModule,
//     MatDialogModule,
//     ReactiveFormsModule

//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { ListComponent } from './Component/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { IpComponent } from './Component/ip/ip.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListComponent,
    IpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
