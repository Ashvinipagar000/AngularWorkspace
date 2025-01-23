import { UserserviceService } from 'src/app/Service/userservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface user {
  username: string;
  email: string;
  password: string;
  userid: number;
  ip: string;
  birthdate: Date;

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  user: user = {
    username: ' ',
    email: ' ',
    password: ' ',
    userid: 0,
    ip:' ',
    birthdate: new Date(),


  };


  constructor(private fb: FormBuilder, private router: Router, private userservice:UserserviceService) {
    // Initialize the form group in the constructor
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      ip: [''],
      userid: [0, Validators.required],
    });
  }

  username:any= ' ';
    email: any=' ';
    password:any= ' ';
    userid:any= 0;
    address:any=' ';
    birthdate:any= new Date();
    ip:any=' ';

  ngOnInit(): void {
    // No need to initialize registrationForm here, it's already done in the constructor
  }



  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Handle form submission here
      console.log(this.registrationForm.value);

  }
}

// createtask() {
//   const user = {
//     username: this.username, // Ensure these properties are defined in your component
//     email: this.email,
//     address: this.address,
//     userid: this.userid,
//     ipaddress: this.ipaddress
//   };

//   // Use the injected service to send data to the server
//   this.userservice.registeruser(user).subscribe(
//     (response: any) => {
//       console.log(response);
//       alert('Task Added Successfully!');
//       this.router.navigate(['/listing']); // Navigate to the desired route
//     },
//     (error: any) => {
//       console.error('Error:', error);
//       alert('An error occurred while adding the task.');
//     }
//   );
// }

createtask() {
  const user = {
    username: this.username, // Bind inputs from the form
    email: this.email,
    ip: this.ip,
    userid: this.userid,
  };

  // Call the service to register the user
  this.userservice.registeruser(user).subscribe({
    next: (response) => {
      console.log(response);
      alert('User Registered Successfully!');
      this.router.navigate(['/listing']);
    },
    error: (error) => {
      console.error('Error:', error);
      alert('An error occurred while registering the user.');
    },
    complete: () => {
      console.log('Registration request completed.');
    },
  });

}




}
