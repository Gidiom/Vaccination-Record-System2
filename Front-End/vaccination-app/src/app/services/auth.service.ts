import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class AuthService {
  authToken: any;
  user: any;
  apiUrl = 'http://localhost:3000/';

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  registerUser(user: { fullname: any; username: any; phonenumber: any; email: any; password: any; }, callback: { (data: any): void; (arg0: Object): void; }) {
    this.http.post(this.apiUrl + 'users/signup', user,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).subscribe(data => {
        callback(data);
      })
  }

  loginUser(user: any, callback: (arg0: Object) => void) {
    this.http.post(this.apiUrl + 'users/login', user,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      }).subscribe(data => {
        callback(data);
      })
  }

  storeUserData(token: string, user: any) {
    localStorage.setItem('id_token', token)
    //local storage only store string
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  //fetch token from local storage
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }




  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}

