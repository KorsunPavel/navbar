import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div style="width: 100%; height: 100%; bacgrouuund-color:yellow;"> 
  <p>
    Hello from Home!!!
  </p>
 </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
