import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  signin(email: String, password: String) {
    let loginBody = {
      email: email,
      password: password
    }
    console.log('get patients method is called');
    return this.http.post('http://localhost:3000/staff/signin', loginBody, httpOptions);
  }
}
