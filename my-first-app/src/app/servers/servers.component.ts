import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

}
