import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {path: '', component: PatientComponent}
    ])
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientModule { 
// patientId: String = '';
// fname: String = '';
// lname: String = '';
// age :Number = 0;
// dateOfBirth: Number =  Date.now();
// address: Object= {};
// vaccinationType:String = '';
// status:Boolean =false;
}
