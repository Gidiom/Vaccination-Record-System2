import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: `./login.component.html`,
  styles: [
    `
    #username{font-size: large;}
    #password{font-size: large;}
    .form-control{width: 30%}
    .form-control{height: 10%}
    .btn btn-primary{width: 30%}
    `
  ]
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
          private router: Router,
          private loginService: LoginService) { 
            this.loginForm = this.formBuilder.group({
              email: ['', Validators.required],
              password: ['', Validators.required]
            });
          }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.signin(this.loginForm?.value?.email, this.loginForm?.value?.password).subscribe((data: any) => {
        console.log(data);
        localStorage.setItem("loggedInUser", data.data.jwttoken);
        this.router.navigateByUrl('/patients');

    })

  }

}
