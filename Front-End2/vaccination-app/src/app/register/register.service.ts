import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  postPatient(patient: any) {
    console.log('post patient method is called');
    console.log(patient);
    return this.http.post('http://localhost:3000/patients', patient);
  }

}
