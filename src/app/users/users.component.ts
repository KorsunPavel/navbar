import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
  <div style="width: 100%; height: 100%; bacgrouuund-color:red;"> 
  <p>
    Hello from users!!!
  </p>
 </div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
