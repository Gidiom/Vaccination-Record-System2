import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<h1>Footer Part: Vaccination Record System<h3>
  `,
  styles: [
    'h1 { background-color: green; }'
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
