import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
})
export class UserListComponent implements OnInit {
  userData: any = null; // To hold logged-in user data
  editMode: boolean = false; // Track if edit mode is active
  editForm: any = {}; // Temporary object to hold form data during edit

  constructor(
    private userservice: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {
      const userId = +storedUserId; // Convert string to number
      this.fetchUserData(userId);
    } else {
      alert('User not logged in');
      this.router.navigate(['/login']); // Redirect to login if not logged in
    }
  }

  // Fetch logged-in user data
  fetchUserData(userId: number): void {
    this.userservice.getuserbyid(userId).subscribe(
      (data: any) => {
        this.userData = data; // Populate user data
        console.log('Fetched user data:', this.userData);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  // Enable edit mode
  startEditing(): void {
    this.editMode = true;
    this.editForm = { ...this.userData }; // Create a copy of the user data
  }

  // Cancel editing
  cancelEditing(): void {
    this.editMode = false;
    this.editForm = {};
  }

  // Save user data
  saveUser(): void {
    const updatedUser = { ...this.editForm }; // Updated user data
    this.userservice.updateuser(this.userData.userid, updatedUser).subscribe(
      () => {
        this.userData = { ...updatedUser }; // Update local data
        this.editMode = false; // Exit edit mode
        this.editForm = {};
        alert('User data updated successfully');
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}


