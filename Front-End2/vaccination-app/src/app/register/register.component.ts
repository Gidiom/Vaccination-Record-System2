import { Component, OnInit, Pipe } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  template: `
  <form>
    <mat-form-field appearance="fill">
    <mat-label>Input</mat-label>
    <input matInput placeholder = "patientId" [(ngModel)]= "patientId" name="patientId">
  </mat-form-field>

  <mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "fname" [(ngModel)]= "fname" name="fname">
</mat-form-field>


<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "lname" [(ngModel)]= "lname" name="lname">
</mat-form-field>

<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "age" [(ngModel)]= "age" name="age">
</mat-form-field>

<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "dateOfBirth" [(ngModel)]= "dateOfBirth" name="dateOfBirth">
</mat-form-field>

<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "street" [(ngModel)]= "street" name="street">
</mat-form-field>

<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "city" [(ngModel)]= "city" name="city">
</mat-form-field>

<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "state" [(ngModel)]= "state" name="state">
</mat-form-field>


<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "zipcode" [(ngModel)]= "zipcode" name="zipcode">
</mat-form-field>


<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "vaccinationType" [(ngModel)]= "vaccinationType" name="vaccinationType">
</mat-form-field>


<mat-form-field appearance="fill">
<mat-label>Input</mat-label>
<input matInput placeholder = "true" [(ngModel)]= "status" name="status">
</mat-form-field>

<button (click)= "saveHandler2()">Add New Patient</button>
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
export class RegisterComponent implements OnInit {

  patientId: String='';
  fname: String='';
  lname: String='';
  age: Number =0;
  // @Pipe dateOfBirth: Date= ''
  dateOfBirth: String= ''
  street: String='';
  city: String='';
  state: String= '';
  zipcode: Number= 0;
  vaccinationType: String='';
  status: Boolean= true;


  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }
  saveHandler2(){
    const patient:any = {
      patientId : this.patientId,
      fname: this.fname,
      lname: this.lname,
      age: this.age,
      dateOfBirth: this.dateOfBirth,
      address :{
        street: this.street,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode
      },
      vaccinationType: this.vaccinationType,
        status: this.status

    }
    this.registerService.postPatient(patient)
    .subscribe()
  }

}


// <mat-form-field appearance="fill">
//   <mat-label>Select</mat-label>
//   <mat-select placeholder = "vaccinationType" [(ngModel)]= "vaccinationType">
//     <mat-option value="one">Pfizer</mat-option>
//     <mat-option value="two">Moderna</mat-option>
//   </mat-select>
// </mat-form-field>

// <mat-form-field appearance="fill">
//   <mat-label>Select</mat-label>
//   <mat-select placeholder = "status" [(ngModel)]= "status">
//     <mat-option value="one">true</mat-option>
//     <mat-option value="two">false</mat-option>
//   </mat-select>
// </mat-form-field>