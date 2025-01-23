import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { user } from '../register/register.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


 loginForm: FormGroup;
  loading = false;
  error = '';
  formBuilder: any;
  constructor(private http: HttpClient,
     private router: Router,
     private route: ActivatedRoute,
     private formbuilder: FormBuilder,
     private userservice:UserService)
   {
    this.loginForm = this.formbuilder.group({ // Use 'formbuilder' here
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Get form controls
  get f() {
    return this.loginForm.controls as {
      email: any;
      password: any;
    };
  }


  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // Call the login method from the service
    const { email, password } = this.loginForm.value;
    this.userservice.login({ email, password }).subscribe(
      (response) => {
        // Store the token in localStorage
        // localStorage.setItem('authToken', response.token);
        localStorage.setItem('userId', response.userid);
      console.log("Hello");

        if(response.role==='ADMIN'){
          this.router.navigate(['/list']);

        }
        else{
                  this.router.navigate(['/userlist']);

        }

        // Redirect to the profile or dashboard
      },
      (error) => {
        this.error = 'Invalid credentials';
        this.loading = false;
      }
    );}

  }









