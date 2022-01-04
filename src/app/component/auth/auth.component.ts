import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: UserService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() { }

  loginUser() {    
    this.authService.signIn(this.signinForm.value);
  }

}
