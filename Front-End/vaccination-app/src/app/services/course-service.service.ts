import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../constants/GlobalConstants';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const base_url: string = '/course'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  id: string = '';
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getCourses() {
    console.log('Get courses API calling' + GlobalConstants.API_ENDPOINT + base_url);
    return this.http.get(GlobalConstants.API_ENDPOINT + base_url, httpOptions);
  }

  deleteCourse(id: string) {
    // this.fetchIdFromQueryParams();
    return this.http.delete(GlobalConstants.API_ENDPOINT + base_url + '/' + id, httpOptions);
  }

  ngOnInit() {

  }

  
}
