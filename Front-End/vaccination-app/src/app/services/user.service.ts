import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/')
  }
  logout() {
    return this.http.get<logoutStatus>('/')
  }

}