import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';


@Component({
  selector: 'signup',
  templateUrl: '/signup.component.html',
  styleUrls: []
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private myService: ConfigService, private authService: AuthService, private router: Router) {
    this.myForm = formBuilder.group({
      'fullname': ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
      'username': ['', [Validators.required, Validators.pattern("^[a-z0-9]+(?:[_.-][a-z0-9]+)*$")]],
      'phonenumber': ['', { validators: [Validators.required, Validators.pattern("[- +()0-9]{6,}")], updateOn: "blur" }],
      'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      'password': ['', { validators: [Validators.required, Validators.minLength(6), Validators.pattern("^([a-zA-Z0-9@*#]{6,15})$")], updateOn: "blur" }],
      'confirmpassword': ['', [Validators.required]],
    })
  }

  onSignup() {
    const user = {
      fullname: this.myForm.value.fullname,
      username: this.myForm.value.username,
      phonenumber: this.myForm.value.phonenumber,
      email: this.myForm.value.email,
      password: this.myForm.value.password,
    };

    //registeruser
    this.authService.registerUser(user, (data) => {
      if (data.success) {
        this.router.navigateByUrl("/login")
      } else {
        this.router.navigateByUrl("/signup")
        alert("something went wrong")
      }
    })
  }

  ngOnInit(): void {

  }




}
