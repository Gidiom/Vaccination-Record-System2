import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>Header: Vaccination Record System</h1>  
    
  `,
  styles: [
    'h1 { background-color: blue; }'
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
