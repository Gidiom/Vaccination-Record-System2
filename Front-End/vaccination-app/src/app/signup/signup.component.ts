import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  template: `
  <form>
    <mat-form-field appearance="fill">
    <mat-label>Input</mat-label>
    <input matInput placeholder = "username" [(ngModel)]= "username" name="username">
  </mat-form-field>

  <mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "email" [(ngModel)]= "email" name="email">
</mat-form-field>


<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "fullname" [(ngModel)]= "fullname" name="fullname">
</mat-form-field>

<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "password" [(ngModel)]= "password" name="password">
</mat-form-field>

<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "phonenumber" [(ngModel)]= "phonenumber" name="phonenumber">
</mat-form-field>

<button (click)= "saveHandler()">Add New Staff</button>
</form>
  `,
  styles: [
  `:host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }`
  ]
})
export class SignupComponent implements OnInit {

  username: String='';
  email: String='';
  fullname: String='';
  password: String='';
  phonenumber: Number= 1112223333;

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
  }
  saveHandler(){
    const staff:any = {
      username : this.username,
      email: this.email,
      fullname: this.fullname,
      password: this.password,
      phonenumber: this.phonenumber
    }
    this.signupService.postStaff(staff)
    .subscribe()
  }

}
