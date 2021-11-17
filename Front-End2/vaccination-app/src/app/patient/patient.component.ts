import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  template: `
  <table>
  <tr>
    <th>patient Id</th>     
    <th>First name</th>
    <th>Last name</th>
    <th>status</th>
  </tr>
  <tr *ngFor="let patient of patients" >
    <td>{{ patient.patientId }}</td>
    <td>{{ patient.fname }}</td> 
    <td>{{ patient.lname }}</td> 
    <td>{{ patient.status }}</td> 
   
  </tr>
</table>
<button (click)="createStaff()" >Create Staff</button>
<button (click)="createPatient()" >Create Patient</button>
  `,
  styles: [
    'td { text-align: center; }',
    'table {width: 50%;}',
    '#course_id {display: none}',
    'table, th, td {border: 1px solid black;}'
  ]
})
export class PatientComponent implements OnInit {

  constructor(private patientService: PatientService,
    private router: Router) { }
  patients: any = [];

  fetchPatients(): void{
    this.patientService.getPatients()
    .subscribe(
      (patients: any)=>{
        this.patients=patients;
        
      },
      (error: any)=>{
        console.log(error);
      })
      console.log(this.patients);
      
  }

  createStaff(): void{
    this.router.navigate(['/createStaff']);
    this.patientService.getPatients()
    .subscribe(
      (this.patients)={}
    )
  }

  createPatient(): void{
    this.router.navigate(['/createPatient']);
    console.log('Good Bye')
  }


  ngOnInit(): void {
    this.fetchPatients();
  }

}
