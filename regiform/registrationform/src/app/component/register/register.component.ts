import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

export interface user {
  [x: string]: any;
  userid: number;
  username: string;
  email: string;
  password: string;
  country: string;
  state: string;
  city: string;
  role: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
isActive(arg0: string) {
throw new Error('Method not implemented.');
}

  submitted = false;
  registrationForm!: FormGroup;

  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  filteredCountries: any[] = [];
  filteredStates: any[] = [];
  filteredCities: any[] = [];
  selectedCountry:' ' | undefined;
  selectedState:' ' | undefined;
  selectedCity:' ' | undefined;
username: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router:Router) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initially load countries when the component is initialized
    this.loadCountries();
    this.loadCities();
    this.loadStates();



  }

  get f() {
    return this.registrationForm.controls;
  }

  // Submit form and send data to the server
  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    const userData = this.registrationForm.value;
    this.userService.registeruser(userData).subscribe(
      response => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  // Load countries
  loadCountries(): void {
    this.userService.getCountries().subscribe((data) => {
      this.countries = data;
      this.filteredCountries = data;  // Initialize filteredCountries with all countries
    });
  }

  // Load states based on selected country
  loadStates(): void {
    this.userService.getStates().subscribe((data) => {
      this.states = data;
      this.filteredStates = data;
    });
  }

  // Load cities based on selected state
  loadCities(): void {
    this.userService.getCities().subscribe((data) => {
      this.cities = data;
      this.filteredCities = data;
    });
  }
}




//   countries: any[] = [];
//   states: any[] = [];
//   cities: any[] = [];
//   filteredCountries: any[] = [];
//   filteredStates: any[] = [];
//   filteredCities: any[] = [];
//   showPassword: boolean = false;

//   constructor(private fb: FormBuilder, private UserService: UserService, private router: Router) {}

//   ngOnInit(): void {
//     this.registrationForm = this.fb.group({
//       userid: ['', Validators.required],
//       username: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', Validators.required],
//       country: ['', Validators.required],
//       state: ['', Validators.required],
//       city: ['', Validators.required],
//       role: ['', Validators.required]
//     }, { validators: this.passwordMatchValidator });

//     this.loadCountries();
//   }

//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password')?.value;
//     const confirmPassword = form.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }

//   togglePasswordVisibility() {
//     this.showPassword = !this.showPassword;
//   }

//   loadCountries(): void {
//     this.UserService.getCountries().subscribe((data) => {
//       this.countries = data;
//       this.filteredCountries = data; // Initialize filteredCountries with all countries
//     });
//   }

//   loadStates(): void {
//     const selectedCountry = this.registrationForm.get('country')?.value;
//     if (selectedCountry) {
//       this.UserService.getStates(selectedCountry).subscribe((data) => {
//         this.states = data;
//         this.filteredStates = data;
//       });
//     }
//   }

//   loadCities(): void {
//     const selectedState = this.registrationForm.get('state')?.value;
//     if (selectedState) {
//       this.UserService.getCities(selectedState).subscribe((data) => {
//         this.cities = data;
//         this.filteredCities = data;
//       });
//     }
//   }


//   save(): void {
//     if (this.registrationForm.valid) {
//       const { userid, username, email, password, country, state, city, role } = this.registrationForm.value;
//       const user: user = { userid, username, email, password, country, state, city, role };

//       // Display loading spinner here
//       this.isLoading = true;

//       this.UserService.registeruser(user).subscribe({
//         next: (response) => {
//           console.log('User registered successfully:', response);
//           alert('User registered successfully!');
//           this.router.navigate(['/list']);
//           this.isLoading = false; // Hide loading spinner after success
//         },
//         error: (error) => {
//           console.error('Error during registration:', error);
//           alert('Registration failed. Please try again later.');
//           this.isLoading = false; // Hide loading spinner after failure
//         }
//       });
//     } else {
//       console.error('Form is invalid');
//       alert('Please fill all required fields correctly.');
//     }
//   }

//   // Optionally, display loading state during registration
//   isLoading = false;
