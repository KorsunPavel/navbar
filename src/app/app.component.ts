import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <top-bar></top-bar>
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
