import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getPatients() {
    console.log('get patients method is called');
    return this.http.get('http://localhost:3000/patients', httpOptions);
  }

  deletePatients(id: string) {
    return this.http.delete('http://localhost:3000/patients/' + id, httpOptions);
  }

  ngOnInit() {}

}
