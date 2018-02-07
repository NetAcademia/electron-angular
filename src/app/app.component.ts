import { Component } from '@angular/core';

// import { shell } from 'electron';
// const { shell } = require('electron');
// const { shell } = window.require('electron');
const { shell } = (<any>window).require('electron');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  openPage() {
    shell.openExternal('http://netacademia.hu');
  }
}
