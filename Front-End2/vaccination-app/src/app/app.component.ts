import { Component } from '@angular/core';
// <app-home></app-home>
// <app-footer></app-footer>
@Component({
  selector: 'app-root',
  template: `
  <app-home></app-home>
   <router-outlet></router-outlet>
   
   
   <app-footer></app-footer>
  `,
  // <h1>Create New Staff</h1>
  // <app-signup></app-signup>
  //  <h1>Create New Patient</h1>
  //  <app-register></app-register>
  styles: []
})
export class AppComponent {
  title = 'vaccination-app';
}
// <app-sign-up></app-sign-up>