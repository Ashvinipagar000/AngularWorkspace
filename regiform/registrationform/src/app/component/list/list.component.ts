import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { user } from '../register/register.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit {
  userid!: number;
     User:user={
       userid: 0,
       username: '',
       email: '',
       password: '',
       country: '',
       state: '',
       city: '',
       role: ''
     }
     constructor(private userservice:UserService,
      private router: Router,
      private dialog: MatDialog,
        ){}
      users:any;
      editUserId: number | null = null;
      editForm: any = {};
      currentPage: number = 1; // Current page number
    usersPerPage: number = 5; // Number of users to display per page
    totalPages: number = 0; // Total number of pages

      filteredUsers: any[] = []; // Holds users to display (all or searched)


//search

userData: any = null; // Holds the data of the user being searched
  searchName: string = ''; // Holds the name entered in the search bar
  isSearchActive: boolean = false;

  ngOnInit(): void {
    // Fetch the initial list of users
    this.userservice.getallusers().subscribe(
        (data: any[]) => {
            this.users = data; // Save the full list of users
            this.filteredUsers = [...this.users]; // Initially display all users
            this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage); // Calculate total pages

        },
        (error: any) => {
            console.error('Error fetching all users:', error);
        }
    );
}

  searchUser(): void {
    // Trim the input to avoid unnecessary API calls
    if (this.searchName.trim()) {
        // Call the API to fetch user data by name
        this.userservice.getUserBYName(this.searchName).subscribe(
            (data: any) => {
                // If data is returned, show only the searched user's data
                if (data) {
                    this.filteredUsers = Array.isArray(data) ? data : [data]; // Normalize data to an array
                    this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage); // Recalculate pages
                    this.currentPage = 1;
                  } else {
                    // If no user is found, clear the filtered list
                    this.filteredUsers = [];
                }
                this.isSearchActive = true;
            },
            (error: any) => {
                // Handle API errors gracefully
                console.error('Error fetching user data:', error);
                this.filteredUsers = [];
                this.isSearchActive = false;
            }
        );
    }
    else {
        // If the search input is empty, clear the filtered users
        this.filteredUsers = [];
        this.isSearchActive = false;
    }
        //getUserBYEmail
        if (this.searchName.trim()) {

        this.userservice.getUserBYEmail(this.searchName).subscribe(
          (data: any) => {
              // If data is returned, show only the searched user's data
              if (data) {
                  this.filteredUsers = Array.isArray(data) ? data : [data]; // Normalize data to an array
                  this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage); // Recalculate pages
                  this.currentPage = 1;
                } else {
                  // If no user is found, clear the filtered list
                  this.filteredUsers = [];
              }
              this.isSearchActive = true;

          });
        }else {
          // If the search input is empty, clear the filtered users
          this.filteredUsers = [];
          this.isSearchActive = false;
      }
          //getUserBYCountry
          if (this.searchName.trim()) {
          this.userservice.getUserBYCountry(this.searchName).subscribe(
            (data: any) => {
                // If data is returned, show only the searched user's data
                if (data) {
                    this.filteredUsers = Array.isArray(data) ? data : [data]; // Normalize data to an array
                    this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage); // Recalculate pages
                    this.currentPage = 1;
                  } else {
                    // If no user is found, clear the filtered list
                    this.filteredUsers = [];
                }
                this.isSearchActive = true;

            });}else {
              // If the search input is empty, clear the filtered users
              this.filteredUsers = [];
              this.isSearchActive = false;
          }
            //getUserBYState
            if (this.searchName.trim()) {
            this.userservice.getUserBYState(this.searchName).subscribe(
              (data: any) => {
                  // If data is returned, show only the searched user's data
                  if (data) {
                      this.filteredUsers = Array.isArray(data) ? data : [data]; // Normalize data to an array
                      this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage); // Recalculate pages
                      this.currentPage = 1;
                    } else {
                      // If no user is found, clear the filtered list
                      this.filteredUsers = [];
                  }
                  this.isSearchActive = true;

              });
            }else {
                // If the search input is empty, clear the filtered users
                this.filteredUsers = [];
                this.isSearchActive = false;
            }
            //getUserBYCity
            if (this.searchName.trim()) {
            this.userservice.getUserBYCity(this.searchName).subscribe(
              (data: any) => {
                  // If data is returned, show only the searched user's data
                  if (data) {
                      this.filteredUsers = Array.isArray(data) ? data : [data]; // Normalize data to an array
                      this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage); // Recalculate pages
                      this.currentPage = 1;
                    } else {
                      // If no user is found, clear the filtered list
                      this.filteredUsers = [];
                  }
                  this.isSearchActive = true;

              });
            }else {
                // If the search input is empty, clear the filtered users
                this.filteredUsers = [];
                this.isSearchActive = false;
            }

        }

 // Get the users for the current page
 getPaginatedUsers(): any[] {
  const startIndex = (this.currentPage - 1) * this.usersPerPage;
  const endIndex = startIndex + this.usersPerPage;
  return this.filteredUsers.slice(startIndex, endIndex);
}

// Move to next page
nextPage(): void {
  if (this.currentPage < this.totalPages) {
      this.currentPage++;
  }
}

// Move to previous page
previousPage(): void {
  if (this.currentPage > 1) {
      this.currentPage--;
  }}

// searchUser(): void {
//     if (this.searchName.trim()) {
//       this.userservice.getUserBYName(this.searchName).subscribe(
//         (data: any) => {

//           if (data) {
//             this.filteredUsers = [data]; // Display only the searched user
//             this.isSearchActive = true;
//           }

//           // (data: any) => {
//           //   if (data) {
//           //       this.filteredUsers = Array.isArray(data) ? data : [data]; // Ensure consistent structure
//           //       this.isSearchActive = true;
//           //   } else {
//           //       this.filteredUsers = []; // Clear the list if no data is found
//           //       this.isSearchActive = false;
//           //   }

//           },// this.userData = data; // Assign the searched user data
//           // // console.log('Searched user data:', this.userData);

//           // //   this.filteredUsers = [data]; // Display only the searched user
//           //   this.isSearchActive = true;

//         (error) => {
//           console.error('Error fetching user by name:', error);
//           alert('User not found or an error occurred.');
//         }
//       );
//     } else {
//       alert('Please enter a valid name to search.');
//     }
//   }

  // Reset search
  // resetSearch(): void {
  //   this.userData = null;
  //   this.searchName = '';
  //   this.isSearchActive = false;


  // }



//search ends here
    //  ngOnInit() {
    //   this.alluser();
    // }

    alluser() {
      this.userservice.getallusers().subscribe((response) => {
        this.users = response;
      });
    }



    startEditing(user: user): void {
      this.editUserId = user.userid;
      this.editForm = { ...user }; // Create a copy of the selected user
    }


    cancelEditing(): void {
      this.editUserId = null;
      this.editForm = {};
    }
///
saveUser(user: user): void {
  const updatedTask = { ...this.editForm }; // Copy the updated form data
  this.userservice.updateuser(user, updatedTask).subscribe(() => {
    // Update the user in the local list
    this.users = this.users.map((u: { userid: number; }) =>
      u.userid === user.userid ? { ...u, ...updatedTask } : u
    );
    // Reset editing state
    this.editUserId = null;
    this.editForm = {};
  }, (error) => {
    console.error('Error updating user:', error);
  });
}


    //

    updateUser(user: any, updateduser: any): void {
      this.userservice.updateuser(user.userid, updateduser).subscribe((updated) => {
        // Update the specific user in the local array
        this.users = this.users.map((u: { userid: any; }) =>
          u.userid === user.userid ? { ...u, ...updateduser } : u
        );
      });
    }






    deleteUser(user: user){
      const dialogRef = this.dialog.open(ConfirmDialogComponent);

      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          this.userservice.deleteuser(user).subscribe(
            () => {
              this.users = this.users.filter((u: { userid: any; }) => u.userid !== user.userid);
              alert('user deleted successfully');
            },
            (error: any) => {
              console.error('Error deleting user:', error);
              alert('Failed to delete user');
            }
          );
        }
      });

    }


      }
