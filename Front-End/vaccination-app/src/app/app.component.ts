import { Component } from '@angular/core';
// <app-home></app-home>
// <app-footer></app-footer>
@Component({
  selector: 'app-root',
<<<<<<< HEAD
  template: `
  <app-home></app-home>
   <router-outlet></router-outlet>
   <app-footer></app-footer>
  `,
  styles: []
=======
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
>>>>>>> 5f06a21b (commit working registration)
})
export class AppComponent {
  title = 'vaccination-app';
}
// <app-sign-up></app-sign-up>