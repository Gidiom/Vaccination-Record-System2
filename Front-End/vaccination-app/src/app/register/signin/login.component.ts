import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private Auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  login() {
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.Auth.loginUser(user, (data) => {
      if (data) {
        this.Auth.setLoggedIn(true)
      } else {
        alert("User not fount")
        this.router.navigateByUrl("/login")

      }
    })


  }

}
