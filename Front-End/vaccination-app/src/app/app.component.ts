import { Component } from '@angular/core';
// <app-home></app-home>
// <app-footer></app-footer>
@Component({
  selector: 'app-root',
  template: `
  <app-home></app-home>
   <router-outlet></router-outlet>
   <signup></signup>
   <app-footer></app-footer>
  `,
  styles: ['./app.component.css']

})
export class AppComponent {
  title = 'vaccination-app';
}
// <app-sign-up></app-sign-up>