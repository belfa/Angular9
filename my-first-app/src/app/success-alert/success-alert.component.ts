import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<div class="alert alert-success" role="alert">Success Component</div>`,
  styles: [` p { color: green; } `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
