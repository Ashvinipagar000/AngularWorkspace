import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/Service/userservice.service';
import { user } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: user[] = [];

  constructor(private userService: UserserviceService  , private http: HttpClient) {}


  //

  userList: any[] = [];


  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.userList = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );

    this.loadUsers();
  }




  loadUsers(): void {
    this.http.get<any[]>('http://localhost:8080/tbluser/getuserlist').subscribe(
      (response: user[]) => {
        this.users = response;
        console.log('Users loaded:', this.users);
      },
      (error: any) => {
        console.error('Error loading users:', error);
      }
    );
  }


  updateUser(id: number, updatedUser: user) {
    this.userService.edituser(id, updatedUser).subscribe(
      (response: any) => {
        console.log(response);
        alert('User information updated successfully!');
      },
      (error: any) => {
        console.error(error);
        alert('Error updating user information!');
      }
    );
  }


  deleteuser(id: number) {
    if (confirm('Are you sure you want to delete this user? This will also delete their related IP records.')) {
      this.userService.deleteuser(id).subscribe(
        (response: any) => {
          console.log(response);
          alert('User deleted successfully!');
          this.loadUsers();
        },
        (error: any) => {
          console.error(error);
          alert('Error deleting user!');
        }
      );
    }
  }
}
