import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  postStaff(staff: any) {
    console.log('post staff method is called');
    return this.http.post('http://localhost:3000/staff/register', staff);
  }

}
