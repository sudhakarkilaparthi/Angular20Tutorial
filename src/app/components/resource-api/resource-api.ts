import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css',
})
export class ResourceAPI {
  http = inject(HttpClient);

  userData = resource({
    loader: () => {
      return fetch('https://jsonplaceholder.typicode.com/users').then((result) => result.json());
    },
  });

  usersList = rxResource({
    stream: () => this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'),
  });

  constructor() {
    setTimeout(() => {
      this.usersList.reload();
    }, 5000);
  }
}
