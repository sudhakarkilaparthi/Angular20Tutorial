import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular20Tutorial');
  // loggedUserName: string = '';

  // constructor(private masterService: Master) {
  //   this.readLoggedData();
  //   masterService.onLogin.subscribe((res) => {
  //     this.readLoggedData();
  //   });
  // }

  // readLoggedData() {
  //   const loggedData = localStorage.getItem('angular20user');
  //   if (loggedData != null) {
  //     this.loggedUserName = loggedData;
  //   }
  // }
  // onLogOff() {
  //   localStorage.removeItem('angular20user');
  //   this.readLoggedData();
  //   this.loggedUserName = '';
  // }
}
