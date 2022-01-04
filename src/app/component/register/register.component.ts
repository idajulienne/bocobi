import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    public fb: FormBuilder,
    public authService: UserService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  registerUser(){    
     this.authService.signUp(this.signupForm.value).subscribe(
      (data : User)=> {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log("err "+err.message);
      }
    );
  }

}
