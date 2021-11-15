import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>HOME</h1>
    <h3>
      Welcome to Vaccination Record System
    </h3>    
    <button >Register New Patient<button>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
