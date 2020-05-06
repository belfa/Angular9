import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<div class="alert alert-danger" role="alert">Warning Component</div>`,
  styles: [` p { color: red; } `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
